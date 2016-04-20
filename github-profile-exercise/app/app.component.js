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
    var AppComponent;
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
            AppComponent = (function () {
                function AppComponent(_githubProfileService) {
                    this._githubProfileService = _githubProfileService;
                    this.isLoading = true;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._githubProfileService.getProfile()
                        .subscribe(function (profile) {
                        _this.isLoading = false;
                        console.log(profile);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t\t<github-profile></github-profile>\n    ",
                        providers: [github_profile_service_1.GitHubProfileService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_profile_service_1.GitHubProfileService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map