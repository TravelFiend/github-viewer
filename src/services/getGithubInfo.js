const request = path => {
  return fetch(`https://api.github.com/users${path}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};

export const getGithubInfo = loginName => request(`/${loginName}`);
export const getRepos = loginName => request(`/${loginName}/repos`);
