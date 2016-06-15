# jquery.fadeCss
A jQuery plugin to fade in/out elements using css transition on opacity

e.g. To fade in an element:
````
$('.showMe').fadeCss('in');
````
to fade out:
````
$('.showMe').fadeCss('out');
````

the function take a second optional parameter to set options:
````
$('.showMe').fadeCss('in', {
                hideClass: 'hide',
                fadeInClass: 'fadeIn',
                fadeOutClass: 'fadeOut',
                zeroOpacityClass: 'transparent',
                fullOpacityClass: 'opaque',
                transitionDuration: 500
            });
````

To fade in an element this must already have the `hideClass` applied
