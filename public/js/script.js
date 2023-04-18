$(document).ready(function() {
    // Get all the menu items
    var menuItems = $('#menu nav ul li a');
  
    // Set initial focus on the first menu item
    menuItems.eq(0).focus();
  
    // Listen for arrow key events
    $(document).keydown(function(e) {
      if (e.keyCode == 38) { // Up arrow key
        e.preventDefault();
        var currentIndex = menuItems.index($(document.activeElement));
        var newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = menuItems.length - 1;
        }
        menuItems.eq(newIndex).focus();
      } else if (e.keyCode == 40) { // Down arrow key
        e.preventDefault();
        var currentIndex = menuItems.index($(document.activeElement));
        var newIndex = currentIndex + 1;
        if (newIndex >= menuItems.length) {
          newIndex = 0;
        }
        menuItems.eq(newIndex).focus();
      }
    });
  });
  // Open the menu when the button is clicked
$('#menu-button').click(function() {
    $('#menu').show();
  });
  
  // Close the menu when the escape key is pressed
 $(document).keydown(function(e) {
    if (e.key === "Escape") {
      location.reload();
    }
  });

  
  
  
  


