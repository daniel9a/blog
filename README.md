<h1 align="center">
  Gatsby Starter My Blog
</h1>

<p align="center">
  <a href="https://app.netlify.com/sites/sleepy-aryabhata-daee42/deploys">
    <img src="https://api.netlify.com/api/v1/badges/cbd05012-b4f9-44e9-854b-e59db1463335/deploy-status" alt="Netlify Status" />
  </a>
<a href="https://github.com/daniel9a/blog/blob/master/LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Gatsby Starter Blog: Blog is released under the MIT license." />
</a>
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs are welcomed" />
</p>

See the starter in action » https://sleepy-aryabhata-daee42.netlify.com/ 

## 🔎 Description

A [GatsbyJS](https://www.gatsbyjs.org/) starter Blog

## ✨ Features

- [Gatsby v2](https://www.gatsbyjs.org/)
- [Netlify CMS](https://www.netlifycms.org/) for Content Management
- [Netlify](https://www.netlify.com) Deployment Friendly
- [Scss](https://sass-lang.com/) and [Styled-Components](https://styled-components.com/) for styling
- Icons from [font-awesome](https://fontawesome.com/)
- [Algolia](https://www.algolia.com/) for search
- Pagination
- Dark/Light mode
- [PrismJS](https://prismjs.com) for code highlighting
- Tags for Blog

## ⚠️ Prerequisites

If you do not have Gatsby Cli installed yet, do it first.

```text
npm install --global gatsby-cli
```

More information on [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one)

## 🚀 Getting Started

Install the starter using Gatsby Cli `gatsby new` command.

```text
gatsby new [NEW_SITE_DIRECTORY_FOR_YOUR_BLOG] https://github.com/daniel9a/blog
```

#### Setting up Algolia

- Sign up for [Algolia](https://www.algolia.com/).
- Create a .env file and setup these variables. (I recommend a `.env.production` and `.env.development` file.) Or you can look at [env.production.EXAMPLE](https://github.com/daniel9a/blog/blob/master/env.production.EXAMPLE) for an example.

```text
GATSBY_ALGOLIA_APP_ID=XXX
GATSBY_ALGOLIA_ADMIN_KEY=XXX
GATSBY_ALGOLIA_INDEX_NAME=XXX
GATSBY_ALGOLIA_API_KEY=XXX
```

- Grab your API keys from Algolia and place them accordingly for the variables
- Pick an tndex name you wish to call it for GATSBY_ALGOLIA_INDEX_NAME (I have mine as <em>Gatsby-Blog</em>)

When deploying to Netlify with Algolia you need to go to your website then **Site Settings > Build & Deploy > Environment** and add your environment variables here with the same variable name.

#### Running Wesbite

Go into the newly created directory and run

```text
gatsby build
```

then to hot-serve your website on http://localhost:8000

```text
gatsby develop
```


## 😎 Contributing

- Fork the repo
- Create your feature branch (git checkout -b feature/fooBar)
- Commit your changes (git commit -am 'Add some fooBar')
- Push to the branch (git push origin feature/fooBar)
- Create a new Pull Request


## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/daniel9a/blog)

<!-- AUTO-GENERATED-CONTENT:END -->
