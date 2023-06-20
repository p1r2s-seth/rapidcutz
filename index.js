// hamburger-navbar
$(document).ready(function(){
	$(".hamburger").click(function(){
		$(".hamul").show()
	});
});
$(document).ready(function(){
	$(".cross").click(function(){
		$(".hamul").hide()
	});
});

// line

  	  	$(document).ready(function(){
  $(".masthead-heading").on({
    mouseenter: function(){
      $(".line").css("width", "110px");
    },  
    mouseleave: function(){
      $(".line").css("width", "75px");
    }  
  });
});


        $(document).ready(function(){
  $("#i1").on({
    mouseenter: function(){
      $(".line1").css("width", "75px");
    },  
    mouseleave: function(){
      $(".line1").css("width", "50px");
    }  
  });
});

                $(document).ready(function(){
  $("#i2").on({
    mouseenter: function(){
      $(".line2").css("width", "75px");
    },  
    mouseleave: function(){
      $(".line2").css("width", "50px");
    }  
  });
});

                        $(document).ready(function(){
  $("#i3").on({
    mouseenter: function(){
      $(".line3").css("width", "75px");
    },  
    mouseleave: function(){
      $(".line3").css("width", "50px");
    }  
  });
});

// smoothscroll

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

// about us
$(document).ready(function(){
  $(".button").click(function(){
    $(".panel").slideToggle("slow");
  });
});

// navscroll
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $(".navbar").css({"background-color":"#101010"});   
        }
        else{
            $(".navbar").css({"background-color":"transparent"});
        }

    });
});

var submitted=false;

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(window).scrollTop() > 150){
//             $(".headerimg").css({"max-width":"20%"});   
//         }
//         else{
//             $(".headerimg").css({"max-width":"25%"});
//         }

//     });
// });




// ScrollReveal

// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2800,
//     // reset: true,
// })

// sr.reveal('.masthead-subheading, .masthead-heading'{
//     origin: 'top',
//     interval: 100,

// })


function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 2 seconds
      duration: 2000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}

//When the document is ready
$(function() {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function() {
    //Checking if each items to animate are 
    //visible in the viewport
    $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
});

