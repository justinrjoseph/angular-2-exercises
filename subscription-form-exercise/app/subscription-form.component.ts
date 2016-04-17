import {Component} from 'angular2/core';

@Component({
	selector: 'subscription-form',
	templateUrl: 'app/subscription-form.template.html'
})
export class SubscriptionFormComponent {
	frequencies = [
		{ value: '-', text: '' }
		{ value: 'd', text: 'Daily' },
		{ value: 'w', text: 'Weekly' },
		{ value: 'm', text: 'Monthly' }
	]

	log(f) {
		console.log(f);
	}
}