import Header from "./components//header/header";
import Rsvpmobile from "./components/rsvpmobile/rsvpmobile";
import Info from "./components/info/info";
import Venuesite from "./components/venuesite/venuesite";
import Stay from "./components/stay/stay";
// import Registry from "./components/registry/registry";

import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Rsvpmobile></Rsvpmobile>
      <Info></Info>
      <Venuesite></Venuesite>
      <Stay></Stay>
      {/* <Registry></Registry> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
