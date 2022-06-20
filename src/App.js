import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function App() {
  return (
    <div className="white">
      <Header />
      <div className="row">
        <Main />
        <Basket />
      </div>
    </div>
  );
}

export default App;
