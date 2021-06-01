import React, { Component } from 'react'
import Slider from 'react-slick'
import Particles from 'react-particles-js'
import Countdown from './Countdown'

import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Img from 'gatsby-image'

function Image() {
  const data = useStaticQuery(graphql`
    query {
      manofstlpic: file(relativePath: { eq: "manofstl-web.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img
        fluid={data.manofstlpic.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}

function Intro({ data }) {
  const sliderSettings = {
    dots: false,
    fade: false,
    arrows: false,
    autoplay: false,
  }

  return (
    <section className="section section-hero section-hero-4 display-fit-screen">
      <Particles
        params={{
          particles: {
            number: {
              value: 90,
            },
            size: {
              value: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
        className="el-particles"
      />
      <Slider className="el-slider" {...sliderSettings}>
        <div className="slide">
          <div
            className="image overlay-image"
            style={{
              backgroundImage: `url(${'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80'})`,
            }}
          ></div>
        </div>
        <div className="slide">
          <div
            className="image overlay-image"
            style={{
              backgroundImage: `url(${'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80'})`,
            }}
          ></div>
        </div>
      </Slider>
      <div className="display-center">
        <Image />
        <Countdown />
      </div>
    </section>
  )
}

export default Intro
