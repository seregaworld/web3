 $(document).ready(function(){
                        $(".shopia-footer-content-up-shops-form-button_pop_up").click(function(){
                            $('#myfond_gris').fadeIn(300);
                            var iddiv = $(this).attr("iddiv");
                            $('#'+iddiv).fadeIn(300);	
                            $('#myfond_gris').attr('opendiv',iddiv);

                            return false;
                        });

						
                        $('#myfond_gris, .mymagicoverbox_fermer').click(function()
                        {
                            var iddiv = $("#myfond_gris").attr('opendiv');
                            $('#myfond_gris').fadeOut(300);
                            $('#'+iddiv).fadeOut(300);
                        });
                    });

 $(document).ready(function(){
			$(".mymagicoverbox_pop").click(function(){
				var valid = true;
				var re = /^\w$/;
        			if (((document.getElementById("user_name").value.length < 3)||(document.getElementById("user_name").value.length > 20))&&(!re.test(document.getElementById("user_name").value)))	
        			{
                			valid = false;
					document.getElementById("label_user").style.color="red";
					document.getElementById("user_name").value="";
				}
				else
				{
					document.getElementById("label_user").style.color="black";
				}

				var re_e= /.+@.+\..+/i;
				if (!re_e.test(document.getElementById("mail").value))
				{
					valid = false;
					document.getElementById("label_mail").style.color="red";
					document.getElementById("mail").value="";
				}
				else
				{
					document.getElementById("label_mail").style.color="black";
				}
	
				if (document.getElementById("subject").selectedIndex == 0)
				{
					valid = false;
					document.getElementById("label_subject").style.color="red";
				}
				else
				{
					document.getElementById("label_subject").style.color="black";
				}

				if (valid)
				{
                            		var iddiv = $("#myfond_gris").attr('opendiv');
                            		$('#myfond_gris').fadeOut(300);
                            		$('#'+iddiv).fadeOut(300);

					document.getElementById("mail").value="";
				 	document.getElementById("user_name").value="";	
					document.getElementById("message").value="";
					document.getElementById("subject").selectedIndex = 0;
					document.getElementById("label_mail").style.color="black";
					document.getElementById("label_user").style.color="black";
					document.getElementById("label_subject").style.color="black";
				}	
 			});
               	});
