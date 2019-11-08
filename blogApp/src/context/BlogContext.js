import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      console.log(action.payload);
      return state.filter(item => item.id !== action.payload);
    case "get_blogposts":
      return action.payload;
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get("/blogposts");

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    // dispatch({ type: "add_blogpost", payload: { title, content, callback } });
    // callback();
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    // dispatch({ type: "delete_blogpost", payload: id });
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    //dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);

// import React, { useReducer } from "react";
// import createDataContext from "./createDataContext";
// const BlogContext = React.createContext();

// const blogReducer = (state, action) => {
//   switch (action.type) {
//     case "add_blogpost":
//       return [...state, { title: `My Blog number #${state.length + 1}` }];
//     default:
//       return state;
//   }
// };

// export const BlogProvider = ({ children }) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

//   const addBlogPost = () => {
//     dispatch({ type: "add_blogpost" });
//   };

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
