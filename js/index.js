console.log("Your index.js file is there")

$(document).ready(function() {
  // Define a function to handle the spinning action
  function spinImage(event) {
    // Prevent the default behavior of the click event
    event.preventDefault();
    // Add the "spin" class to the clicked image's parent div
    $(this).parent().addClass("spin");
    // Remove the "spin" class from the parent div after 1 second (1000 milliseconds)
    setTimeout(function() {
      $(event.currentTarget).parent().removeClass("spin");
    }, 1000);
  }

  $("img[src='images/creativity1.png'], img[src='images/detail1.png'], img[src='images/prob1.png']").on("click", spinImage);
});