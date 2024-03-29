"use client"

import { Provider } from "react-redux";
import store from "../utils/store";

import Browse from "../components/Browse";
const Page = () => {
  
  return (
    <Provider store={store}>
    <Browse></Browse>
 </Provider>
  );
};

export default Page;
