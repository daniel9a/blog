import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card, CardBody, CardSubtitle, CardHeader } from 'reactstrap'

const AboutPage = () => (
  <Layout pageTitle="About us">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Card>
      <CardHeader><h1 className="text-center">About the Author</h1></CardHeader>
      <CardBody>
        <CardSubtitle><h3>About Me</h3></CardSubtitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.
        </p>
        <CardSubtitle><h3>Things I Like</h3></CardSubtitle>
        <div className="list">
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </li>
          </ul>
        </div>

      </CardBody>
    </Card>
  </Layout>
)

export default AboutPage
