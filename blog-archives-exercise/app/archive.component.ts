import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
	template: `
		<h1>Archive</h1>
		<h2>{{ year }} / {{ month }}</h2>
	`
})
export class ArchiveComponent {
	year;
	month;

	constructor(private _routeParams: RouteParams) {
		this.year = _routeParams.get('year');
		this.month = _routeParams.get('month');
	}
}