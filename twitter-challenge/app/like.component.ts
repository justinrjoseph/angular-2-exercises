import {Component, Input} from 'angular2/core';

@Component({
	selector: 'like',
	template: `
		<i 
			class="glyphicon glyphicon-heart"
			[class.liked]="liked"
			(click)="likeToggle()"
		>
		</i>
		<span>{{ likes }}</span>
	`,
	styles: [`
		.glyphicon-heart {
			color: #ccc;
		}

		.liked { color: deeppink; }

		.glyphicon-heart:hover {
			cursor: pointer;
		}
	`]
})
export class LikeComponent {
	@Input() likes;
	@Input() liked;
	
	likeToggle() {
		this.liked = !this.liked;
		this.likes += this.liked ? 1 : -1
	}
}