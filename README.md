# cutLESS
cutLESS is an extended normaliser, an upstart, a mobile-first framework if you will, and intended as a base to build websites on and from, comfortable in the knowledge that much effort has gone into making things as consistent as they can be cross-browser, inclusive of all the mixins and snippets we commonly find ourselves adding throughout our own projects.

Please note: this is very much a work in progress, provided as is, at your own risk.

## Files

### Core
- Normalize
- Variables
- Mixins
- Grid
- Base
- FontAwesome

Not including `variables.less`, these files are intended to be untouched except for updates.

### Project
- Typography
- Colour
- Elements
- Forms
- Tables

These don’t have to be changed, but could save you a lot of overriding.

### Layout
- Global
- Print
- 480
- 600
- 768
- 992
- 1382
- 2x

All we’ve needed for our responsive sites so far. Start in `global.less`, design for the narrowest screen first.

## Thanks
Main thanks goes to the teams at [Normalize](http://necolas.github.io/normalize.css/), [Bootstrap](http://getbootstrap.com/2.3.2/), [HTML5 Boilerplate](http://html5boilerplate.com/), and [320andUp](http://stuffandnonsense.co.uk/projects/320andup/), for all the hard work that went into their frameworks and allowed the evolution of this one.