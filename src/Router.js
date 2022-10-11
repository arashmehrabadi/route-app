import React from 'react'
import {Route , Routes} from "react-router-dom"
import Home from "./Components/Home";
import NewPost from "./Components/NewPost";
import PostPage from "./Components/PostPage"
import About from "./Components/About";
import Missing from "./Components/Missing";

const router = ({posts , handleDelete , postTitle ,setPostTitle , postBody , setPostBody , handleSubmite}) => {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Home posts={posts} />} />
        <Route exact path="/post" 
        element={<NewPost
            postTitle={postTitle}
            postBody={postBody}
            setPostBody={setPostBody}
            setPostTitle={setPostTitle}
            handleSubmite={handleSubmite}
        />} />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Missing/>}/>
      </Routes>
    </>
  )
}

export default router