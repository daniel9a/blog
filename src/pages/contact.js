import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from '../components/Contact'
import { Card, CardBody } from 'reactstrap'

const ContactPage = () => (
  <Layout pageTitle="Contact Me">
    <SEO title="Contact" />
    <Card>
      <CardBody>
        <Contact />
      </CardBody>
    </Card>

  </Layout>
)

export default ContactPage
