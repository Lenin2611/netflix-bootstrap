# Netflix Page

## HTML `index.html`

First of all the page was decorated with `Bootstrap` and some parts with `CSS`. The `HTML` file sets up the structure of a Netflix-inspired page. It includes sectrions for header, main and footer, that are inside a `div` with  `class="container"`, here is a breakdown of the key components:

### Meta and Title

Sets the document's character encoding, viewport settings, and metadata and sets the page title as "Netflix".

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
  <meta name="generator" content="Hugo 0.115.4">
  <title>Netflix</title>
  <link rel="shortcut icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" type="image/x-icon">
  <script src="../assets/js/color-modes.js"></script>
  <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/pricing/">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3">
  <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="pricing.css" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
  <script src="../assets/dist/js/bootstrap.bundle.min.js" defer></script>
</head>
```



### External Resources

Imports necessary external resources such as Bootstrap CSS and JavaScript, custom fonts, and icons.

### Header

Displays the Netflix logo and a "Sign In" link.

### Pricing Header

Displays introductory text and a heading for the pricing options, it also Lists key features with checkmark icons.

### Main

Contains the main content of the page, including the pricing options, pircing table and pircing text.

### Pricing Options

Displays subscription plans with details and pricing. Each plan is represented as a card with its respective details.

### Pricing Table

Displays a comparison table of features for each subscription plan.

### Pricing Text

Displays a description of the plans, it also contains the Terms of Use.

### Footer

Provides links to frequently asked questions, privacy policies, language preferences, and other information.

## CSS `pircing.css`

### Font Faces

Defines different font weights and styles for the "Netflix Sans" font.

### Body

Sets the font-family to "Netflix Sans" for consistent typography, it also defines the background gradient and overflow properties.

### Header

Applies margin to the header, aligning it with the logo.

### Pricing Header and Main

Sets maximum widths for consistent layout on larger screens.

### Cards

Styles the subscription plan cards, including header and body sections, giving it colors and font sizing.

### Pricing Table

Styles the comparison table, including header cells and data cells.

### Footer

Sets the background color for the footer and styles the footer links.

## Conclusion

The HTML code creates the structure of the page, while the CSS code  styles the elements to achieve a consistent and visually appealing  design.