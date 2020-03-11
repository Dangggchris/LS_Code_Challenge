$(document).ready(function() {

  // Get tomorrow's date
  let date = moment(new Date()).add(1,'days').format("YYYY-MM-DD");

  // TV Maze API
  const queryURL = "https://api.tvmaze.com/schedule?country=US&date=" + date; 

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {

    // Add images to carousel slider
    let count = 0
    let totalSlides = 0;
    while (totalSlides < 24) {
      if (response[count].show.image === null) {
        count++;
      }
      else {
        let img = '<div class="slide"><img src= "' + response[count].show.image.medium + '"width="150px" height="200px"></div>'
        $('.multiple-items').slick('slickAdd', img);
        count++;
        totalSlides++;
      }
    }
  })

  // Initialize Carousel
  function slickCarousel () {
    $('.multiple-items').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  
  slickCarousel();
})