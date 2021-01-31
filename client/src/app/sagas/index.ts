import { put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import { ToastType } from '../schemas';
import axios from 'axios';

function* fetchUsers() {
	try {
		const json = yield axios.get('http://localhost:3000/api/users').then(({ data }) => data);
		yield put({ type: 'USERS_FETCHED', json: json });
	} catch (e) {
		yield put({ type: 'SHOW_TOAST', msg: 'Error fetching users', toastType: ToastType.Error });
	}
}

function* saveUser(payload: any) {
	try {
		axios.post('http://localhost:3000/api/users', { user: payload.payload });
		yield put({ type: 'SHOW_TOAST', msg: 'Users saved', toastType: ToastType.Info });
	} catch (e) {
		yield put({ type: 'SHOW_TOAST', msg: 'Error saving user', toastType: ToastType.Error });
	}
}

function* actionWatcher() {
	yield takeLatest('GET_USERS', fetchUsers);
	yield takeEvery('SAVE_USER', saveUser);
}

export default function* rootSaga() {
	yield all([actionWatcher()]);
}
