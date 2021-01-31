import _ from 'lodash';

const dbUsers = require('../entities/users.json');

export interface IUser {
	id: number;
	username: string;
	email: string;
	age: number;
}

let nextId = 7;

export default class User {
	static create = (newUser: IUser): void => {
		nextId++;
		dbUsers.push({ ...newUser, id: nextId });
	};

	static getAll = (): IUser[] => dbUsers;
}
