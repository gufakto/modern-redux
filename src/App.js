import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";
import FetchedTodo from "./components/FetchedTodo";

export default function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <FetchedTodo />
      </div>
    </Provider>
  );
}
