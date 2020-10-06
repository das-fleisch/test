import 'reflect-metadata'; // We need this in order to use @Decorators
import config from './config';
import express, { Request, Response }  from 'express';
import next from "next";

async function startServer() {
    const dev = process.env.NODE_ENV !== "production";
    const app = express();
    const nextApp = next({ dev } );
    const handle = nextApp.getRequestHandler();
    await nextApp.prepare();
    await require('./loaders').default({ expressApp: app});
    app.all("*", (req: Request, res: Response) => {
        return handle(req, res);
    });
    app.listen(config.port);
}

startServer();