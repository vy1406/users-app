export const validateUsername = (username: string) => {
	const onlyLettersAndSpaces = /^[a-zA-Z\s]*$/;
	return onlyLettersAndSpaces.test(username) && username.length > 0;
};

export const validateAge = (age: number) => age > 0 && age <= 120;

export const validateEmail = (email: string) => {
	const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(email);
};
