import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="/static/index.css" />



  <title>The old new thing</title>
  <meta name="description" content="The old new thing">
  <meta name="author" content="Rawk">

<meta property="og:type" content="website" />
<meta property="og:title" content="The Old New Thing">
<meta property="og:description" content="The businesss card of today">
<meta property="og:image" content="https://devuniversity.github.io/dot/card.jpg">
<meta property="og:url" content="https://devuniversity.github.io/dot/">

<!-- twitter -->

<meta name="twitter:title" content="The Old New Thing">
<meta name="twitter:description" content="The businesss card of today">
<meta name="twitter:image" content="https://devuniversity.github.io/dot/card.jpg">
<meta name="twitter:card" content="summary_large_image">

<!-- fb analytics -->
<meta property="fb:app_id" content="your_app_id" />

<!-- twitter analytics -->
<meta name="twitter:site" content="@rawkthethinker">

<!-- fb site name -->
<meta property="og:site_name" content="The old new thing">

<!-- twitter alt name -->

<meta name="twitter:image:alt" content="The business card of today">


<meta name="og:image:alt" content="The business card of today">


<script async src="https://www.googletagmanager.com/gtag/js?id=UA-89414882-2">
</script>

<script src="/static/googleAnalytics.js"></script>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
