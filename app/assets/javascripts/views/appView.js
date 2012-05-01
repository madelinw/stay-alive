var AppView = Backbone.View.extend({

  el: $("#checklistapp"),

  statsTemplate: Handlebars.compile($('#stats-template').html()),

  events: {
    "keypress #new-checklist": "createOnEnter",
    "click #clear-completed": "clearCompleted",
    "click #toggle-all": "toggleAllComplete"
  },

  initialize: function() {
    this.input = this.$("#new-checklist");
    this.allCheckbox = this.$("#toggle-all")[0];

    Lists.bind('add', this.addOne, this);
    Lists.bind('reset', this.addAll, this);
    Lists.bind('all', this.render, this);

    this.footer = this.$("footer");
    this.main = $('#main');

    Lists.fetch();
  },

  render: function() {
    var done = Lists.done().length;

    if(Lists.length) {
      this.main.show();
      this.footer.show();
      this.footer.html(this.statsTemplate({done: done}));
    } else {
      this.main.hide();
      this.footer.hide();
    }

  },

  addOne: function(checklist) {
    var view = new ItemView({model: checklist});
    this.$("#check-list").append(view.render().el);
  },

  addAll: function() {
    Lists.each(this.addOne);
  },

  createOnEnter: function(e) {
    if (e.keyCode != 13) return;
    if (!this.input.val()) return;

    Lists.create({title: this.input.val()});
    this.input.val('');
  },

  clearCompleted: function() {
    _.each(Lists.done(), function(checklist){ checklist.clear();});
    retrun false;
  },

  toggleAllComplete: function() {
    var done = this.allCheckbox.checked;
    Lists.each(function(checklist){ checklist.save({'done': done}); });
  }
});

var App = new AppView;