jquery-ui-icon
==============

A jQuery UI widget for turning an element into an icon that can change on hover.

**Demo:** http://caseytrimm.com/projects/jquery-ui-icon/

Options:
* **icon:**  the icon to show
* **hoverIcon:** the icon to show when wrapper is hovered over
* **wrapperClass:** a classname to apply to the wrapper

Usage:
------
#### Install
```HTML
<!-- Add the theme. This uses redmond, so be sure to change it to your own -->
<link rel="stylesheet" type="text/css" href="css/redmond/jquery-ui-1.10.3.custom.min.css" />

<!-- Add the scripts -->
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.ui.icon.js"></script>

<!-- Add span for icon somewhere in your page -->
<span id="icon"></span>
```

#### Initialize
```JavaScript
$("#icon").icon({
	icon: "close", // optional, defaults to "link"
	hoverIcon: "closethick", // optional, defaults to ""
	wrapperClass: "some-class" // optional, defaults to ""
});
```

#### Update
```JavaScript
$icon.icon("option", "icon", "pencil"); // Change icon to pencil
$icon.icon("option", "hoverIcon", ""); // Remove hover icon
$icon.icon("option", "wrapperClass", "myClass"); // Change the icon wrapper's class
```

#### Wrapper Method (for accessing icon wrapper)
```JavaScript
var $wrapper = $icon.icon("wrapper");
```
