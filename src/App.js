import './App.css'
import PreLoading from "./common/PreLoading";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {


  return (

    <>
      {/* loading */}
      <PreLoading/>


      {/* app jsx */}
      <div className="App">
        <h1>salom</h1>
        <Header/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
