(function () {
  // Get the menu button and the navigation menu
  const burger = document.querySelector(".burgerMenuButton");
  const primaryNavigation = document.querySelector(".primaryNavigation");

  // Add a click handler to the menu button
  burger.addEventListener("click", clickHandler);

  // The click handler will toggle the menu and its ARIA state
  function clickHandler() {
    primaryNavigation.classList.toggle("primaryNavigation--show");
    
    if (primaryNavigation.getAttribute("aria-hidden") === "true") {
      primaryNavigation.setAttribute("aria-hidden", "false");
    } else primaryNavigation.setAttribute("aria-hidden", "true");
  }
  function checkInput() {
    var query = document.getElementById('search').value;
    window.find(query);
    return true;
  }
  
})();