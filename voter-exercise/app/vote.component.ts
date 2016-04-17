import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'vote',
	template: `
		<div class="vote-utility">
			<i
				class="glyphicon glyphicon-menu-up"
				[class.up-voted]="myVote === 1"
				(click)="upVote()"
			>
			</i>
			<span>{{ votes + myVote }}</span>
			<i
				class="glyphicon glyphicon-menu-down"
				[class.down-voted]="myVote === -1"
				(click)="downVote()"
			>
			</i>
		</div>
	`,
	styles: [`
		.vote-utility {
			width: 20px;
			text-align: center;
			margin-top: 5px;
			margin-left: 5px;
		}

		.glyphicon:hover { cursor: pointer; }

		.up-voted, .down-voted {
			color: orange
		}
	`]
})
export class VoteComponent {
	@Input() votes = 0;
	@Input() myVote = 0;
	@Output() vote = new EventEmitter();
	
	upVote() {
		if ( this.myVote === 1 )
			return;

		this.myVote++;

		this.vote.emit({ myVote: this.myVote; })
	}

	downVote() {
		if ( this.myVote === -1 )
			return;

		this.myVote--;

		this.vote.emit({ myVote: this.myVote })
	}
}