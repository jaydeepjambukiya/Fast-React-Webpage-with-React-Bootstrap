import Header from "./components/Header";
import Carosel from "./components/Carosel";
import { Service } from "./components/Service";
import ContectAs from "./components/ContectAs";
import Footer from "./components/Footer";

function App(){
  
  return (
    <>
      <Header />
      <Carosel />
        <div className="container">
          <div className="row text-center mt-5 mb-5"> 
            <h2>Our Services</h2>
            <p>Our company offers a wide range of services to meet your needs.</p>
            <div className="row ">
              <div className="col ">
                <Service />
              </div>
              <div className="col">
                <Service />
              </div>
              <div className="col">
                <Service />
              </div>
            </div>
          </div>
        </div>
      <ContectAs />
      <Footer />
   </>
  )
}

export default App;