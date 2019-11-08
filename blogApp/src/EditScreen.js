import React, { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "./context/BlogContext";
import BlogPostForm from "./screens/components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find(item => item.id === id);

  return (
    <BlogPostForm
      intitialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.navigate("Index");
        });
      }}
    ></BlogPostForm>
  );
};

export default EditScreen;
