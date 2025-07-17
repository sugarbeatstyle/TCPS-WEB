import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../sanityClient';
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react';

const Post = () => {
  const [post, setPost] = useState<any>(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <img src={post.mainImage.asset.url} alt={post.title} />
      <BlockContent blocks={post.body} projectId="eheqd7ml" dataset="production" />
    </article>
  );
};

export default Post;
