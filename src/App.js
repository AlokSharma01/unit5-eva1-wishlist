
import './App.css';
import {Todos} from "./components/Todos"
import {Wishlist} from "./components/Wishlist"
import {Vegetables} from "./components/Vegetables"

function App() {
  return (
    <div className="App">
      <Wishlist/>
      <Vegetables/>
    </div>
  );
}

export default App;
