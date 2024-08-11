import React, {createContext, useEffect, useState, useMemo} from 'react';
import {blogdata} from '../utils/blog';

const initialState = {
  blogs: [],
  loading: false,
};

const BlogContext = createContext(initialState);

const BlogProvider = ({children}) => {
  const [blogs, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setBlogData(blogdata);
    setLoading(false);
  }, []);

  const likeBlog = id => {
    const updatedBlogs = blogs.map(blog =>
      blog.id === id ? {...blog, likecount: blog.likecount + 1} : blog,
    );
    setBlogData(updatedBlogs);
  };

  const commentBlog = (id, comment) => {
    const updatedBlogs = blogs.map(blog =>
      blog.id === id
        ? {
            ...blog,
            comment: [...blog.comment, comment],
            commentcount: blog.commentcount + 1,
          }
        : blog,
    );
    setBlogData(updatedBlogs);
  };

  const getBlogById = id => {
    return blogs.find(blog => blog.id === id);
  }


  const value = useMemo(
    () => ({blogs, loading, likeBlog, commentBlog, getBlogById}),
    [blogs, loading],
  );
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export {BlogProvider, BlogContext};
