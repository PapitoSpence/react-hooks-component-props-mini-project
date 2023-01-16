import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

const{name, image, about, posts} = blogData;

function App() {
  console.log(blogData.posts);
  return (
    <div className="App">
     
      <Header name= {name}/>
      <About image={image} about= {about}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;