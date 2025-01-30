```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero inputs
  }
  return a / b; // Potential division by zero if b is zero
}

console.log(myFunction(10, 0)); // Output: Infinity
```