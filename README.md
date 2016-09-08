# chai-string

> Accepts JSON serializable arguments and delegates to [chai.js](http://chaijs.com/)

If you have stumbled across this page you are either thinking:

* Why in the hell would you do this?
* Nice. This is helpful for validating JSON configuration at runtime.

If you are in the first boat then please sail your ship [elsewhere](http://www.thebeatles.com/savepepperland/)
or keep reading to understand the rationale for this library.

I currently work on a service orchestration layer that munges up and shapes a bunch of service responses.
The orchestration instructions are stored in JSON and read from a configuration service. This is
so we can change response shapes and what not without having to deploy. At the heart of
this orhestration service is [JSON Patchwork](https://github.com/walmartlabs/json-patchwork).
There are such things as [operations](https://github.com/walmartlabs/json-patchwork#operations) that are applied to patches
and [tests](https://github.com/walmartlabs/json-patchwork#tests) that are used to filter, reduce patches  in JSON Patchwork.
What I wanted was a descriptive/declartive way to test patch values. This is why this library was created. I wanted to leverage
existing work rather than write my own configuration driven assertion library.

If you want to learn more about JSON Patchwork go [here](https://github.com/walmartlabs/json-patchwork). If you have no interest
in this project or take issue with its existence then go [here](https://en.wikipedia.org/wiki/Hell).

If you want documentation then read the test [specifications](test/index.js)
or the [comments](index.js). If you are too lazy to do that then read this:

```javascript
var expect = require('chai-string').expect;

// without comparison values
expect([], 'not.to.be.empty'); // expected [] not to be empty
expect([], 'to.be.empty'); // true

// with comparison values
expect({ bar: 1 }, 'to.have.all.keys', ['bar', 'baz']); // expected { bar: 1 } to have keys 'bar', and 'baz'
expect({ bar: 1, baz: 2 }, 'to.have.all.keys', ['bar', 'baz']); // true
```
