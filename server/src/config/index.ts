import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

export const config = {
    mongo: {
        url: <string>MONGO_URI
    },
    server: {
        port: <string>PORT
    }
}
