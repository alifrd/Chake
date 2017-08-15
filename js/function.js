		$(document).ready(function(){
   			if ($( document ).width() > 430) {
   				 $("#Menu_Mobile").fadeOut("fast");
   				 $("header").fadeIn("fast");
   				}
   		 	
			else{
				 $("#Menu_Mobile").fadeIn("fast");
				 $("header").fadeOut("fast");
				 
			}
			});






		$(document).ready(function(){
 		   $("#Forgetten").click(function(){
  				  $(".org").fadeOut(100);
				  $("#sign_in").fadeOut(100);
  				  $(".forget_password").fadeIn(1500);
  				  $("#btn_send_pass").fadeIn(1500);
				});
			});


		$(document).ready(function(){
			$("#Toggle_btn").click(function(){
				$(this).toggleClass("fa fa-bars");
				$(this).toggleClass("fa fa-times");
				
			});
		});




     $(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});
        $(function () {
    $('a[href="#Locate"]').on('click', function(event) {
        event.preventDefault();
        $('#Locate').addClass('open');
        $('#Locate > form > input[type="search"]').focus();
    });
    
    $('#Locate, #Locate button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});








$(document).on('click', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
            var target = $(e.target);
            target.addClass("selected").siblings().removeClass("selected");
            var value = target.html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
        ul.hide();
        $(this).removeClass("active");
    }
    else {
        $('.btn-select').not(this).each(function () {
            $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
    }
});

$(document).on('click', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});



