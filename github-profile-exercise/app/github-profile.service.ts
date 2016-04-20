import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()
export class GitHubProfileService {
	private _profileUrl = "https://api.github.com/users/octocat";
	private _followersUrl = "https://api.github.com/users/octocat/followers";

	constructor(private _http: Http) {
	}

	getProfile() {
		return Observable.forkJoin(
			this._http.get(this._profileUrl).map(res => res.json()),
			this._http.get(this._followersUrl).map(res => res.json())
		)
	}
}