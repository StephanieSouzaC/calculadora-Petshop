
import Form from "./components/Form/Form.js"
import Banner from "./components/Banner/Banner.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
        <Form/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
