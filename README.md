# Tailwind Hamburgers

Zero-dependency, hamburger menus built with Tailwind CSS.

## Demo

You can check out the demo [here](https://patrickgulas.com/hamburgers).

## Usage

1. Install a plugin

```bash
npm install tailwind-hamburgers --save

// or

yarn add tailwind-hamburgers --save
```

2. Add a plugin to Tailwind

```js
// tailwind.config.js
module.exports = {
  ...
  plugins: [require('tailwind-hamburgers')],
}
```

3. Add an hamburger to a markup

```html
<div class="tham tham-e-squeeze tham-w-6">
  <div class="tham-box">
    <div class="tham-inner" />
  </div>
</div>
```

4. Trigger class name for active state

Toggle `tham-active` class on the element with `tham` class name.

## Customization

### Size

You can set a size of hamburger menu by adding class to element with `tham` class name.

Available values are: `tham-w-4`, `tham-w-6`, `tham-w-8`, `tham-w-12`.

### Color

You can set a color of hamburger menu by adding class to element with `tham-inner` class name. For example: `bg-indigo-500`, `bg-green-300`, `bg-gray-900`.

## Credits

This project is a port for [Jonathan Suh project](https://jonsuh.com/hamburgers), huge kudos to him!

## License

[MIT](https://choosealicense.com/licenses/mit/)
