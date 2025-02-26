// // pages/_app.js
import { Provider } from "react-redux";
// import the Redux store
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {" "}
      {/*This provides a redux store component*/}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
