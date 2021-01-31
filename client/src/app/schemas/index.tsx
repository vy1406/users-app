export enum ToastType {
	Info,
	Error
}

export interface IUser {
	id: number;
	username: string;
	email: string;
	age: number;
}

export interface IAppState {
	users: IUser[];
	isLoading: boolean;
	showToast?: boolean;
	toastMessage?: string;
	toastType?: ToastType;
}

export const INITIAL_STATE = {
	users: [],
	isLoading: false
};

export const INIT_TOAST = {
	showToast: false,
	toastMessage: '',
	toastType: ToastType.Info
};
