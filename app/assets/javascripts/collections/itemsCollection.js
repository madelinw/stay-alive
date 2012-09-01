var Items = Backbone.Collection.extend({

  model: Item,
  url: '/items',

  //localStorage: new Store("items-backbone"),

  done: function() {
    return this.filter(function(items) { return items.get("done"); });
  },

  nextOrder: function() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  },

  comparator: function(items) {
    return items.get('order');
  }
});

var Items = new Items;