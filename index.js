$(document).ready(function() {

  let date = moment(new Date()).add(1,'days').format("YYYY-MM-DD");

  // TV Maze API
  var queryURL = "http://api.tvmaze.com/schedule?country=US&date=" + date; 

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    for (let i = 0; i < 24; i++) {
      if (response[i].show.image === null) {
        break;
      }
      else {
        let img = '<div class="slide"><img src= "' + response[i].show.image.medium + '"></div>'
        $('.multiple-items').slick('slickAdd', img);
      }
    }
  })

  // Initialize Carousel
  function slickCarousel () {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6
    });
  }

  slickCarousel();

})