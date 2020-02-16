export const areReposLoading = state => state.repos.loading;
export const getTheRepos = state => {
  return state.repos.repos.map(repo => repo.name);
};
