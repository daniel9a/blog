import React from 'react'

import config from '../../config';

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center"><a href="/">{config.siteTitle}</a></h4>
    <p className="text-center">Follow me on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href={config.userGithub ? config.userGithub : "https://www.github.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </li>
        <li>
          <a
            href={config.userGooglePlus ? config.userGooglePlus : "https://www.google.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="google"
          >
            <i className="fab fa-google fa-2x" />
          </a>
        </li>
        <li>
          <a
            href={config.userLinkedIn ? config.userLinkedIn : "https://www.linkedin.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
        <li>
          <a
            href={config.userFaceBook ? config.userFaceBook :"https://www.facebook.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <i className="fab fa-facebook fa-2x" />
          </a>
        </li>
        <li>
          <a
            href={config.userInstragram ? config.userInstragram :"https://www.instagram.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </li>
        <li>
          <a
            href={config.userTwitter ? config.userTwitter :"https://www.twitter.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
      </ul>
    </div>
<p className="text-center">{config.copyright}</p>
  </div>
)

export default Footer
