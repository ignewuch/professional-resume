// script.js
document.addEventListener("DOMContentLoaded", function() {
  console.log("javascript file is working!");

  // example of an interactive feature: change the background color of the header on click
  const header = document.getElementById('header');
  if (header) {
    header.addEventListener('click', function() {
      header.style.backgroundColor = header.style.backgroundColor === 'yellow' ? 'transparent' : 'yellow';
      console.log("header background color changed!");
    });
  }

  // example of logging page content information to the console
  console.log("document title: ", document.title);
  console.log("number of sections: ", document.querySelectorAll('section').length);
});
