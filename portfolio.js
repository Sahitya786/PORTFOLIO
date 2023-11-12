// calling elements
let body = document.getElementsByTagName("body")[0];
let button = document.getElementsByClassName("menu")[0];
let linkslist = document.getElementsByClassName("mylinks-m")[0];
let btn1 = document.getElementsByClassName("btn-m")[0];
let btn2 = document.getElementsByClassName("btn")[0];
let nav = document.getElementsByClassName("navbar-m")[0];
let contact = document.getElementsByClassName("contact")[0];
let cross = document.getElementsByClassName("crossbtn")[0];
let link = document.getElementsByClassName("link-m");
let loader = document.getElementsByClassName("loading")[0];
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let modechange = document.getElementsByClassName("modechange")[0];

// adding eventlistener to hamburger button
button.addEventListener("click", () => {
  linkslist.classList.toggle("active");
  btn1.classList.toggle("active");
  if (nav.style.height === "100vh") {
    nav.style.height = "13vh";
  } else {
    nav.style.height = "100vh";
  }
  bar1.classList.toggle("bar1");
  bar2.classList.toggle("bar2");
  bar3.classList.toggle("bar3");
});
//adding eventlistener to navbar links
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    linkslist.classList.toggle("active");
    bar1.classList.toggle("bar1");
    bar2.classList.toggle("bar2");
    bar3.classList.toggle("bar3");
    btn1.classList.toggle("active");
    if (nav.style.height === "100vh") {
      nav.style.height = "10vh";
    } else {
      nav.style.height = "100vh";
    }
  });
}
btn1.addEventListener("click", () => {
  linkslist.classList.toggle("active");
  btn1.classList.toggle("active");
  bar1.classList.toggle("bar1");
  bar2.classList.toggle("bar2");
  bar3.classList.toggle("bar3");
  if (nav.style.height === "100vh") {
    nav.style.height = "10vh";
  } else {
    nav.style.height = "100vh";
  }
});
//adding event listener to contact(Let's Talk) button
btn1.addEventListener("click", () => {
  contact.classList.remove("pop");
});

btn2.addEventListener("click", () => {
  contact.classList.remove("pop");
});

//adding event listener to cross button
cross.addEventListener("click", () => {
  contact.classList.add("pop");
});

// adding event listener to dark/lightmode change button
modechange.addEventListener("click", () => {
  body.classList.toggle("light");
});

// scroll indicator logic
function scrollfunction() {
  var scroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  console.log(scroll);
  console.log(height);
  var scrolled = (scroll / height) * 100;
  console.log(scrolled);
  document.getElementById("indicator").style.width = scrolled + "%";
}
window.onscroll = function () {
  scrollfunction();
};
