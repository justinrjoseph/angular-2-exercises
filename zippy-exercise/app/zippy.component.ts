import {Component, Input} from 'angular2/core';

@Component({
	selector: 'zippy',
	template: `
		<div class="zippy">
  			<div class="zippy-title" (click)="toggle()">
  				{{ title }}
  				<i
  					class="glyphicon pull-right"
						[ngClass]="{
							'glyphicon-chevron-right': !isExpanded,
							'glyphicon-chevron-down': isExpanded
						}"
  				>
  				</i>
  			</div>
  			<div class="zippy-body" *ngIf="isExpanded">
					<ng-content></ng-content>
  			</div>
	  </div>
	`,
	styles: [`
		.zippy {
			width: 50%;
			margin: 0 auto;
			border: 1px solid #ccc;
		}

		.zippy-title, .zippy-body {
			height: 50px;
			padding: 15px;
		}

		.zippy-title:hover {
			background-color: #ccc;
			cursor: pointer;
		}
	`]
})
export class ZippyComponent {
	isExpanded = false;
	@Input() title: string;

	toggle() {
		this.isExpanded = !this.isExpanded;
	}
}