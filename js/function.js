		$(document).ready(function(){
   			if ($( document ).width() > 430) {
   				 $("#Menu_Mobile").fadeOut("fast");
   				 $("header").fadeIn("fast");
   				}
   		 	
			else{
				 $("#Menu_Mobile").fadeIn("fast");
				 $("header").fadeOut("fast");
				 $(".logo_desktop").fadeOut("fast");
				 
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


