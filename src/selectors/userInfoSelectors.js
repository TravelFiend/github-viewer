export const isLoadingUserInfo = state => state.userInfo.loading;
export const getUserInfo = state => ({
  name: state.userInfo.info.name,
  followers: state.userInfo.info.followers,
  following: state.userInfo.info.following,
  profileUrl: state.userInfo.info.html_url
});
