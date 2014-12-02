Meteor.methods({
  'getStreak': function getStreak(user) {
    var githubStreak = Meteor.npmRequire('gh-streak');
    var currentDays = Meteor.sync(function(data) {
      githubStreak(user, function(err, days) {
        data(null, days);
      });
    });
    return currentDays.result;
  }
});
