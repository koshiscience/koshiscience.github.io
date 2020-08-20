const tag = decodeURI(location.search.substr(5));
console.log(tag)

function scrolltoelement() {
  if (!(tag == "")) {
    const element = document.getElementById(tag);
    console.log(element)
    const position = element.getBoundingClientRect().top;
    scrollTo(0, position);
    element.className = "mark"
  }
}


window.onload = scrolltoelement;
