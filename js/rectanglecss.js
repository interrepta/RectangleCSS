$( document ).ready( function() {
    $normalElement = $(".rectangle");

    $normalElement.each(function() {
        $width = attribute($(this), 'width');
        width($(this), $width);

        $margin = attribute($(this), 'margin');
        $marginleft = attribute($(this), 'marginleft');
        $marginright = attribute($(this), 'marginright');
        $margintop = attribute($(this), 'margintop');
        $marginbottom = attribute($(this), 'marginbottom');
        $(this).css({"margin" : $margin});
        $(this).css({"margin-left" : $marginleft});
        $(this).css({"margin-right" : $marginright});
        $(this).css({"margin-top" : $margintop});
        $(this).css({"margin-bottom" : $marginbottom});

        $padding = attribute($(this), 'padding');
        $paddingleft = attribute($(this), 'paddingleft');
        $paddingright = attribute($(this), 'paddingright');
        $paddingtop = attribute($(this), 'paddingtop');
        $paddingbottom = attribute($(this), 'paddingbottom');
        $(this).css({"padding" : $padding});
        $(this).css({"padding-left" : $paddingleft});
        $(this).css({"padding-right" : $paddingright});
        $(this).css({"padding-top" : $paddingtop});
        $(this).css({"padding-bottom" : $paddingbottom});

        display($(this), "inline-block");
        float($(this), "left");
        position($(this), "relative");
        positionOnTop($(this), 2);

        enableEditMode($(this), true);
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