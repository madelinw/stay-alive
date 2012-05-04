var Checklist = Backbone.Model.extend({
  urlRoot: "/checklists",

  defaults: function() {
    return {
      title: "+ Add a task",
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