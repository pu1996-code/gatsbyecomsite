import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection";
import InfoBlock from "../components/Reuseable/InfoBlock";
import Contact from "../components/Contact/Contact"
const ContactPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="Contact Us"
    subtitle=""
    heroclass="about-background"
    />    
    <InfoBlock heading="How can we help?"/>
    <Contact/>
  </Layout>
)

export const quesry = graphql `
{
  img: file(relativePath: {eq: "contact.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default ContactPage
