import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getUsers } from '../../actions';
import Spinner from '../Spinner/Spinner.component';
import { IAppState } from '../../schemas';
import { IUser } from '../../schemas';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { Page } from '../NewUser/NewUser.styles';

const useStyles = makeStyles((theme: Theme) => ({
	table: {
		height: 400,
		width: 600
	}
}));

interface ITableProps {
	users: IUser[];
	isFetching: boolean;
	getAllUsers: () => void;
}

const Manage: React.FunctionComponent<ITableProps> = ({ users, isFetching, getAllUsers }) => {
	const [rows, setRows] = useState(users);
	useEffect(() => {
		getAllUsers();
	}, []);

	useEffect(() => {
		setRows(users);
	}, [users]);

	const classes = useStyles();

	const columns: ColDef[] = [
		{ field: 'id', headerName: 'ID', width: 50 },
		{ field: 'username', headerName: 'Username', width: 200 },
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			width: 120
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 200
		}
	];

	return (
		<Page>
			{isFetching ? (
				<Spinner />
			) : (
				<div className={classes.table}>
					<DataGrid rows={rows} columns={columns} pageSize={5} />
				</div>
			)}
		</Page>
	);
};

const mapDispatchToProps = {
	getAllUsers: getUsers
};

const mapStateToProps = (state: IAppState) => ({
	users: state.users,
	isFetching: state.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(Manage);
