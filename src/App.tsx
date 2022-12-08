import Post from "components/Post";
import ThemeContextWrapper from "context/ThemeContextWrapper";
import Header from "layouts/Header";

function App() {
  return (
    <ThemeContextWrapper>
      <div className="dark:bg-dark-800 bg-light-100 min-h-screen">
        <Header />
        <Post />
      </div>
    </ThemeContextWrapper>
  );
}

export default App;
