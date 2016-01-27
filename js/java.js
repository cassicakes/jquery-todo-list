$(document).ready(function() {

  $('#buttonInput').on('submit', function(e) {
    e.preventDefault();
      var $addToList = $('#buttonInput input').val();
      $('#buttonInput input').val('');
      
      $('ul').append('<li>' + $addToList + '<span style="color: red;"> X</span></li>');
        alert("you probably want to add more WDI");
  });

});


$('ul').on('click' , 'li span', function() {
    $(this).parent().remove();
  });
$('span').style



// Why did the first function only work if "buttonInput" wasn't in <form> tag? Tried with div and wound't run.

// Please explain $(this)

//mouse effect over spans
//how to fomrmat spans, (in css preferably), and do al at once... see repeat in html