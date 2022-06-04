window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 35) {
    document.getElementById("introduction").className = "animation";
  }
}