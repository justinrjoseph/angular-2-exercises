import {Component} from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {PasswordValidators} from './passwordValidators';

@Component({
	selector: 'password-form',
	templateUrl: 'app/password-form.template.html'
})
export class PasswordFormComponent {
	form: ControlGroup;

	constructor(fb: FormBuilder) {
		this.form = fb.group({
			currentPassword: ['', Validators.required],
			newPassword: ['', Validators.compose([
				Validators.required,
				PasswordValidators.passwordRules
			])],
			confirmPassword: ['', Validators.required]
		}, { validator: PasswordValidators.passwordsShouldMatch });
	}

	changePassword() {
		var currentPassword = this.form.find('currentPassword');

		if ( currentPassword.value !== '1234' )
			currentPassword.setErrors({ isInvalid: true });

		if ( this.form.valid )
				alert("Password successfully changed!");
	}
}