import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

type TKlogHelmetProps = {
  keyword?: string
  imageUrl?: string
  siteTitle?: string
  title?: string
  description?: string
  url: string
}

function SEO({
  siteTitle,
  title = "",
  imageUrl = "https://res.cloudinary.com/drmyhghgu/image/upload/v1615132086/blackbell_cjtjyk.png",
  description = "",
  keyword = "",
  url,
}: TKlogHelmetProps) {
  const {
    site: {
      siteMetadata: { siteUrl, title: defaultSiteTitle },
    },
  } = useStaticQuery(query)

  return (
    <Helmet title={siteTitle || defaultSiteTitle}>
      {/* Primary Meta Tags */}
      <title>{siteTitle || defaultSiteTitle}</title>
      <meta name="title" content={siteTitle || defaultSiteTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${url}`} />
      <meta property="og:title" content={title || defaultSiteTitle} />
      <meta property="og:site_name" content="Klog" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:keyword" content={keyword} />

      {/* Twitter */}
      <meta property="twitter:card" content={imageUrl} />
      <meta property="twitter:url" content="https://klog.gtsb.io/" />
      <meta property="twitter:title" content="Klog(blackbell)" />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
    </Helmet>
  )
}

export default SEO

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        author
        siteUrl
        title
      }
    }
  }
`
