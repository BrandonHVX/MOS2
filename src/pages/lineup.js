import React from 'react'

import Header from '../components/Header'
import Scroll from '../components/Scroll'
import Footer from '../components/Footer'
import Social from '../components/Social'

import demo1 from '../assets/images/poster.jpg'
import gplay from '../assets/images/google-play-badge.svg'
import astore from '../assets/images/app-store-badge.svg'

const IndexPage = () => (
  <div>
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5"></h1>
              <Scroll type="id" element="download">
                <a href="#download" className="btn btn-outline btn-xl">
                  BUY NOW!
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <h2 className="section-heading">CALIFORNIA 2021 LINEUP</h2>
        <img src={demo1} className="img-fluid" />
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">Buy tickets now</h2>
            <p>
              Our app is available on any mobile device! Download now to get
              started!
            </p>
            <div className="badges">
              <a className="badge-link" href="/#">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/#">
                <img src={astore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <p className="text-muted"></p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>CALIFORNIA 2021 LINEUP</h3>
                    <p className="text-muted"></p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>

                    <p className="text-muted"></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>

                    <p className="text-muted"></p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>

                    <p className="text-muted"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
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

    <Footer />
  </div>
)

export default IndexPage
