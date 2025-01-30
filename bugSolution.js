```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  console.log(myFunction(10, 0));
} catch (error) {
  console.error('Error:', error.message);
}
```