window.onscroll = function() {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById("introduction").className = "animation";
  }
}