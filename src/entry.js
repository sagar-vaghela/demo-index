/*
  https://goo.gl/mw8Ntd - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
  Be sure to adjust the `browserslist` field in your `package.json` file.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

// Import our top-level sass file.
import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Import our top-level component.
import { App, RootContainer } from './container'

import { configureStore } from "./store";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const defaultRender = () => {
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <RootContainer />
      </BrowserRouter>
    </Provider>,
    document.querySelector('#app')
  );
};

defaultRender();


// Mount our app.
// ReactDOM.render(
//   <Provider store={store}>
//       <BrowserRouter>
//         <RootContainer />,
//       </BrowserRouter>
//     </Provider>
//     document.getElementById("root")
// )
