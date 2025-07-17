import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../sanityClient';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BlogSection = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Blog</h2>
      <Row>
        {posts &&
          posts.map((post) => (
            <Col md={4} className="mb-4" key={post.slug.current}>
              <Card className="h-100 blog-card">
                <Link to={'/blog/' + post.slug.current}>
                  <div className="text-center">
                    <Card.Img variant="top" src={post.mainImage.asset.url} alt={post.title} className="blog-thumbnail" />
                  </div>
                </Link>
                <Card.Body>
                  <Card.Title className="blog-title">{post.title}</Card.Title>
                  <Link to={'/blog/' + post.slug.current} className="btn btn-blog-readmore">Read More</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BlogSection;
