class UserManage {
  constructor(props) {
    Object.assign(this, props);
  }

  addFriend(user) {
    this.friendList.push(user);
  }
  sendMessage() {}
}
module.exports = UserManage;
