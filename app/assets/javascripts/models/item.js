var Item = Backbone.Model.extend({
  urlRoot: "/items",

  defaults: function() {
    console.log(this);
    return {
      title: "+ Add a task",
      order: Items.nextOrder(),
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