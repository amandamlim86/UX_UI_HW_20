
console.log("Your Index.js file is loaded correctly!");

$(function(){
  $("#nav-placeholder").load("nav.html");
});

$(function(){
  $("#footer-placeholder").load("footer.html");
});

$(document).ready(function(){

    $(".skillsCard").mouseover(function(){
      $(this).stop().animate({"width": "101%","left":"1px","top":"1px"}, 100,'swing');
    }).mouseout(function(){ 
      $(this).stop().animate({"width": "100%","left":"0px","top":"0px",}, 100,'swing');
    });;
});

$(document).ready(function(){

    $(".myworkCard").mouseover(function(){
      $(this).stop().animate({"width": "101%","left":"1px","top":"1px"}, 100,'swing');
    }).mouseout(function(){ 
      $(this).stop().animate({"width": "100%","left":"0px","top":"0px",}, 100,'swing');
    });;
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".scrollProjects").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
