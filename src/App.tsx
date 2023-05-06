import Prettier from "./Components/Prettier";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="top-ad"></div>
      <Prettier />
      <div className="footer-ad"></div>
      <Footer />
    </div>
  );
}

export default App;
