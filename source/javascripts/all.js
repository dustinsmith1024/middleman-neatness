$(function(){
	if (Modernizr.inlinesvg) {
        // Swap in SVG's for better zooming and pixelness on retina displays
        $('[data-replace-svg]').each(function(e){
        	var $this = $(this);
        	$this.attr('src', $this.attr('src').replace('png', 'svg'));
        })
    }
});