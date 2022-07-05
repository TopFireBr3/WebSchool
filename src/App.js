import Home from "./pages/Home";
import "./styles/style.css"
import { ThemeGlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeGlobalStyle>
      <Home />
    </ThemeGlobalStyle>
  );
}

export default App;
