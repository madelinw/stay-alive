SignupView = Backbone.View.extend({
  el: '#signup-view',

  initialize: function() {
    this.form = this.$el.find('form');
    this.nameField = this.$el.find('input[name=name]');
    this.emailField = this.$el.find('input[name=email]');
    this.passwordField = this.$el.find('input[name=password]');
    this.passwordConfirmationField = this.$el.find('input[name=password_confirmation]')
    this.submitButton = this.$el.find('input[type=submit]');
  },
})