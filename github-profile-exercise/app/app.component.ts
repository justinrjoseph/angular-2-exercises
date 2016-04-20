import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}	from 'angular2/http';
import {GitHubProfileService} from './github-profile.service';

@Component({
    selector: 'my-app',
    template: `
			<github-profile></github-profile>
    `,
    providers: [GitHubProfileService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
	isLoading = true;

	constructor(private _githubProfileService: GitHubProfileService) {
	}

	ngOnInit() {
		this._githubProfileService.getProfile()
				.subscribe(profile => {
					this.isLoading = false;
					console.log(profile);
				});
	}
}