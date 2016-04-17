import {ControlGroup, Control} from 'angular2/common';

export class PasswordValidators {

	static passwordRules(control: Control) {
		const minLength = 5;

		if ( control.value === '' )
			return null;

		if ( control.value.length < minLength )
			return { passwordRules: { minlength: minLength } };

		return null;
	}

	static passwordsShouldMatch(group: ControlGroup) {
		var newPassword = group.find('newPassword').value;
		var confirmPassword = group.find('confirmPassword').value;
		
		if ( newPassword === '' || confirmPassword === '' )
			return null;

		if ( newPassword !== confirmPassword )
			return { passwordsShouldMatch: true };

		return null;
	}

}