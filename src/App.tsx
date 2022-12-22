import Post from "components/Post";
import ThemeContextWrapper from "context/ThemeContextWrapper";
import Navigation from "layouts/Navigation";
import HomePage from "pages/Home";

function App() {
  return (
    <ThemeContextWrapper>
      <div className="min-h-screen bg-bg-secondary p-4 pl-0">
        <Navigation />
        <HomePage />
      </div>
    </ThemeContextWrapper>
  );
}

export default App;
