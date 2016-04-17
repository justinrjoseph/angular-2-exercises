import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
	selector: 'tweet',
	template: `
		<div class="media tweet">
		  <div class="media-left">
		    <a href="#">
		      <img class="media-object author-image" [src]="data.imageUrl">
		    </a>
		  </div>
		  <div class="media-body">
		    <h4 class="media-heading">{{ data.displayName }} <span class="handle">{{ data.handle }}</span></h4>
		    <p class="content">{{ data.content }}</p>
		    <like [likes]="data.likes" [liked]="data.userLikes"></like>
		  </div>
		</div>
	`,
	styles: [`
			.tweet {
				margin: 20px 0 20px 20px;
			}

			.author-image {
				border-radius: 10px;
			}

			.handle {
				color: #999;
			}

			.content {
				margin-bottom: 0;
			}
	`],
	directives: [LikeComponent]
})
export class TweetComponent {
		@Input() data;
}