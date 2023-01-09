import ThemeContextWrapper from "context/ThemeContextWrapper";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routes";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeContextWrapper>
        <div className="min-h-screen bg-bg-secondary p-4 pl-0">
          <AppRouter />
        </div>
      </ThemeContextWrapper>
    </BrowserRouter>
  );
}

export default App;
