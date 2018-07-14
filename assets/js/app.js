'use strict';

$(document).ready(function() {
  $('#add').on('click', renderButton);
  var i = 0;
  function renderButton() {
    var btn = $('<button>');
    btn.attr('id', i);
    btn.text(i);
    btn.on('click', dummyFunction);
    $('#button-holder').append(btn);
    i++;
  }

  function getJson() {
    var searchTerm = 'quokka';
    var limit = 5;
    var rating = 'G';
    var queryURL =
      'https://api.giphy.com/v1/gifs/search?api_key=' +
      apiKey +
      '&q=' +
      searchTerm +
      '&limit=10&offset=0&rating=' +
      rating +
      '&lang=en';
    var apiKey = 'Xon9MP7X2uR0jVetMBZoD8fQeb5hPodw';

    $.ajax({
      url: queryURL,
      method: 'GET'
    })
      .then(parseJson)
      .catch(function(error) {
        console.log(error);
      });
  }

  function dummyFunction() {
    console.log($(this).attr('id'));
  }

  function parseJson(response) {
    console.log(response);
  }

  var r = getJson();
  console.log(r);
});
