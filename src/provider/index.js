// src/provider/index.js (or src/provider/provider.js)
import React from "react";
import { Provider } from "react-redux"; // Redux provider
import store from "../redux/store"; // Import the Redux store

// Custom wrapper provider for your app
const MyProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your application with the Redux store */}
      {children} {/* Render the children (your app components) */}
    </Provider>
  );
};

export default MyProvider;
