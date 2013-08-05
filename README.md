jquery-ui-icon
==============

A jQuery UI widget for turning an element into an icon that can change on hover.

**Demo:** http://caseytrimm.com/projects/jquery-ui-icon/demo/

Options:
* **icon:**  the icon to show
* **hoverIcon:** the icon to show when wrapper is hovered over
* **wrapperClass:** a classname to apply to the wrapper

Usage:
------
```JavaScript
var $icon = $("#icon");

// Initialize
$icon.icon({
  icon: "close",  // optional, defaults to "link"
	hoverIcon: "closethick", // optional, defaults to ""
	wrapperClass: "some-class" // optional, defaults to ""
});

// Get wrapper
var $wrapper = $icon.icon("wrapper");

// Change Options
$icon.icon("option", "icon", "pencil"); // Change icon to pencil
$icon.icon("option", "hoverIcon", ""); // Remove hover icon
$icon.icon("option", "wrapperClass", "myClass"); // Change the icon wrapper's class
```

HTML Before:
```HTML
<span class='close-button'></span>
```

HTML After:
```HTML
<span style='border: 0;' class='some-class'>
  <span class='close-button ui-icon ui-icon-close'></span>
</span>
```
