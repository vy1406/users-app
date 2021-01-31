import { Router } from 'express';
import UsersRouter from './users/users.router';

class MasterRouter {
	private _router = Router();
	private usersRouter = UsersRouter;

	get router() {
		return this._router;
	}

	constructor() {
		this.configure();
	}

	private configure() {
		this._router.use('/', this.usersRouter);
	}
}

export = new MasterRouter().router;
