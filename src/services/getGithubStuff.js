const getGithubStuff = loginName => {
  return fetch(`https://api.github.com/users/${loginName}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};

export default getGithubStuff;
