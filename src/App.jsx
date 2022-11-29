// import "./App.css";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import { useAppContext } from "./context";

function App() {
  const context = useAppContext();
  const loading = context.loading;
  const meals = context.meals;

  return (
    <div
      className={
        loading || meals.length == 0
          ? "w-screen h-screen dark:text-white dark:bg-black"
          : "dark:text-white dark:bg-black"
      }
    >
      <Helmet>
        <title>Meals App</title>
      </Helmet>
      <Navbar />
      <br />

      {/* <Favorites /> */}
      <Meals />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
