# 2.3.0
2015-04-05

### Large
- Removes device-width stylesheets because the structure hinders maintenance. Better to break styles in a more OO kind of way. Unfortunately, this will make non-calc use of `.column()` a pain…
- So, `@usecalc` is now `true` by default.
- Adds `@emlineheight` and `@elh`, allowing 1.5em to be used as a reusable measure.

### Small
- Updates border-box best practice
- Removes Verdana from font-stack
- Considers a couple new HTML5 elements
- Improves the nav style, targets more accurately
- Some little tweaks
- Adds a few more ems
 

# 2.2.2
2015-01-31

- Fixes corrupt `base.less`
- Corrects bad unit placing for LESS v2
- Updates FontAwesome to 4.3.0
- Improves ToggleARIA plugin: now auto-measures height of element
- mmmmmmmm (more ems)


# 2.2.1
2015-01-04

- Added `@basesize`, it was bothering me.
- Reinstated `appearance: none` to forms for iOS

# 2.2.0
2014-12-16

### Dramatic
- Overhaul to font sizing, we’re embracing the power of ems.
- Overhaul to controls, we’re sick of Firefox being ugly
- Removed nav scripts, .toggleARIA just works.

### Cinematic
- Inputs now look like buttons, because Yosemite makes that okay, and I like it.
- Tables should be a little more obvious about their overflow on mobile, allow for scrollbars on Windows.
- NEW XXL CONTROLS.

### Chromatic
- Added `-comp` colour options for controls and panels.
- Some colours are now created by `mix()`-ing, tather than `lighten()`-ing or `darken()`-ing; should be better.

### Idiomatic
- Various tweaks and fixes.

### Ecstatic
- Ems.

# 2.1.0
2014-11-07

- Adds .toggleARIA plugin

# 2.0.6
2014-09-17

- Updated FontAwesome to 4.2.0 and moved it into it’s rightful folder
- Removed some demo styles

# 2.0.5
2014-08-23

- Brought `@linkcolor` forward, added `@darkergrey` and `@*focuscolor`
- Reviewed a few quirks

# 2.0.4
2014-07-10

- Updated default nav
  - Now uses ARIA states and controls instead of classes
  - CSS takes control of showing/hiding only if JS can update the state
  - JS no longer needs to know the breakpoint
  

# 2.0.3
2014-04-21

- Added input and control groups, but they need some thorough testing
- Fixed an issue with my overzealous use of `appearance: none`
- Buttons and Controls can now be set indepently in `variables.less` if required
- Smaller link prints in `print.less`
- Added `@spotifycolor`
- `@controlsroundness: 3px` just seems to render better
- Changed contrast on button colouring to 60%, helps with `@alertcolor`

# 2.0.2
2014-03-03

### Fixes
- Removed margin-x from `figure`.
- Buttons keep their text colour on hover.

### Misses
- Forgot about the new breakpoint…
- Got round to including form styles.
- Removed some missed testing styles.

### Why-Nots
- Stripped empty selectors in otherwise empty files.
- Added `colour.less` into `base.less`, I never liked the name of that file anyway.

### Just-in-Cases
- Added `-webkit` to our `calc()` because I feel sorry for my brethren stuck on iOS 6.

# 2.0.1
2014-03-02

- iOS 7 has a high specificity on `input[type="search"]`, fixed it.

# 2.0.0
2014-03-01

### Overview
- Version 2 brings `settings.less`, encouraging an even faster start to development — but this optional/abstraction is not backwards-compatible. Hence, ‘V2’.
- Favourite option: `@usecalc`. `calc()` reduces the output `layout.less` (formerly known as `grid.less`) so dramatically, I wish it didn’t need to be an option.
- Media queries are now mixed in as `@media @small-tablet {}`.
- Simple mixins to change the sizes of inputs and buttons, or what I’m calling ‘controls’ collectively.
- Buttons are now the same height as inputs by default.
- Added a breakpoint that looks after screens larger than the arbitrarily chosen 1872px — I might change this.
- Dropping committed support for `lt-ie9`, but checkboxes and radios are safe.
- Firefox is still committed to becoming the next IE6.

### Minutiae
- LESS allows the importing of CSS as is now, so `normalize.css` is now just that.
- Made sure I wasn’t doubling up on the normalising.
- `@device-width`, `@device-layout`, and `@device` makes your job much easier, and breakpoint support variable.
- Removed a ton (metric) of prefixes from mixins. Some of them may never have been necessary at all.
- Removed cutLESS logo JPGs.

### HTML
- Removed some tags because I’m more-often-than-not removing them.
- Added `minimal-ui` to viewport tag for iOS 7.1…
- Removed meta for Window’s tile because I can’t even justify creating an icon for Windows every time I build a site.
- Removed Google Analytics placeholder, at least until I find optimising efforts for there new code.

### Add-ons
- FontAwesome’s super-helpful LESS is still here, but by default the font is now brought in by the Bootstrap CDN. Looking forward to updates from those guys.
- Updated jQuery (1.11.0) and Modernizr (2.7.1).
- The compiler wasn’t really necessary, for anybody.
- Prism.js wasn’t at all necessary, but the styles remain.
- Dropped Selectivizr.
