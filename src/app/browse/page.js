"use client"

import { Provider } from "react-redux";
import store from "../utils/store";

import Browse from "../components/Browse";
import { MainContainer } from "../components/MainContainer";
import { SecondaryContainer } from "../components/SecondaryContainer";
const Page = () => {
  
  return (
    <Provider store={store}>
    <Browse></Browse>
    <MainContainer />
    <SecondaryContainer/>
 </Provider>
  );
};

export default Page;
