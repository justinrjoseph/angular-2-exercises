System.register(['angular2/core', './like.component'], function(exports_1, context_1) {
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
    var core_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "data", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n\t\t<div class=\"media tweet\">\n\t\t  <div class=\"media-left\">\n\t\t    <a href=\"#\">\n\t\t      <img class=\"media-object author-image\" [src]=\"data.imageUrl\">\n\t\t    </a>\n\t\t  </div>\n\t\t  <div class=\"media-body\">\n\t\t    <h4 class=\"media-heading\">{{ data.displayName }} <span class=\"handle\">{{ data.handle }}</span></h4>\n\t\t    <p class=\"content\">{{ data.content }}</p>\n\t\t    <like [likes]=\"data.likes\" [liked]=\"data.userLikes\"></like>\n\t\t  </div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t\t.tweet {\n\t\t\t\tmargin: 20px 0 20px 20px;\n\t\t\t}\n\n\t\t\t.author-image {\n\t\t\t\tborder-radius: 10px;\n\t\t\t}\n\n\t\t\t.handle {\n\t\t\t\tcolor: #999;\n\t\t\t}\n\n\t\t\t.content {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t"],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map