import {Component} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: '<like [likes]="tweet.likes" [liked]="tweet.liked"></like>',
    directives: [LikeComponent]
})
export class AppComponent {
	tweet = {
		likes: 10,
		liked: false
	}
}