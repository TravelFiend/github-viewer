export const isLoadingUserInfo = state => state.userInfo.loading;
export const getUserInfo = state => ({
  name: state.userInfo.info.name,
  login: state.userInfo.info.login,
  followers: state.userInfo.info.followers,
  following: state.userInfo.info.following,
  profileUrl: state.userInfo.info.html_url
});
