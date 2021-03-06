var Checklist = Backbone.Model.extend({
  urlRoot: "/checklists",

  defaults: function() {
    return {
      title: "+ Add a checklist",
      order: Checklists.nextOrder(),
      done: false
    };
  },

  initialize: function() {
    if (!this.get("title")) {
      this.set({"title": this.defaults.title});
    };
  },

  clear: function() {
    this.destroy();
  }

})