import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection";
import InfoBlock from "../components/Reuseable/InfoBlock";
import DualInfoBlock from "../components/Reuseable/DualInfoBlock";
import Teamphotosection from "../components/About/Teamphotosection";

const AboutPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="About learnCodeOnline"
    subtitle=""
    heroclass="about-background"
    />
    <DualInfoBlock heading='A Message From CEO'/>
    <InfoBlock heading="About Vision"></InfoBlock>
    <Teamphotosection></Teamphotosection>
  </Layout>
)

export const quesry = graphql `
{
  img: file(relativePath: {eq: "contact.png"}) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default AboutPage
