import "./App.css";
import MainPage from "./screens/MainPage";
import { Route, Switch, useLocation } from "react-router-dom";
import QuestionPage from "./screens/QuestionPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path="/" component={MainPage} exact />
        <Route path="/question/:id" component={QuestionPage} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
