import React, { Component } from 'react'
import Slider from 'react-slick'
import Particles from 'react-particles-js'
import Countdown from '../components/Countdown'
import Scroll from '../components/Scroll'
import Social from '../components/Social'
import Lineup from '../components/Lineup'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Img from 'gatsby-image'

function Image() {
  const data = useStaticQuery(graphql`
    query {
      manofstlpic: file(relativePath: { eq: "manofstl-web.png" }) {
        childImageSharp {
          fluid(quality: 100) {
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

export default class Intro extends Component {
  render() {
    const sliderSettings = {
      dots: false,
      fade: false,
      arrows: false,
      autoplay: false,
    }
    return (
      <div>
        <header className="masthead">
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

          <div className="container h-100">
            <div className="row h-100 ">
              <div className="col my-auto">
                <div className="header-content mx-auto">
                  <Image />
                  <Countdown />

                  <Scroll type="id" element="download">
                    <a href="#download" className="btn btn-outline btn-xl">
                      Start Now for Free!
                    </a>
                  </Scroll>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="features" id="features">
          <Lineup />
        </div>
        <section className="cta">
          <div className="cta-content">
            <div className="container">
              <h2>
                Hotel
                <br />
                Accomedations
              </h2>
              <Scroll type="id" element="contact">
                <a href="#contact" className="btn btn-outline btn-xl">
                  Book Now!
                </a>
              </Scroll>
            </div>
          </div>
          <div className="overlay"></div>
        </section>

        <section className="contact bg-primary" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h2 className="section-heading">
                  Discover what all the buzz is about!
                </h2>
                <p>
                  Our app is available on any mobile device! Download now to get
                  started!
                </p>
                <div className="badges">
                  <a className="badge-link" href="/#"></a>
                  <a className="badge-link" href="/#"></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="cta-content">
            <div className="container">
              <h2>
                Hotel
                <br />
                Accomedations
              </h2>
              <Scroll type="id" element="contact">
                <a href="#contact" className="btn btn-outline btn-xl">
                  Book Now!
                </a>
              </Scroll>
            </div>
          </div>
          <div className="overlay"></div>
        </section>
        <section className="contact bg-primary" id="contact">
          <div className="container">
            <Social />
          </div>
        </section>
      </div>
    )
  }
}
