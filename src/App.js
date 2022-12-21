import "./App.css";
import GallaryFooter from "./components/GallaryFooter";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Header></Header>

      <Content></Content>
      {/* adding footer component */}
      <GallaryFooter />
    </div>
  );
}

export default App;
