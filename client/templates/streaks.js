Template.streaks.helpers({
  streakDays: function() {
    var currentStreak = Session.get('currentStreak');

    if (currentStreak) {
      return currentStreak;
    }
    else {
      user = 'andreiconstantinescu';
      Meteor.call('getStreak', 'andreiconstantinescu', function(err, days) {
        if (err) {
          return err;
        }
        Session.set('currentStreak', days);
      });
    }
  }
});
