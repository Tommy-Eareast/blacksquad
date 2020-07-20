function adjustScrollPosition() {
  let scroll = 0;
  window.onscroll = () => {
    let nowScroll = document.documentElement.scrollTop;
    if (nowScroll > 0 && scroll <= nowScroll) {
      scroll = nowScroll;
      document.getElementById("below1024px").style.position = "absolute";
      document.getElementById("dropdownBar").style.top = "0px";
    } else {
      scroll = nowScroll;
      document.getElementById("below1024px").style.position = "fixed";
      document.getElementById("dropdownBar").style.top = "100px";
    }
  };
}
adjustScrollPosition();

function dropdown() {
  let now = document.getElementById("dropdownBar").style;
  if (now.display == "flex") {
    toNone = () => (now.display = "none");
    now.animationName = "disappear2";
    setTimeout(toNone, 300);
  } else {
    now.display = "flex";
    now.animationName = "disappear";
  }
}
