import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
    	<div class="zippies">
				<zippy [title]="'Who can see my stuff?'">
					<div class="body">Content of who can see my stuff</div>
				</zippy>
				<zippy [title]="'Who can contact me?'">
					<div class="body">Content of who can contact me</div>
				</zippy>
			</div>
    `,
    directives: [ZippyComponent],
    styles: [`
			.zippies {
				margin-top: 20px;
			}
    `]
})
export class AppComponent { }