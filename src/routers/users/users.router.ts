// @ts-nocheck
import { NextFunction, Request, Response, Router } from 'express';
import UsersController from '../../controllers/users.controller';

class UserRouter {
	private _router = Router();
	private _controller = UsersController;

	get router() {
		return this._router;
	}

	constructor() {
		this._configure();
	}

	private _configure() {
		this._router.get('/users', (req: Request, res: Response, next: NextFunction) => {
			res.status(200).json({ users: this._controller.all() });
		});

		this._router.post('/users', (req: Request, res: Response, next: NextFunction) => {
			this._controller.createUser(req.body.user);
			res.status(200);
		});
	}
}

export = new UserRouter().router;
