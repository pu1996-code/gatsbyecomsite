import * as React from "react"
import PropTypes from "prop-types"
import "./bootstrap.min.css";
import "./layout.css"
import Footer from "./Reuseable/Footer";
import Navbar from "./Reuseable/Navbar";

const  Layout = ({children}) =>(
  <>
  <Navbar/>
  {children}
  <Footer/>
  </>
)



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
