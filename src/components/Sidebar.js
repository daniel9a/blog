import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Input
} from 'reactstrap'

import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = ({ author, authorFluid }) => (
  <div>
    {author && (
      <Card>
        <Img className="card-image-top" fluid={authorFluid} />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            {author.name}
          </CardTitle>
          <CardText>{author.bio}</CardText>
          <div className="author-social-links text-center">
            <ul>
              <li>
                <a
                  href={author.github}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="github"
                >
                  <i className="fab fa-github fa-lg" />
                </a>
              </li>
              <li>
                <a
                  href={author.google}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="google"
                >
                  <i className="fab fa-google fa-lg" />
                </a>
              </li>
              <li>
                <a
                  href={author.linkedin}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin fa-lg" />
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    )}
    {/* Newsletter signup */}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your email address.."
            />
          </FormGroup>
          <button className="btn btn-success text-uppercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    {/* Advertisement */}
    {/* <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: '100%' }}
        />
      </CardBody>
    </Card> */}

    {/* Tags */}

    {/* Recent Posts */}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Posts
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div className="post-list">
              <ul>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <li>
                    <Link to={node.fields.slug}>
                      {node.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
