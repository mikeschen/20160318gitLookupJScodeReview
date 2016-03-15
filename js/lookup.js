exports.lookUp = function(username) {
  this.username = username;
};

exports.lookUp.prototype.usernameURL = function () {
  return this.username;
};