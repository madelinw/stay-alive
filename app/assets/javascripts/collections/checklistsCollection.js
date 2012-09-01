var Checklists = Backbone.Collection.extend({

  model: Checklist,
  url: '/checklists',

  //localStorage: new Store("checklists-backbone"),

  nextOrder: function() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  },

  comparator: function(checklists) {
    return checklists.get('order');
  }
});

var Checklists = new Checklists;