var Checklist = Backbone.Model.extend({
  urlRoot: "/lists",

  defaults: function() {
    return {
      title: "empty checklist...",
      order: Lists.nextOrder(),
      done: false
    };
  },

  initialize: function() {
    if (!this.get("title")) {
      this.set({"title": this.defaults.title});
    };
  },

  toggle: function() {
    this.save({done: !this.get("done")});
  },

  clear: function() {
    this.destroy();
  }

})