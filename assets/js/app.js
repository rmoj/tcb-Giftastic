'use strict';

$(document).ready(function() {
  var counter = 0;

  $('#add').on('click', renderButton);

  function renderButton() {
    event.preventDefault();
    var btn = $('<button>');
    btn.attr('id', counter);
    btn.text(counter);
    btn.on('click', dummyFunction);
    $('#button-holder').append(btn);
    counter++;
  }

  function getJson() {
    var searchTerm = 'quokka';
    var limit = 10;
    var rating = 'G';
    var apiKey = 'Xon9MP7X2uR0jVetMBZoD8fQeb5hPodw';
    var queryURL =
      'https://api.giphy.com/v1/gifs/search?api_key=' +
      apiKey +
      '&q=' +
      searchTerm +
      '&limit=' +
      limit +
      '&offset=0&rating=' +
      rating +
      '&lang=en';

    $.ajax({
      url: queryURL,
      method: 'GET'
    })
      .then(parseJson)
      .then(renderGifs)
      .catch(function(error) {
        console.log(error);
      });
  }

  function renderGifs() {
    var gif = $('<img>');
  }

  function dummyFunction() {
    console.log($(this).attr('id'));
  }

  function parseJson(response) {
    console.log('getJson');
    console.log(response);
  }

  // getJson();
});
