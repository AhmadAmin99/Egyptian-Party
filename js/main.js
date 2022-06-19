let navBarWidth = $(".nav-bar").innerWidth();
// console.log(navBarWidth);
$(".fa-bars").click(function(){
    let x = $(".nav-bar ul").css("left");
    // console.log(x);
    if(x === "0px"){
        $(".nav-bar ul").animate({left:"-240px"},1000);

        $(".fa-bars").animate({left:"0px"}, 1000);
    }else{
        $(".nav-bar ul").animate({left:"0px"}, 1000);

        $(".fa-bars").animate({left:"250px"}, 1000);

    }
})

$(".fa-xmark").click(function(){
    let x = $(".fa-bars").css("left");

    $(".nav-bar ul").animate({left:"-240"},1000);
    $(".fa-bars").animate({left:"0px"}, 1000);

    
})

$(".details h2").click(function(){
    $(this).next().slideToggle(1000);
})


function countdown() {
    var now = new Date();
    var eventDate = new Date(2022, 7, 9);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.querySelector(".days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.querySelector(".days").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.querySelector(".hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.querySelector(".min").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.querySelector(".sec").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}

countdown();


function char(){
    $("textarea").keyup(function(){
        let max = $(this).val().length;
        let count = 100 - max;
        if(count > 0)
            $(".info-form span").text(`${count}`);
        else
        $(".info-form span").text("You Can't Write More");

    })
}

char();
