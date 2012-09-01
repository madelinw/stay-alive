var AppView = Backbone.View.extend({

  el: $("#checklistapp"),

  events: {
    "keypress #new-checklist": "createOnEnter",
    // "click #clear-completed": "clearCompleted",
    // "click #toggle-all": "toggleAllComplete"
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
    var done = Items.done().length;

    if(Items.length) {
      this.main.show();
      this.footer.show();
    } else {
      this.footer.hide();
    }

  },

  addOne: function(item) {
    var view = new ItemView({model: item});
    view.render();
    this.$("#check-list").append(view.render().el);
  },

  addAll: function() {
    Items.each(this.addOne);
  },

  createOnEnter: function(e) {
    if (e.keyCode != 13) return;
    if (!this.input.val()) return;

    Items.create({title: this.input.val()});
    this.input.val('');
  },

  // clearCompleted: function() {
  //   _.each(Items.done(), function(checklist){ checklist.clear();});
  //   return false;
  // },

  // toggleAllComplete: function() {
  //   var done = this.allCheckbox.checked;
  //   Items.each(function(checklist){ checklist.save({'done': done}); });
  // }
});

var App = new AppView;