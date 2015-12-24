
window.console = window.console || function() {
   var e = {};
   e.log = e.warn = e.debug = e.info = e.error = e.time = e.dir = e.profile = e.clear = e.exception = e.trace = e.assert = function() {};
   return e
}();

$(document).ready(function() {

	var e =  '<div class="switcher-container" ng-app="switch">'+
               '<h2>Haberiniz Olsun<a href="#" class="sw-click"><span class="icon-settings"></a></h2>'+


        '<div class="selector-box" ng-controller="switchCtrl">'+
            '<div class="clearfix">' +
            '</div>'+

        '<div class="sw-odd">'+
        '<div class="ws-colors">'+

        '<div class="row">' +
        '<div class="col-md-11">' +
        '<input style="color:white" type="text" class="form-control margin"  id="fullname2" placeholder="Adınız">' +
        '<input style="color:white" type="email" class="form-control margin"  id="email2" placeholder="Email Adresinizi Giriniz">' +

        '</div>' +
        '</div>'+
            '<div class="row"><div class="col-md-11"> <a href="#" class="pull-right" onclick="sendEmail()">Gönder</a></div></div>'

        '</div></div>'+

        '</div>'+





        '</div>';
	$('body').append(e);
	switchAnimate.loadEvent();
	switchColor.loadEvent();
    });

    var switchColor = {
    colorObj: {
        colorCookie: "colorCookie",
        switchClass: ".styleswitch",
        currentClass: "current",
        headLink: "head link[id=colors]",
        colorItem: ".ws-colors a.styleswitch",
        reset: "#reset",
        defaultColor: "color1"
    },
    loadEvent: function() {
        var e = switchColor.colorObj;
        if ($.cookie(e.colorCookie)) {
            switchColor.setColor($.cookie(e.colorCookie))
        } else {
            switchColor.setColor(e.defaultColor)
        }
        $(e.colorItem).on("click", function() {           
            var e = $(this).attr("id");
            switchColor.setColor(e)
        });
        $(e.reset).on("click",function () {
            switchColor.setColor(e.defaultColor)
        })
    },
    setColor: function(e) {
        var t = switchColor.colorObj;
        $.cookie(t.colorCookie, e);
        $(t.headLink).attr("href", "stylesheets/colors/" + e + ".css");
        var logo = '', logo_s = '';

        var retina = window.devicePixelRatio > 1 ? true : false;

        if(retina) {
            logo = 'images/logo_' + e + '@2x.png';
            logo_small = 'images/logo_small_' + e + '@2x.png';
            if(e === t.defaultColor){
                logo = 'images/logo@2x.png'
                logo_s = 'images/logo_s@2x.png'
            }
        }
        else {
            logo = 'images/logo_' + e + '.png';                         
            if(e === t.defaultColor){
                logo = 'images/logo.png'               
            }
             
            $('.header .logo').find('img').attr('src',logo);            
          }

        $(t.switchClass).removeClass(t.currentClass);
        $("#" + e).addClass(t.currentClass);

          //set color for text in content
        if($('.infomation.text-center h3').length === 1) {
            var hiText = $('.infomation.text-center h3').closest('.section').css("background-color").toString();
            if(hiText === "rgb(91, 91, 91)")
                $('.infomation.text-center h3').css('color', "#fff");
            }
        }
    };
    function sendEmail(){
        var email=$("#email2").val();
        var fullname=$("#fullname2").val();
        var model={Email:email,FullName:fullname,IsActive:1};
        $.post( "../PHP/Contact/Handler_Contact.php?request=email", model,function( data ) {
           if(parseInt(data)>0){
               toastr.success("İşlem Başarılı");
               $("#email2").set(null);
                $("#fullname2").set("");
           }else
               toastr.error("Hata Oluştu");

        });
    };
	
    var switchAnimate = {
		loadEvent: function() {
		  $(".switcher-container h2 a.sw-click").on('click',function(e) {
			 var t = $(".switcher-container");

			 if (t.css("right") === "-290px") {
				$(".switcher-container").animate({ right: "0"}, 300, 'easeInOutExpo')
			 } else {
				$(".switcher-container").animate({ right: "-290px" }, 300, 'easeInOutExpo')
			 }

			 e.preventDefault();
		 })
	   }
	};
    

