import 'reflect-metadata'; // We need this in order to use @Decorators
import config from './config';
import express from 'express';

async function startServer() {
    const app = express();
    await require('./loaders').default({ expressApp: app });
    app.listen(config.port);
}

startServer();