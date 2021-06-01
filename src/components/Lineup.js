import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Wayne from '../images/wayne.jpg'
import Migos from '../images/migos.jpg'
import Gotti from '../images/gotti.jpg'
import Money from '../images/moneybagg.jpg'
export default function Footer() {
  return (
    <div className="row no gutters">
      <div className="col-lg-6 padding-0">
        <img src={Wayne} class="img-fluid" />
      </div>
      <div className="col-lg-6 padding-0">
        <img src={Gotti} class="img-fluid" />
      </div>
      <div className="col-lg-6 padding-0">
        <img src={Money} class="img-fluid" />
      </div>
      <div className="col-lg-6 padding-0">
        <img src={Migos} class="img-fluid" />
      </div>
    </div>
  )
}
