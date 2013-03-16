Todos.TodoController = Ember.ObjectController.extend({
  isEditing: false,

  editTodo: function () {
    this.set('isEditing', true);
  },

  removeTodo: function () {
    var todo = this.get('model');
    todo.deleteRecord();
    
    this.get('store').commit();
  },

  acceptChanges: function () {
    this.set('isEditing', false);
    this.get('store').commit();
  },

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as  setter
      model.set('isCompleted', value);
      this.get('store').commit();
      return value
    }
  }.property('model.isCompleted')
});
