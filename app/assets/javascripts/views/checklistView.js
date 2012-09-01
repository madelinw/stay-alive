var ChecklistView = Backbone.View.extend({

  tagName: "li",

  template: Handlebars.compile($('#checklist-template').html()),

  events: {
    "click .toggle"   : "toggleDone",
    "dblclick .view"  : "edit",
    "click a.destroy" : "clear",
    "keypress input.edit"  : "updateOnEnter",
    "blur input.edit"      : "close",
  },

  initialize: function() {
    this.input = this.$("#new-checklist");
    // this.allCheckbox = this.$("#toggle-all")[0];

    Items.bind('add', this.addOne, this);
    Items.bind('reset', this.addAll, this);
    Items.bind('all', this.render, this);

    this.footer = this.$("footer");
    this.main = $('#main');

    Items.fetch(this.id);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('done', this.model.get('done'));
    this.input = this.$('input.edit');
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