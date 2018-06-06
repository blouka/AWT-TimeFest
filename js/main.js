// Get the video
var video = document.getElementById("myVideo");
var enterButton = $("#enterButton");
var fullscreen = $("#fullscreen-bg");
var logo = $("#logoBig");
var flex = $("#flex-container");
var header = $("header");
var upload = $("#upload");
var uploadLink = $("#uploadLink");
var festivalsLink = $("#festivalsLink");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.playbackRate = 0.5;
        video.play();
    } else {
        video.pause();
    }
}
$('img').on('dragstart', function(event) { event.preventDefault(); });

enterButton.click(function (){
    fullscreen.hide();
    logo.fadeOut(250);
    enterButton.fadeOut(100);
    $(".flex-item").fadeIn(500);
    header.fadeIn(500);
});

uploadLink.click(function () {
   upload.fadeIn(250);
    $(".flex-item").fadeOut(150);
});

festivalsLink.click(function () {
    $(".flex-item").fadeIn(250);
    upload.fadeOut(150);
});

$(".flex-item").click(function(){
   $(".flex-item").fadeOut(150);
    $("#timeline").fadeIn(250);
});

$(function() {
  $(".tintImg").each(function() {
  $(this).wrap('<div class="tint"></div>');
  });
});