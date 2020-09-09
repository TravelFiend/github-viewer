import { isLoadingUserInfo, getUserInfo, getUserName } from './userInfoSelectors';

describe('user info selectors', () => {
  it('should select user info loading state', () => {
    const state = {
      userInfo: {
        loading: true,
        info: null
      }
    };

    expect(isLoadingUserInfo(state)).toEqual(true);
  });

  it('should select user info', () => {
    const state = {
      userInfo: {
        loading: false,
        info: {
          'login': 'TravelFiend',
          'id': 29086916,
          'node_id': 'MDQ6VXNlcjI5MDg2OTE2',
          'avatar_url': 'https://avatars3.githubusercontent.com/u/29086916?v=4',
          'gravatar_id': '',
          'url': 'https://api.github.com/users/TravelFiend',
          'html_url': 'https://github.com/TravelFiend',
          'followers_url': 'https://api.github.com/users/TravelFiend/followers',
          'following_url': 'https://api.github.com/users/TravelFiend/following{/other_user}',
          'gists_url': 'https://api.github.com/users/TravelFiend/gists{/gist_id}',
          'starred_url': 'https://api.github.com/users/TravelFiend/starred{/owner}{/repo}',
          'subscriptions_url': 'https://api.github.com/users/TravelFiend/subscriptions',
          'organizations_url': 'https://api.github.com/users/TravelFiend/orgs',
          'repos_url': 'https://api.github.com/users/TravelFiend/repos',
          'events_url': 'https://api.github.com/users/TravelFiend/events{/privacy}',
          'received_events_url': 'https://api.github.com/users/TravelFiend/received_events',
          'type': 'User',
          'site_admin': false,
          'name': 'Mike Grace',
          'company': null,
          'blog': '',
          'location': 'Portland, OR',
          'email': null,
          'hireable': null,
          'bio': 'Software developer exploring both the world and technology.',
          'public_repos': 52,
          'public_gists': 0,
          'followers': 6,
          'following': 5,
          'created_at': '2017-05-31T06:19:18Z',
          'updated_at': '2020-02-14T21:39:59Z'
        }
      }
    };

    expect(getUserInfo(state)).toEqual({ 
      'login': 'TravelFiend',
      'id': 29086916,
      'node_id': 'MDQ6VXNlcjI5MDg2OTE2',
      'avatar_url': 'https://avatars3.githubusercontent.com/u/29086916?v=4',
      'gravatar_id': '',
      'url': 'https://api.github.com/users/TravelFiend',
      'html_url': 'https://github.com/TravelFiend',
      'followers_url': 'https://api.github.com/users/TravelFiend/followers',
      'following_url': 'https://api.github.com/users/TravelFiend/following{/other_user}',
      'gists_url': 'https://api.github.com/users/TravelFiend/gists{/gist_id}',
      'starred_url': 'https://api.github.com/users/TravelFiend/starred{/owner}{/repo}',
      'subscriptions_url': 'https://api.github.com/users/TravelFiend/subscriptions',
      'organizations_url': 'https://api.github.com/users/TravelFiend/orgs',
      'repos_url': 'https://api.github.com/users/TravelFiend/repos',
      'events_url': 'https://api.github.com/users/TravelFiend/events{/privacy}',
      'received_events_url': 'https://api.github.com/users/TravelFiend/received_events',
      'type': 'User',
      'site_admin': false,
      'name': 'Mike Grace',
      'company': null,
      'blog': '',
      'location': 'Portland, OR',
      'email': null,
      'hireable': null,
      'bio': 'Software developer exploring both the world and technology.',
      'public_repos': 52,
      'public_gists': 0,
      'followers': 6,
      'following': 5,
      'created_at': '2017-05-31T06:19:18Z',
      'updated_at': '2020-02-14T21:39:59Z'
    });
  });

  it('should select username from state', () => {
    const state = {
      userInfo: {
        loading: false,
        info: {},
        username: 'Wild Billy Boy'
      }
    };

    expect(getUserName(state)).toEqual('Wild Billy Boy');
  });
});
