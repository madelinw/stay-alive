var Checklist = Backbone.Model.extend({

  defaults: function() {
    return {
      title: "empty checklist...",
      order: Checklist.nextOrder(),
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