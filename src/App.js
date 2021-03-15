import { Switch, Route } from "react-router";
import "./App.css";
import SearchField from "./components/searchField/SearchField";
import UserPhotos from "./pages/UserPhotos";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={SearchField} />
      <Route path="/user/:username" exact component={UserPhotos} />
    </Switch>
  );
}

export default App;
