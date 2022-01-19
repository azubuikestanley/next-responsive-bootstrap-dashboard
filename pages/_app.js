import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Script from "next/script"
import Layout from "../components/layout/Layout";
import React, { useReducer } from "react";

export const ToggleContext = React.createContext();

const initialState = false;
const reducer = (state, action) => {
  switch (action) {
    case "toggle":
      return !state;
    default:
      return state;
  }
};


function MyApp({ Component, pageProps }) {
  const [toggleSidebar, dispatch] = useReducer(reducer, initialState);
  
  return (
    <ToggleContext.Provider
      value={{ toggleState: toggleSidebar, toggleDispatch: dispatch }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
      <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></Script>
    </ToggleContext.Provider>
  ) 
}

export default MyApp;
