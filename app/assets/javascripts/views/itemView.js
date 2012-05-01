var ItemView = Backbone.View.extend({

  tagName: "li",

  template: Handlebars.compile($('#item-template').html()),

  events: {
    "click .toggle"   : "toggleDone",
    "dblclick .view"  : "edit",
    "click a.destroy" : "clear",
    "keypress .edit"  : "updateOnEnter",
    "blur .edit"      : "close",
  },

  initialize: function() {
    this.model.bind('change', this.render, this);
    this.model.bind('destroy', this.remove, this)
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('done', this.model.get('done'));
    this.input = this.$('.edit');
    return this;
  },

  toggleDone: function() {
    this.model.toggle();
  },

  edit: function() {
    this.$el.addClass("editing");
    this.input.focus();
  },

  close: function() {
    var value = this.input.val();
    if (!value) this.clear();
    this.model.save({title: value});
    this.$el.removeClass("editing");
  },

  updateOnEnter: function(e) {
    if (e.keyCode == 13) this.close();
  },

  clear: function() {
    this.model.clear();
  }
});