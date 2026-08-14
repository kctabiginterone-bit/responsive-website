# One-Page Responsive Website

This project is a one-page responsive website built with HTML, Sass (SCSS), and JavaScript. It demonstrates:

- Responsive layout for mobile, tablet, and desktop using media queries.
- Sass features: variables, nesting, and a mixin (see `scss/styles.scss`).
- JavaScript interactions: mobile navigation toggle, show/hide content, change text, and card expanders.
- Header/navigation, hero section, three content cards, and footer with dynamically generated year.

How to run

1. Open `index.html` in a browser.

Optional: compile SCSS to CSS if you want to edit styles source.

If you have `sass` installed (Dart Sass), run:

```bash
sass scss/styles.scss css/styles.css --style=expanded
```

Files

- `index.html` — main page
- `scss/styles.scss` — source SCSS (variables, nesting, mixin)
- `css/styles.css` — compiled CSS used by the page
- `js/main.js` — JavaScript interactions

Notes

- The footer year is generated dynamically by `js/main.js`.
- The page includes at least two interactive features as required.
