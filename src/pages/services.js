import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection";
import InfoBlock from "../components/Reuseable/InfoBlock";
import DualInfoBlock from "../components/Reuseable/DualInfoBlock";
import Courses from "../components/Services/Courses";

const AboutPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="Services learnCodeOnline"
    subtitle=""
    heroclass="about-background"
    />
    <DualInfoBlock heading='LCO brings you the latest courses on modern tech'/>
    {/* <InfoBlock heading="About Vision"></InfoBlock> */}
    <Courses/>
  </Layout>
)

export const quesry = graphql `
{
  img: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default AboutPage
