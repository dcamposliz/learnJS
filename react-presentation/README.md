# React Presentation for Phoenix JavaScript

## Prerequisites

- Know npm and JavaScript (intermediate-level)
- Know command-line
- Know Git

## Contents

Treat each of these folders as it's own web root. Each one will need an `npm install`. You can run a server if you wish, or each `index.html` can simply be opened in a browser. Remember to install webpack globally: `npm install -g webpack`



### 1. Hello World
 - Webpack (without Babel (ES6) or React)
 - Source Maps

Install

```sh
cd path/to/example
npm install
webpack
open index.html
```
> Open `bundle.js` file, scroll to the bottom and see the "Hello World" code wrapped in a bunch of code you didn't write (which came from Webpack)



### 2. First React Component
 - React
 - ES6 with Babel
 - React with JSX


Install

```sh
cd path/to/example
npm install
webpack
open index.html
```

#### What is JSX?

```jsx
// JSX
<FirstComponent />

// React
React.createElement('div', null, 'Hello World');

// JS
var e = document.createElement('div');
e.innerHtml = 'Hello World'
```



### 3. Props
 - Webpack Resolve `./app`
 - Webpack Watch (this is implemented via command line, see below)
 - Concept: Sub Components

Install

```sh
cd path/to/example
npm install
webpack -w
open index.html
```



### 4. React Router
- React Router
- Gulp
 - Webpack
 - gulp-server
- Concept: `browserHistory`

Install

```sh
cd path/to/example
npm install
gulp
```

> Visit http://localhost:8000



### 5. App Component
- No new tools, install same as last example
- Concept: Re-usable layout (App Component)

> Visit http://localhost:8000




### 6. Data without Redux
- JSON Server (just so we have a RESTful API for demo purposes)
- Axios (a popular XHR tool using promises)
- Concepts: Component Containers

Install

```sh
cd path/to/example
npm install
gulp
```

> Visit http://localhost:3000 for database

> Visit http://localhost:8000 for web app




### 7. Redux
- Redux
- Redux-Thunk
- Concepts: Stores, Reducers, Actions, Dispatch, Subscribe

Install

```sh
cd path/to/example
npm install
gulp
```

> Visit http://localhost:8000




### 8. react-redux
- react-redux
- Concepts: Provider, storeSelector, connect

Install

```sh
cd path/to/example
npm install
gulp
```

> Visit http://localhost:8000



# Resources

- https://egghead.io/lessons/react-building-a-react-js-app-up-and-running-with-react-and-webpack
- https://egghead.io/lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe
- http://redux.js.org/docs/api/
