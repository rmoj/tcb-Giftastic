'use strict';

$(document).ready(function() {
  var topics = [
    'quokka',
    'puppy',
    'chipmunk',
    'panda',
    'hippo',
    'dolphin',
    'piglet',
    'koala',
    'duckling',
    'polar bear cub'
  ];

  $('#add').on('click', addTopic);

  function addTopic() {
    event.preventDefault();
    var topic = $('#topic-input').val();
    if (topic != '') {
      topics.push(topic);
      $('#button-holder').empty();
      renderButtons();
    }
  }

  function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
      var btn = $('<button>');
      btn.addClass('btn');
      btn.attr('id', topics[i]);
      btn.text(topics[i]);
      btn.on('click', getJson);
      $('#button-holder').append(btn);
    }
  }

  function getJson() {
    var searchTerm = $(this).attr('id');
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
      .then(renderGifs)
      .catch(function(error) {
        console.log(error);
      });
  }

  function renderGifs(response) {
    $('#image-holder').empty();

    for (var i = 0; i < 10; i++) {
      var stillSource = response.data[i].images.fixed_height_still.url;
      var animateSource = response.data[i].images.fixed_height.url;
      var rating = response.data[i].rating;
      var gifWrapper = $('<div>');
      gifWrapper.addClass('gifwrap');
      var p = $('<p>');
      p.text('Rating: ' + rating);
      var image = $('<img>');
      image.attr('src', stillSource);
      image.attr('data-still', stillSource);
      image.attr('data-animate', animateSource);
      image.attr('data-state', 'still');
      image.on('click', swapImgSrc);
      gifWrapper.append(image);
      gifWrapper.append(p);
      $('#image-holder').append(gifWrapper);
    }
  }

  function swapImgSrc() {
    var state = $(this).attr('data-state');
    if (state === 'still') {
      $(this).attr('src', $(this).attr('data-animate'));
      $(this).attr('data-state', 'animate');
    } else {
      $(this).attr('src', $(this).attr('data-still'));
      $(this).attr('data-state', 'still');
    }
  }

  renderButtons();
});
