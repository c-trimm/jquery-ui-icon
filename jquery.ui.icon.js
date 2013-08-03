(function( $ ) {
    $.widget("ui.icon", {
        options : {
    		icon : "link",
    		hoverIcon : ""
        },
		
		wrapper : $("<span style='border: 0;' />"),
 
        _create : function() {
			var self, ops, el, prefix, wrapper;
			
        	self = this;
			ops = this.options;
			el = this.element;
			prefix = "ui-icon-";
			
			if (ops.hoverIcon !== undefined) {
				this.options.icon = ops.icon;
			}
        	
        	if (ops.hoverIcon !== undefined) {
        		this.options.hoverIcon = ops.hoverIcon;
			}
			
        	el.addClass("ui-icon").addClass(prefix + this.options.icon);
			el.wrap(this.wrapper);
        	
        	this.wrapper.hover(function() {
        		if (this.options.hoverIcon.length) {
        			el.addClass(prefix + self.options.hoverIcon);
        			el.removeClass(prefx + self.options.icon);
        		}
        		else {
        			self.wrapper.toggleClass("ui-state-active");
				}
        	}, function() {
        		if (this.options.hoverIcon.length) {
        			el.removeClass(prefix + self.options.hoverIcon);
        			el.addClass(prefix + self.options.icon);
        		}
        		else {
        			self.wrapper.toggleClass("ui-state-active");
				}
        	});
       },
	   
	   _destroy : function() {
			this.wrapper.after(this.element);
			this.wrapper.remove();
	   }
     }); 
})(jQuery);