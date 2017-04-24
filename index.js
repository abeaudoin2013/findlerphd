$(document).ready(function () {
	var index = {
		
		navClicked: false,

		init: function () {
			this.faq();
			this.services();
			this.nav();
			this.servicesLink();
		},
		faq: function () {
			function check() {

				$(".faq-question").each(function (i, q) {
					if ($(q).attr("data-toggled") === "false") {
						$(q).siblings(".faq-answer")
						    .slideUp(500);
					}
				})
				
			};

			$(".faq-question").unbind("click").bind("click", function () {
				if ($(this).attr("data-toggled") === "false") {
					$(this).attr("data-toggled", true)
				       .siblings(".faq-answer")
				       .slideDown(500);
				} else {
					$(this).attr("data-toggled", false);
					check();
				}
				

				$(this).closest(".faq")
				       .siblings(".faq")
				       .each(function (i, faq) {
				       	$(faq).find(".faq-question").attr("data-toggled", false);
				       	check();
				       });
				
			});
		},
		services: function () {
			
			var animationComplete = false;

			// click on icon
			$(".service-icon").unbind("click").bind("click", function () {
				
				var self = this;

				$(self).addClass("service-icon-border");

				// hide all of the icons
				$(".service-icon").addClass("service-icon-hide");

				// add these edge cases
				$(self).closest(".icon-row").find("#therapy-image").addClass("therapy-shrinkage");
			  $(self).closest(".icon-row").find(".balls").addClass("balls-shrinkage").css({margin: "5px 0"});
			  $(self).closest(".icon-row").find("#open").css({"margin-right": "5px", "margin-top": "0px", "margin-bottom":"0px"});
			  $(self).closest(".icon-row").find("#second-black").css({"margin": "0 0"});
			  $(self).closest(".icon-row").find("#forensics").addClass("forensics-clicked");
			  $(self).closest(".icon-row").find("#tiny-a").hide();


			  // if the animation is not complete, hide the title
				if (!animationComplete) {
				  $(self).siblings(".service-details").find(".service-icon-title").hide();
				  $(self).closest(".service-icon-container").css({height: "196px", "vertical-align": "top"});
				}

				// hide all of this
				$(self).closest(".service-icon-container")
				       .siblings(".service-icon-container")
				       .each(function(i, div) {
				       	 $(div).find(".service-icon-title")
				       	       .removeClass("service-icon-title-display-inline")
				       	       .hide();
				       	 $(div).find(".service-icon-details")
				       	       .removeClass("service-icon-details-show")
				       	       .hide();
				       	 $(div).find(".service-icon")
				       	 			 .removeClass("service-icon-display-inline service-icon-border")
				       });

				$(self).addClass("service-icon-display-inline");
				
				// makes block elements slide in
				$(".service-icons-container").addClass("service-icons-container-toggled");

				var showTitle = function (first) {
					

				  $("#tiny-a").addClass("tiny-a-clicked").fadeIn(250);
  				
  				// first adjusts the top of the information the first time. 
  				// Need some time to allow for the top of the therapy element to be determined
	        if (first) {
	          setTimeout(function () {
	          	var top = $(self).closest(".service-icon-container").offset().top;
			        var topOfTop = $("#therapy-container").offset().top;
			        var dif = topOfTop - top;
		        	$(self).siblings(".service-details").css({top: dif - 30});
		        	$(self).siblings(".service-details")
							       .addClass("service-details-display-inline")
							       .find(".service-icon-title")
						         .fadeIn(300);
						  $(self).siblings(".service-details")
						         .find(".service-icon-details")
						         .addClass("service-icon-details-show")
						         .fadeIn(300);
		        }, 450);
	        } else {
	        	var top = $(self).closest(".service-icon-container").offset().top;
		        var topOfTop = $("#therapy-container").offset().top;
		        var dif = topOfTop - top;
	        	$(self).siblings(".service-details").css({top: dif - 30});
	        	$(self).siblings(".service-details")
							     .addClass("service-details-display-inline")
							     .find(".service-icon-title")
				           .fadeIn(300);
					  $(self).siblings(".service-details")
					         .find(".service-icon-details")
					         .addClass("service-icon-details-show")
					         .fadeIn(300);
	        }
	        
				}

				if (!animationComplete) {
					setTimeout(function () {
						$(self).addClass("service-icon-border");
						$(".service-icon-container").addClass("block");
						$(".info-container").css({display: "inline-block"});
						$(self).closest(".service-icon-container").removeAttr("style");
						showTitle(true);
						animationComplete = true;
					}, 300);
				} else {
					$(".service-icon-border").each(function(i, div) {
						$(div).removeClass("service-icon-border");
					});
					$(self).addClass("service-icon-border");
					showTitle();

				}
				
			});
		},
		nav: function () {
			
			var self = this;

			var toggleNav = function () {

				if (!self.navClicked) {
					
					$("#navigation").removeClass("navigation-untoggled")
					                .addClass("navigation-toggled");

					$("#navigation-overlay-container").removeClass("slide-out-overlay")
					                                  .addClass("slide-in-overlay");
					self.navClicked = true;

				} else {

					$("#navigation").removeClass("navigation-toggled")
					                .addClass("navigation-untoggled");

					$("#navigation-overlay-container").removeClass("slide-in-overlay")
					                                  .addClass("slide-out-overlay");
					self.navClicked = false;

				}
			}

			$("#navigation").unbind("click").bind("click", function () {
				$("#navigation").removeClass("come-in").addClass("navigation-opacity");
				toggleNav();
			});

			$("#close-nav").unbind("click").bind("click", function () {
				toggleNav();
			});

			$(".nav-item").unbind("click").bind("click", function () {
				var id = $(this).attr("id");
				var $sec = $("section[name='" + id + "'").offset().top;
				$('html, body').animate({
		      scrollTop: $sec
		    }, 250);
		    toggleNav();
		  });
		},

		servicesLink: function () {
			$(".services-link").unbind("click").bind("click", function () {
        var $sec = $("#services").offset().top;
				$('html, body').animate({
		      scrollTop: $sec
		    }, 250);
			});
		}
	};

  index.init();
});