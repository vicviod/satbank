$(function() {

  var checkboxes = document.getElementsByClassName("input");

  $.ajax({
    type: 'GET',
    url: '/api/questions?searchTag=algebra',
    success: function(data) {
      console.log('success', data);
    }
  });

});
