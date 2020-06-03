import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it("render without crashes", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
})


