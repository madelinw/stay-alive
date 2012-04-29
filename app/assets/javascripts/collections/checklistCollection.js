var Lists = Backbone.Collection.extend({

  model: Checklist,

  localStorage: new Store("checklists-backbone"),

  done: function() {
    return this.filter(function(checklist) { return checklist.get("done"); });
  },

  nextOrder: function() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  },

  comparator: function(checklist) {
    return checklist.get('order');
  }
});

var Lists = new Lists;