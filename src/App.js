import "./App.css";

import Signin from "./pages/signin";
import Header from "./components/Header/Header.components";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Signin />
      </div>
      <div id="footer">
        <footer> &#169; 2022, made with ❤️ by, iComply.Tech</footer>
      </div>
    </div>
  );
}

export default App;
