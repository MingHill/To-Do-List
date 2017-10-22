$(function() {
  $('form').submit(function(event){
    event.preventDefault();


    if ($('#newTodo').val().trim()) {
      if ($('#todoList')) {
        $("#emptyList").remove()
      }
      var todoArray = $("#newTodo").val().trim().split(",");
      todoArray.forEach(function(item){
        var todo =  $('<li><label><input type = "checkbox"><span>'+ item.trim() +'</span></label></li>');
        // $('#newTodo').val()
        todo.appendTo($('#todoList'))
      })
      $('#newTodo').val(" ");
    }

  })
})
