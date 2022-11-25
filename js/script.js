//========sticky navigation==============//

// $(window).scroll(function(){
//     if($(this).scrollTop()>100){
//        $(".navbar").addClass("sticky"); 
//     }
//     else{
//         $(".navbar").removeclass("sticky");
//     }
// })


//==========navigation==========//
$(".menubar").click(function(){
    $("#navigation").slideToggle();
});

//=============active scroll navigation=============//

var section = document.querySelectorAll('section');
var navbar = document.querySelectorAll('section nav a');


window.onscroll = () =>{
    section.forEach(sec =>{
        var top = window.scrollY;
        var offset =sec.offsetTop;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');


        if (top >= offset && top <offset + height){
            navbar.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('section nav a[href*=' + id + ']').classList.add
                ('active');
            });
        };
    });
};


//==================class carousel=====//
$('.one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
//==================review carousel=====//

$('.two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//==============login popup=========//
var popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

//==============sign in popup=========//
var popup2 = document.getElementById("popup2");

function openPopup2(){
    popup2.classList.add("open-popup2");
}

function closePopup2(){
    popup2.classList.remove("open-popup2");
}

//===============form validation================//
function validation(){
    var use = document.getElementById("user").value;
    var em = document.getElementById("email").value;

    if (use==""){
        document.getElementById("uname").innerHTML="user required";
        return false;
    }
    if (em==""){
        document.getElementById("mail").innerHTML="email required";
        return false;
    }
    else{
        document.write("<h3>Thankyou</h3>");
    }
}