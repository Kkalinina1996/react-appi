import Header from "./components/header";
import Post from "./components/post";
import PostForm from "./components/postForm";
import PostList from "./components/postList";
import "./App.css"; // обычный CSS, без "module"

function App () {
  return (
    <>
      <Header />
      <main className="main">
        <div className="wrapper">
          <PostList />
          <PostForm />
        </div>
      </main>
    </>
  );
};

export default App
