System.register(['angular2/core', 'angular2/http', './github-profile.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, github_profile_service_1;
    var GitHubProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (github_profile_service_1_1) {
                github_profile_service_1 = github_profile_service_1_1;
            }],
        execute: function() {
            GitHubProfileComponent = (function () {
                function GitHubProfileComponent(_githubProfileService) {
                    this._githubProfileService = _githubProfileService;
                    this.username = "";
                    this.isLoading = false;
                }
                GitHubProfileComponent.prototype.retrieveProfile = function (username) {
                    var _this = this;
                    if (username === "")
                        return;
                    this.isLoading = true;
                    this._githubProfileService.getProfile(this.username)
                        .subscribe(function (profile) {
                        _this.profileAvatar = profile[0].avatar_url;
                        _this.followers = profile[1];
                    }, null, function () { _this.isLoading = false; });
                };
                GitHubProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'github-profile',
                        templateUrl: 'app/github-profile.template.html',
                        styles: ["\n\t\t.github-profile {\n\t\t\tmargin-left: 10px;\n\t\t}\n\n\t\t.github-handle {\n\t\t\tfont-size: 2em;\n\t\t}\n\t"],
                        providers: [github_profile_service_1.GitHubProfileService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_profile_service_1.GitHubProfileService])
                ], GitHubProfileComponent);
                return GitHubProfileComponent;
            }());
            exports_1("GitHubProfileComponent", GitHubProfileComponent);
        }
    }
});
//# sourceMappingURL=github-profile.component.js.map