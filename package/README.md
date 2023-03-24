# Tailwind Hamburgers

Zero-dependency, hamburger menus built with Tailwind CSS.

## Demo

You can check out the demo [here](https://patrykgulas.com/hamburgers).

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

| Class | Properties |
|---|---|
| tham-w-4  | height: 16px; width: 10px; |
| tham-w-5  | height: 20px; width: 12.5px; |
| tham-w-6  | height: 24px; width: 15px; |
| tham-w-7  | height: 28px; width: 17.5px; |
| tham-w-8  | height: 32px; width: 20px; |
| tham-w-9  | height: 36px; width: 22.5px; |
| tham-w-10 | height: 40px; width: 25px; |
| tham-w-11 | height: 44px; width: 27.5px; |
| tham-w-12 | height: 48px; width: 30px; |

### Color

You can set a color of hamburger menu by adding class to element with `tham-inner` class name. For example: `bg-indigo-500`, `bg-green-300`, `bg-gray-900`.

[See full documentation about background colors](https://tailwindcss.com/docs/background-color)

## Credits

This project is a port for [Jonathan Suh project](https://jonsuh.com/hamburgers), huge kudos to him!

## License

[MIT](https://choosealicense.com/licenses/mit/)
