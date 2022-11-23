import Header from "./components//header/header";
import Rsvpmobile from "./components/rsvpmobile/rsvpmobile";
import Info from "./components/info/info";
import Location from "./components/location/location";
import Stay from "./components/stay/stay";

import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Rsvpmobile></Rsvpmobile>
      <Info></Info>
      <Location></Location>
      <Stay></Stay>
      <Footer></Footer>
    </div>
  );
}

export default App;
