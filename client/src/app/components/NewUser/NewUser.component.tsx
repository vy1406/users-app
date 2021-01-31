import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import { saveUser } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import { validateUsername, validateAge, validateEmail } from '../../utils';
import { Page, ErrorWrapper, StyledForm, FormRow, SingleError, ErrorText } from './NewUser.styles';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	},
	numberInput: {
		width: 100,
		height: 50
	},
	submitButton: {
		marginTop: 12,
		width: 200,
		height: 50
	},
	text: {
		padding: 10,
		width: 300,
		height: 30
	}
}));

interface INewUserProps {
	submitUser: (form: any) => void;
}

const NewUser: React.FunctionComponent<INewUserProps> = ({ submitUser }) => {
	const { register, handleSubmit, errors, getValues, reset } = useForm();
	const classes = useStyles();
	const formToServerMsg = (form: any): any => ({
		age: +form.age,
		username: form.username,
		email: form.email
	});

	const validateThenSave = (form: any) => {
		submitUser(formToServerMsg(form));
		reset();
	};

	const renderErrors = (errors: any) => {
		const arrErrors = [
			'Age must be bigger than 1 and less than 120',
			'Username must contain only letters and spaces, cannot be empty',
			'Please insert correct email format'
		];

		const renderSingle = (errId: number) => (
			<SingleError>
				<ClearIcon style={{ fill: 'white' }} />
				<ErrorText>{arrErrors[errId]}</ErrorText>
			</SingleError>
		);

		return (
			<ErrorWrapper>
				{errors.age && renderSingle(0)}
				{errors.username && renderSingle(1)}
				{errors.email && renderSingle(2)}
			</ErrorWrapper>
		);
	};

	return (
		<Page>
			<StyledForm onSubmit={handleSubmit(form => validateThenSave(form))}>
				<FormRow>
					<TextField
						className={classes.numberInput}
						id="age"
						label="Age"
						name="age"
						type="number"
						variant="outlined"
						inputRef={register({ validate: value => validateAge(value) })}
					/>
				</FormRow>
				<TextField
					className={classes.text}
					id="username"
					label="Username"
					name="username"
					type="text"
					variant="outlined"
					inputRef={register({ validate: value => validateUsername(value) })}
				/>
				<TextField
					className={classes.text}
					id="email"
					label="Email"
					name="email"
					type="text"
					variant="outlined"
					inputRef={register({ validate: value => validateEmail(value) })}
				/>

				<Button className={classes.submitButton} type="submit" variant="contained" color="primary">
					Add User
				</Button>
			</StyledForm>
			{renderErrors(errors)}
		</Page>
	);
};

const mapDispatchToProps = {
	submitUser: saveUser
};

export default connect(null, mapDispatchToProps)(NewUser);
