System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            imageUrl: 'http://lorempixel.com/100/100/people?1',
                            displayName: 'Windward',
                            handle: '@windwardstudios',
                            content: 'Looking for a better company reporting or docgen app?',
                            likes: 0,
                            userLikes: false
                        },
                        {
                            imageUrl: 'http://lorempixel.com/100/100/people?2',
                            displayName: 'AngularJS News',
                            handle: '@angularjs_news',
                            content: 'Right Relevance : Influencers, Articles and Conversations',
                            likes: 5,
                            userLikes: true
                        },
                        {
                            imageUrl: 'http://lorempixel.com/100/100/people?3',
                            displayName: 'UX & Bootstrap',
                            handle: '@3rdwave',
                            content: '10 Reasons Why Web Projects Fail',
                            likes: 1,
                            userLikes: true
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map