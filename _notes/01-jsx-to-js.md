# JSX to JS

## Babel repl
https://babeljs.io/en/repl

```
<div id="id" key="key">
  <span>1</span>
  <span>2</span>
</div>
  
```
To
```
React.createElement("div", {
    id: "id",
    key: "key"
  },
  React.createElement("span", null, "1"), 
  React.createElement("span", null, "2")
);
```

## ReactElement
source code
https://github.com/facebook/react/blob/master/packages/react/src/React.js
https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js
