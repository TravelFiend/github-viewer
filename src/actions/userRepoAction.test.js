import { FETCH_REPOS_LOADING, FETCH_REPOS, fetchRepos } from './userReposAction';

jest.mock('../services/getGithubInfo.js');

describe('user repos action', () => {
  it('should create a fetch user repos action', () => {
    const dispatch = jest.fn();
    const action = fetchRepos();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_REPOS_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_REPOS,
          payload: [{
            'id': 228680638,
            'node_id': 'MDEwOlJlcG9zaXRvcnkyMjg2ODA2Mzg=',
            'name': 'aggregation-lab-12',
            'full_name': 'TravelFiend/aggregation-lab-12',
            'private': false,
            'owner': {
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
              'site_admin': false
            },
            'html_url': 'https://github.com/TravelFiend/aggregation-lab-12',
            'description': null,
            'fork': false,
            'url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12',
            'forks_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/forks',
            'keys_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/keys{/key_id}',
            'collaborators_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/collaborators{/collaborator}',
            'teams_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/teams',
            'hooks_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/hooks',
            'issue_events_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/issues/events{/number}',
            'events_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/events',
            'assignees_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/assignees{/user}',
            'branches_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/branches{/branch}',
            'tags_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/tags',
            'blobs_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/git/blobs{/sha}',
            'git_tags_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/git/tags{/sha}',
            'git_refs_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/git/refs{/sha}',
            'trees_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/git/trees{/sha}',
            'statuses_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/statuses/{sha}',
            'languages_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/languages',
            'stargazers_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/stargazers',
            'contributors_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/contributors',
            'subscribers_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/subscribers',
            'subscription_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/subscription',
            'commits_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/commits{/sha}',
            'git_commits_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/git/commits{/sha}',
            'comments_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/comments{/number}',
            'issue_comment_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/issues/comments{/number}',
            'contents_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/contents/{+path}',
            'compare_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/compare/{base}...{head}',
            'merges_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/merges',
            'archive_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/{archive_format}{/ref}',
            'downloads_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/downloads',
            'issues_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/issues{/number}',
            'pulls_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/pulls{/number}',
            'milestones_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/milestones{/number}',
            'notifications_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/notifications{?since,all,participating}',
            'labels_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/labels{/name}',
            'releases_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/releases{/id}',
            'deployments_url': 'https://api.github.com/repos/TravelFiend/aggregation-lab-12/deployments',
            'created_at': '2019-12-17T18:46:36Z',
            'updated_at': '2019-12-17T18:46:40Z',
            'pushed_at': '2019-12-17T18:46:37Z',
            'git_url': 'git://github.com/TravelFiend/aggregation-lab-12.git',
            'ssh_url': 'git@github.com:TravelFiend/aggregation-lab-12.git',
            'clone_url': 'https://github.com/TravelFiend/aggregation-lab-12.git',
            'svn_url': 'https://github.com/TravelFiend/aggregation-lab-12',
            'homepage': null,
            'size': 0,
            'stargazers_count': 0,
            'watchers_count': 0,
            'language': null,
            'has_issues': true,
            'has_projects': true,
            'has_downloads': true,
            'has_wiki': true,
            'has_pages': false,
            'forks_count': 0,
            'mirror_url': null,
            'archived': false,
            'disabled': false,
            'open_issues_count': 0,
            'license': null,
            'forks': 0,
            'open_issues': 0,
            'watchers': 0,
            'default_branch': 'master'
          },
          {
            'id': 240111124,
            'node_id': 'MDEwOlJlcG9zaXRvcnkyNDAxMTExMjQ=',
            'name': 'application-state',
            'full_name': 'TravelFiend/application-state',
            'private': false,
            'owner': {
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
              'site_admin': false
            }
          }
          ] });
      });
  });
});
