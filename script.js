window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 10) {
    document.getElementById("introduction").className = "animation";
  }
}