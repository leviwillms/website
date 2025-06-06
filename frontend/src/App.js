// App.js
import './styles/App.css';

function App() {
  return (
    <div className="window">
      <header className="App-header">
      </header>

      <div className="window-body">
        <p>Hello, world!</p>

        <menu role="tablist">
          <li role="tab" aria-selected="true"><a href="#tabs">About</a></li>
          <li role="tab"><a href="#tabs">Career</a></li>
          <li role="tab"><a href="#tabs">Interests</a></li>
          <li role="tab"><a href="#tabs">Blog</a></li>
        </menu>
        <div className="window" role="tabpanel">
          <div className="window-body">
            <p>the tab content</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
