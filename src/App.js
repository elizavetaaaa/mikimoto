import './App.scss';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import store from "../src/redux/index"
import {Provider} from "react-redux";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;
