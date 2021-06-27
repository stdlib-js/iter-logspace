<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterLogspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an iterator which returns evenly spaced numbers over a specified interval.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-logspace
```

</section>

<section class="usage">

## Usage

```javascript
var iterLogspace = require( '@stdlib/iter-logspace' );
```

#### iterLogspace( start, stop\[, N]\[, options] )

Returns an iterator which returns evenly spaced numbers on a log scale.

```javascript
var it = iterLogspace( 0, 10 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns ~1.26

v = it.next().value;
// returns ~1.59

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function accepts the following `options`:

-   **base**: base of the log space. Default: `10`.

By default, the iterator returns `100` values. To return an alternative number of values, provide an `N` argument.

```javascript
var it = iterLogspace( 0, 2, 3 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 10

v = it.next().value;
// returns 100

var bool = it.next().done;
// returns true
```

To specify an alternative log base, provide a `base` option.

```javascript
var opts = {
    'base': 2
};
var it = iterLogspace( 0, 10, 11, opts );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 4

// ...
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned iterator is guaranteed to include the values `base^start` and `base^stop`. Beware, however, that exponents between the `start` and `stop` are subject to floating-point rounding errors.
-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterLogspace = require( '@stdlib/iter-logspace' );

// Create a base-2 iterator:
var opts = {
    'base': 2
};
var it = iterLogspace( 0, 16, 17, opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-logspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-logspace

[test-image]: https://github.com/stdlib-js/iter-logspace/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/iter-logspace/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-logspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-logspace?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-logspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-logspace/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-logspace/main/LICENSE

</section>

<!-- /.links -->
