import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import useAppStore from "./stores/appStore";

import "./App.scss";
import { useSwipe } from "./hooks/gestures";

function App() {
  const { page, nextPage, previousPage } = useAppStore();

  function onSwipeRight() {
    previousPage();
  }
  function onSwipeLeft() {
    nextPage();
  }

  useSwipe({ onSwipeLeft, onSwipeRight });

  return (
    <div id="app">
      <Navbar />
      <div id="app-content">
        {page.id === "about" && <About />}
        {page.id === "work" && <Work />}
        {page.id === "projects" && <Projects />}
      </div>
    </div>
  );
}

export default App;
