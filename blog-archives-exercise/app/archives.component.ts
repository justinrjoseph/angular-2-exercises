import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
	template: `
		<h1>Archives</h1>
		<ul>
			<li *ngFor="#archive of archives">
				<a [routerLink]="['Archive', { year: archive.year, month: archive.month }]"
						class="archive">
					{{ archive.year }}/{{ archive.month }}
				</a>
			</li>
		</ul>
	`,
	styles: [`
		.archive {
			font-size: 1.3em;
		}
	`],
	directives: [RouterLink]
})
export class ArchivesComponent {
	archives = [
		{ year: 2016, month: 1 },
		{ year: 2016, month: 2 },
		{ year: 2016, month: 3 }
	];
}