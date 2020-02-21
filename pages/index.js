import React from 'react';  
import "./index.css";
import Card from "./Card";
import data from '../data/data.json';

export default class Index extends React.Component {
    static async getInitialProps () {
        return {cards: data}
    }
    <div className="App">
        <header className="App-header">
            <img src="/static/logo.png" className="static-logo" alt="logo" />
        </header>
        <div className="Grid">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
};
