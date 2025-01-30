# Silent Division by Zero in Node.js

This repository demonstrates a subtle error in Node.js: silent division by zero.  The `myFunction` attempts to divide `a` by `b`. If `b` is zero, instead of throwing an error, it returns `Infinity`.

This behavior might be unexpected and lead to incorrect results. The solution provides robust error handling.