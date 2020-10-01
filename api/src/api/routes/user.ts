import { Router, Request, Response } from 'express';
import { UserRequest } from '../../models/UserRequest';
import { ddata } from '../../loaders/dadata';

const route = Router();

export default (app: Router) => {
    app.use('/user', route);
    route.post('/request', (req: Request, res: Response) => {
        ddata('address', [req.body.query], (e, r) => {
            UserRequest.create({
                    query: req.body.query,
                    response: e === null ? JSON.stringify(r) : JSON.stringify(e),
                    status: e === null ? 200 : e.code
            });
            return res.json(e === null ? r : e).status(200);
        });
    });
    route.get('/request', (req: Request, res: Response) => {
        UserRequest.findAll({
            attributes: ['id'],
            where: {
                status: 200
            }
        }).then(UserRequests => {
            if(UserRequests.length > 0) {
                const random = Math.floor(Math.random() * Math.floor(UserRequests.length));
                UserRequest.findByPk(UserRequests[random].id)
                    .then(UserRequest => {
                        return res.send(UserRequest.response).status(200);
                    })
            } else {
                return res.json([]).status(200);
            }
       })
    });

};