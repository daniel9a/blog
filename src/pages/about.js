import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card, CardBody, CardSubtitle, CardHeader } from 'reactstrap'
// import Img from 'gatsby-image'
// import python from '../images/python.png'

const AboutPage = () => (
  <Layout pageTitle="About us">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Card>
      {/* <img className="card-img-top" src={python} /> */}
      <CardHeader><h1 className="text-center">About the Author</h1></CardHeader>
      <CardBody>
        <CardSubtitle><h3>About Me</h3></CardSubtitle>
        <p>
          I'm a Full-Time Software Engineer in San Mateo. I work with <b>C/C++, Python, & SQL</b> developing a healthcare delivery system.
          I was first introduced to coding in high school during a Learn to Code after school event. I then went into college and went to majored
          in Computer Science and Engineering at UC Davis.
        </p>
        <CardSubtitle><h3>Why Do I Blog?</h3></CardSubtitle>
        <div className="list">
          <p>I blog for a few reasons:</p>
          <ul>
            <li>Build my profile as a Developer</li>
            <li>Hope to help developers</li>
            <li>A place to keep notes and keep track of software development over time</li>
          </ul>
        </div>

      </CardBody>
    </Card>
  </Layout>
)

export default AboutPage
