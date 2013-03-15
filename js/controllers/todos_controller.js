Todos.TodosController = Ember.ArrayController.extend({
  createTodo: function () {
    // Get the todo title set by the "New Todo" text field
    var title = this.get('newTitle');
    if (!title.trim()) { return; }

    // Create the new Todo model
    Todos.Todo.createRecord({
      title: title,
      isCompleted: false
    });

    // Clear the "New Todo" text field
    this.set('newTitle', '');

    // Save the new model
    this.get('store').commit();
  }
});
