import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles/BlogPage.scss';
import BlogPost from './BlogPost';

interface PostObject {
  authorId: number | null;
  id: number;
  title: string;
  content: string;
  published: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<PostObject[]>([]);

  useEffect(() => {
    axios
      .get('/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const blogPosts = posts.map((post) => {
    return <BlogPost title={post.title} content={post.content} />;
  });

  return <div className='blog-page container'>{blogPosts}</div>;
}
