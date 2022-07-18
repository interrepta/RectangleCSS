$( document ).ready( function() {
    $normalElement = $(".rectangle");

    $normalElement.each(function() {
        $width = attribute($(this), 'width');
        $outofframeleft = attribute($(this), 'outofframeleft');
        $outofframeright = attribute($(this), 'outofframeright');
        $outofframetop = attribute($(this), 'outofframetop');
        $outofframebottom = attribute($(this), 'outofframebottom');
        $(this).css({"margin-left" : $outofframeleft});
        $(this).css({"margin-right" : $outofframeright});
        $(this).css({"margin-top" : $outofframetop});
        $(this).css({"margin-bottom" : $outofframebottom});
        width($(this), $width);
        display($(this), "inline-block");
        float($(this), "left");
        position($(this), "relative");
        positionOnTop($(this), 2);

        enableEditMode($(this), false);
    });


    function attribute($element, $attr) {
        return $element.attr($attr);
    }

    function color($element, $value) {
        $element.css({"color" : $value});
    }

    function outlineStyle($element, $value) {
        $element.css({"outline-style" : $value});
    }

    function position($element, $value) {
        $element.css({"position" : $value});
    }

    function width($element, $value) {
        $element.css({"width" : $value});
    }

    function display($element, $value) {
        $element.css({"diplay" : $value});
    }

    function margin($element, $value) {
        $element.css({"margin" : $value});
    }

    function float($element, $value) {
        $element.css({"float" : $value});
    }

    function positionOnTop($element, $value) {
        $element.css({"z-index" : $value});
    }

    function enableEditMode($element, $value) {
        if ($value === true) {
            $element.css({"outline-style" : "solid"});
            $element.css({"outline-color" : "red"});
        }
    }

} );