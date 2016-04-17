import {Component} from 'angular2/core';
import {VoteComponent} from './vote.component';

@Component({
    selector: 'my-app',
    template: '<vote [votes]="answer.votes" [myVote]="answer.myVote" (vote)="changeVote($event)"></vote>',
    directives: [VoteComponent]
})
export class AppComponent {
	answer = {
		votes: 10,
		myVote: 0
	}

	changeVote(e) {
		console.log(e);
	}
}