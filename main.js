
console.log("start");


jqueryAndVanilla();
// animateJQuery();
// testVanillaJs();
// testJQuery();


function jqueryAndVanilla() {

  let divJS = document.querySelector("#main");
  let divJQ = $("#main");

  // convert simple HTML Element object into jQuery object
  let divJQx = $(divJS);
  // divJQx.text("hello jQuery");

  // convert jQuery object into simple HTML Element object
  let divJS_0 = divJQ[0];
  divJS_0.textContent = "hello simple HTML elem";
}


function animateJQuery() {

  let buttons = $(".btn");
  buttons.css("background-color", "orange");

  buttons.click(function() {

    console.log("animating!");

    let properties = {
      padding: "20px",
      "margin-left": "+=50px"
    };

    // $(this) will be the button clicked
    $(this).animate(properties, 2000);
  });
}



let fruits = ["pear", "apple", "orange"];

let html = "<ul>";
for (let fruit of fruits) {
  html += "<li>" + fruit + "</li>";
}
html += "</ul>";


function testJQuery() {

  // div will contain a jQuery object
  let div = $("#main");

  // div.text("<strong>hello</strong>");
  // div.html("<strong>hello</strong>");
  div.html(html);

  div.css("border", "1px solid blue");

  /* events like: click, mouseover, keypressed, keyup, keydown
  div.on("click", function() {
    div.css("background-color", "grey");
  });
  */

  div.click(function() {
    div.css("background-color", "grey");
    // div.hide(); or show()
  });
}

function testVanillaJs() {

  // div will contain an HTML element
  let div = document.querySelector("#main");

  // div.textContent = "<strong>hello</strong>";
  // div.innerHTML = "<strong>hello</strong>";
  div.innerHTML = html;

  div.style.border = "1px solid blue";
  //div.style['border'] = "1px solid blue";

  div.onclick = function() {
    div.style['background-color'] = "grey";
    div.style.display = "none"; // "block", "inline-block"
  };
}
