exports.lookUp = function(username) {
  this.username = username;
};

Query.prototype.usernameURL = function () {
  return 'https://api.github.com/users/' + this.username;
};