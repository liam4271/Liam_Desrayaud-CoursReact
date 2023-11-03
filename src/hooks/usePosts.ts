import { useEffect, useState } from "react";
import { fetchPosts } from "../services/Posts/api";
import { transformPost } from "../services/Posts/utiles";
import { Post } from "../models/Posts";

export const usePosts = () => {

    const [posts, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchPosts().then((result) =>{
      const transformed = result.products.map(transformPost);
      setPost(transformed);
      setLoading(false);
    })
  })

  return({ posts, loading, setPost, setLoading })
} 