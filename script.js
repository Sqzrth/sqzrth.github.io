window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("test").className = "animation";
  }
}