export const getUsers = () => ({
	type: 'GET_USERS'
});

export const saveUser = (form: any) => ({
	type: 'SAVE_USER',
	payload: form
});

export const hideToast = () => ({ type: 'HIDE_TOAST' });

export const dispatchHideSpinner = () => ({ type: 'HIDE_SPINNER' });

export const showConnectionError = () => ({ type: 'CONNECTION_ERROR' });
