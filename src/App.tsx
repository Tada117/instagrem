import Post from "components/Post";
import ThemeContextWrapper from "context/ThemeContextWrapper";

import Navigation from "layouts/Navigation";
import HomePage from "pages/Home";


function App() {
  return (
    <ThemeContextWrapper>

      <div className="min-h-screen bg-light-100 p-24 pl-32 dark:bg-dark-800">
        <Navigation />
        <HomePage />

      </div>
    </ThemeContextWrapper>
  );
}

export default App;
