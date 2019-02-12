# rbjs

Augment JavaScript arrays with Ruby array methods, using Proxies.


## Usage

```js
import rbjs from 'rbjs';
```

In order to use Ruby array methods on JavaScript arrays, the array needs to be
proxied by passing it to the `rbjs` function.

```js
const array = rbjs([1, 2, 3]);
// `array` now contains all the implemented Ruby array methods

array.count(2); // => 1
```

### Using individual methods

The methods can also be used on their own, without importing the entire `rbjs`
library. This is done by importing the method definition directly.

```js
import count from 'rbjs/methods/count';

count([1, 2, 3], 2); // => 1
```

The caveat of using `rbjs` this way is that the array to operate on needs to be
passed as the first argument to the method being used.


## Contributing

Thanks for wanting to contribute to this project! Please follow these steps:

1. Open an issue in this repository about the contribution to be made
2. Fork and clone this repository
3. Install dependencies (`npm install`)
4. Add your contributions ❤️
5. Write tests for your added contributions
6. Open a pull request to this repository


## License

MIT License
