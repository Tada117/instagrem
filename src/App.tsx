import Post from "components/Post";
import ThemeContextWrapper from "context/ThemeContextWrapper";
import Header from "layouts/Header";

import Navigation from "layouts/Navigation";
import HomePage from "pages/Home";

function App() {
  return (
    <ThemeContextWrapper>
      <div className="min-h-screen bg-light-100 dark:bg-dark-800">
        <Header />
        <Post />
      </div>
    </ThemeContextWrapper>
  );
}

export default App;
