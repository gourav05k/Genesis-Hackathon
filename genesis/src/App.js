import React from 'react';
import './App.css';
import ItemList from './components/ItemList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My React Flask App</h1>
            </header>
            <ItemList />
        </div>
    );
}

export default App;