exports.lookUp = function(username) {
  this.username = username;
};

exports.lookUp.prototype.usernameURL = function () {
  return 'https://api.github.com/users/' + this.username;
};