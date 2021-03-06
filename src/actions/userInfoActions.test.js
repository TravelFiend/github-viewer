import {
  fetchUserInfo,
  FETCH_USER_INFO,
  FETCH_INFO_LOADING,
  SET_USERNAME,
  setUsername
} from './userInfoActions';

jest.mock('../services/getGithubInfo.js');

describe('user info actions', () => {
  it('should create a fetch info action', () => {
    const dispatch = jest.fn();
    const action = fetchUserInfo();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_INFO_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER_INFO,
          payload: {
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
        });
      });
  });

  it('should create a set username action', () => {
    const action = setUsername('toot');

    expect(action).toEqual({
      type: SET_USERNAME,
      payload: 'toot'
    });
  });
});
