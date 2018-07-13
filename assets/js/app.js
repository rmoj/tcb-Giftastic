'use strict';

$(document).ready(function() {
  $('#add').on('click', function() {
    for (var i = 0; i < 3; i++) {
      var btn = $('<button>');
      btn.attr('id', i);
      btn.text(i);
      btn.on('click', function() {
        console.log($(this).attr('id'));
      });
      $('#button-holder').append(btn);
    }
  });
});
