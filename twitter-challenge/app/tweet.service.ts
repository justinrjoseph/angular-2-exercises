export class TweetService {
	getTweets() {
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
	}
}