const { pg_db } = require('./database');
const { Client } = require('pg');
const helpers = require('../actions/helpers');

const setupTrigger = async () => {
    try {
        await pg_db.none(`
            CREATE OR REPLACE FUNCTION notify_token_changes()
            RETURNS TRIGGER AS $$
            BEGIN
            PERFORM pg_notify('token_changes', json_build_object(
                'id', NEW.id,
                'name', NEW.name,
                'address', NEW.address,
                'signal_x', NEW.signal_x,
                'signal_y', NEW.signal_y,
                'signal_z', NEW.signal_z,
                'signal_int', NEW.signal_int,
                'signal_string', NEW.signal_string
            )::text);
            RETURN NULL;
            END;
            $$ LANGUAGE plpgsql;

            CREATE OR REPLACE TRIGGER user_changes_trigger
            AFTER INSERT OR UPDATE OR DELETE ON tokens
            FOR EACH ROW
            EXECUTE FUNCTION notify_token_changes();
        `);

        console.log('Trigger setup successful');
    } catch (error) {
        console.error('Error setting up trigger:', error);
    }
};

const startListening = async () => {
    try {
        const client = new Client(
            'postgres://postgres:giorgi123@localhost:5432/crypto'
        );
        client.connect();
        client.query('LISTEN token_changes');

        client.on('notification', notification => {
            const parsedNotification = JSON.parse(notification.payload);
            console.log('Received notification:', parsedNotification);
            helpers.filterMethod(parsedNotification.id, 'Update or Insert');
        });
    } catch (error) {
        console.error('Error starting to listen for notifications:', error);
    }
};

module.exports = { setupTrigger, startListening };
