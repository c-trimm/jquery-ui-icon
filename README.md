jquery-ui-icon
==============

A jQuery UI widget for turning an element into an icon that can change on hover.

Options:
* **icon:**  the icon to show
* **hoverIcon:** the icon to show when wrapper is hovered over
* **wrapperClass:** a classname to apply to the wrapper

Usage:
------
```JavaScript
var $closeButton = $(".close-button");

// Initialize
$closeButton.icon({
  icon: "close",  // optional, defaults to "link"
  hoverIcon: "closethick", // optional, defaults to ""
  wrapperClass: "some-class" // optional, defaults to ""
});

// Get wrapper
var $wrapper = $closeButton.icon("wrapper");
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
