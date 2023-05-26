import "./App.css";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
};

export default App;
