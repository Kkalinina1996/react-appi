// App.jsx
import React from "react";
import Header from "./components/header";     
import Posts from "./components/post";
import PostList from "./components/postList";

function App() {
  return (
    <>
      <Header />
      <Posts />
      <PostList/>
    </>
  );
}

export default App;