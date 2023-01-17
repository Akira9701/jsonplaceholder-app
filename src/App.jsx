import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import Posts from "./pages/posts";
import SinglePost from "./pages/singlePost";
import EditPost from "./pages/editPost";
const App = () => {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="posts/edit/:id" element={<EditPost />} />


        </Route>
      </Routes>
    </>

  );
}
 
export default App;