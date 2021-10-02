import "./App.css";
import MainPage from "./screens/MainPage";
import { Route, Switch, useLocation } from "react-router-dom";
import QuestionPage from "./screens/QuestionPage";
import { AnimatePresence } from "framer-motion";
import { createStore } from "redux";
import { Provider } from "react-redux";

const INCREASE = "INCREASE";

const initialStore = {
  score: 0,
};

function reducer(state, action) {
  if (action.type === INCREASE) {
    return { ...state, score: state.score + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, score: 0 };
  }
  return state;
}

const store = createStore(reducer, initialStore);

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" component={MainPage} exact />
          <Route path="/question/:id" component={QuestionPage} />
        </Switch>
      </AnimatePresence>
    </Provider>
  );
}

export default App;
