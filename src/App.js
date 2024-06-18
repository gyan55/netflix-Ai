
import { Provider } from "react-redux";
import Hero from "../src/components/Hero"
import appStore from "./store/appStore";

function App() {
  return (
  <Provider store = {appStore}> <Hero/></Provider>
  );
}

export default App;
