import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import ScrollButton from "./ScrollButton"
import "../styles/index.scss"

import { Row, Col } from "reactstrap"

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        <div className="portal" id="portal">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="container" id="content">
            <h1>{pageTitle}</h1>
            <Row>
              <Col md="9">{children}</Col>
              <Col md="3">
                <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
              </Col>
            </Row>
            <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
          </div>

          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
