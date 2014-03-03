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
