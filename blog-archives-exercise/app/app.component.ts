import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {ArchivesComponent} from './archives.component';
import {ArchiveComponent} from './archive.component';

@RouteConfig([
	{ path: '/', name: 'Home', component: ArchivesComponent, useAsDefault: true },
	{ path: '/archives/:year/:month', name: 'Archive', component: ArchiveComponent },
	{ path: '/archives/*other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ArchivesComponent, RouterOutlet]
})
export class AppComponent { }