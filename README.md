# go-back-directive
AngularJS Directive to go back to another page, by receiving a function by reference to be executed when the button is clicked.

## instructions
Simply copy files goBack.directive.js, goBack.html and goBack.scss into your project in the corresponding folders according to your structure and use <go-back></go-back>

### Example: setting the function to the directive
```
// To add the function to be called, just use go-back-function parameter as shown next:
<go-back go-back-function="goBackFunction()"></go-back>

```