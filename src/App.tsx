import Post from "components/Post";
import ThemeContextWrapper from "context/ThemeContextWrapper";

function App() {
  return (
    <ThemeContextWrapper>
      <div className="min-h-screen bg-light-100 dark:bg-dark-800">
        <Post />
      </div>
    </ThemeContextWrapper>
  );
}

export default App;
