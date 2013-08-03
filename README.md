jquery-ui-icon
==============

A jQuery UI widget for turning an element into an icon that can change on hover.

Usage:
------
```JavaScript
$(".close-button").icon({
  icon: "close",  // defaults to "link"
  hoverIcon: "closethick" // optional
});
```

HTML Before:
```HTML
<span class='close-button'></span>
```

HTML After:
```HTML
<span style='border: 0;'>
  <span class='close-button ui-icon ui-icon-close'></span>
</span>
