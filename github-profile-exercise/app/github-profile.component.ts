import {Component} from 'angular2/core';
import {HTTP_PROVIDERS}	from 'angular2/http';
import {GitHubProfileService} from './github-profile.service';

@Component({
	selector: 'github-profile',
	templateUrl: 'app/github-profile.template.html',
	styles: [`
		.github-profile {
			margin-left: 10px;
		}

		.github-handle {
			font-size: 2em;
		}
	`],
	providers: [GitHubProfileService, HTTP_PROVIDERS]
})
export class GitHubProfileComponent {
	username: string = "";
	profileAvatar: string;
	followers: [{}];
	isLoading = false;

	constructor(private _githubProfileService: GitHubProfileService) {
	}

	retrieveProfile(username) {
		if ( username === "" )
			return;

		this.isLoading = true;

		this._githubProfileService.getProfile(this.username)
				.subscribe(
					profile => {
						this.profileAvatar = profile[0].avatar_url;
						this.followers = profile[1];
					},
					null,
					() => { this.isLoading = false; });
	}
}