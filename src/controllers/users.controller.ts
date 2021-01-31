import User, { IUser } from '../entities/user.entity';

class UsersController {
	all() {
		return User.getAll();
	}

	createUser(newMsg: IUser) {
		return User.create(newMsg);
	}
}

export = new UsersController();
