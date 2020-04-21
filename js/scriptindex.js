const parllax = document.querySelector(".parallax");

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parllax.style.backgroundPositionY = offset * 0.5 + 'px';
});

function coloror() {
	document.getElementById('about_me').style.background="#eba134";
	document.getElementById('know').style.background="#eba134";
	document.getElementById('know2').style.background="#eba134";
	document.getElementById('know3').style.background="#eba134";
	document.getElementById('skill').style.background="#eba134";
	document.getElementById('skill1').style.background="#eba134";
	document.getElementById('skill2').style.background="#eba134";
	document.getElementById('skill3').style.background="#eba134";
	document.getElementById('skill4').style.background="#eba134";
	document.getElementById('skill5').style.background="#eba134";
	document.getElementById('qoute').style.color="#eba134";
	document.getElementById('but').style.background="#eba134";
	document.getElementById('send').style.background="#eba134";
}
$(document).ready(function() {
  var classClicked = 'clicked';
  $('.card-flip').click(function() {
    if($(this).hasClass(classClicked)) {
      $(this).removeClass(classClicked);
    }
    else {
      $(this).addClass(classClicked);
    }
  }).mouseleave(function() {
    $(this).removeClass(classClicked);
  });
})

