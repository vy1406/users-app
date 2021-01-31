import { IAppState, INITIAL_STATE, INIT_TOAST } from '../schemas';

const reducer = (lastState: IAppState = INITIAL_STATE, action: any) => {
	if (lastState === undefined) {
		return INITIAL_STATE;
	}

	switch (action.type) {
		case 'GET_USERS':
			return { ...lastState, isLoading: true };
		case 'USERS_FETCHED':
			return { ...lastState, users: action.json.users };
		case 'SHOW_TOAST':
			return {
				...lastState,
				toastMessage: action.msg,
				showToast: true,
				toastType: action.toastType
			};
		case 'HIDE_TOAST':
			return { ...lastState, ...INIT_TOAST };
		case 'HIDE_SPINNER':
			return { ...lastState, isLoading: false };

		default:
			return lastState;
	}
};
export default reducer;
