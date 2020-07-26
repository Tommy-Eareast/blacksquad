"use strict";
function adjustScrollPosition() {
  let scroll = 0;
  window.onscroll = () => {
    let nowScroll = document.documentElement.scrollTop;
    if (nowScroll > 100 && scroll <= nowScroll) {
      //down
      scroll = nowScroll;
      document.getElementById("scrollUpBar").style.animationName =
        "disappear100";
      document.getElementById("dropdownBar").style.animationName =
        "disappear100";
    } else if (scroll <= nowScroll) {
    } else {
      //up
      scroll = nowScroll;
      document.getElementById("scrollUpBar").style.animationName = "appear100";
      document.getElementById("dropdownBar").style.animationName = "appear100";
    }
  };
}
adjustScrollPosition();

function dropdown() {
  let now = document.getElementById("dropdownBar").style;
  if (now.display == "flex") {
    let toNone = () => (now.display = "none");
    now.animationName = "disappear332";
    setTimeout(toNone, 300);
  } else {
    now.display = "flex";
    now.animationName = "appear332";
  }
}
