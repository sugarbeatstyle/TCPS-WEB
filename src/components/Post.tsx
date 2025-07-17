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
        `*[_type == "post" && slug.current == "${slug}"]{
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
      {post.mainImage && post.mainImage.asset && (
        <img src={post.mainImage.asset.url} alt={post.title} />
      )}
      {post.body && (
        <BlockContent
          blocks={post.body}
          projectId="eheqd7ml"
          dataset="production"
          serializers={{
            types: {
              block: (props: any) => {
                switch (props.node.style) {
                  case 'h1':
                    return <h1>{props.children}</h1>;
                  case 'h2':
                    return <h2>{props.children}</h2>;
                  case 'h3':
                    return <h3>{props.children}</h3>;
                  case 'h4':
                    return <h4>{props.children}</h4>;
                  case 'blockquote':
                    return <blockquote>{props.children}</blockquote>;
                  default:
                    return <p>{props.children}</p>;
                }
              },
            },
          }}
        />
      )}
    </article>
  );
};

export default Post;
