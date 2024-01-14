import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Main1() {
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobs, setjobs] = useState([]);

  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    async function getExpressData() {
      const url = "http://localhost:5000/categories";
      const url1 = "http://localhost:5000/cities";
      const url2 = "http://localhost:5000/jobs/";

      await axios(url)
        .then(function (response) {
          setCategories(response.data);
          setIsUser(true);
        })
        .catch(function (error) {
          console.log(error);
        });

      await axios(url1)
        .then(function (response) {
          setCities(response.data);
          setIsUser(true);
        })
        .catch(function (error) {
          console.log(error);
        });

      await axios(url2)
        .then(function (response) {
          setjobs(response.data);
          setIsUser(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getExpressData();
  }, [isUser]);

  return (
    <div id="bg">
      {/* <div id="loading-area"></div> */}
      <div class="page-wraper">
        {/* <!-- header --> */}
        <header class="site-header mo-left header fullwidth">
          {/* <!-- main header --> */}
          <div class="sticky-header main-bar-wraper navbar-expand-lg ">
            <div class="main-bar clearfix">
              <div
                class="container clearfix"
                style={{ color: "blue", opacity: "100%" }}
              >
                {/* <!-- website logo --> */}
                <div class="logo-header mostion">
                  <a href="index-2.html">
                    <img src="images/logo.png" class="logo" alt="" />
                  </a>
                </div>
                {/* <!-- nav toggle button --> */}
                {/* <!-- nav toggle button --> */}
                <button
                  class="navbar-toggler navicon justify-content-end"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                {/* <!-- extra nav --> */}
                <div class="extra-nav">
                  <div class="extra-cell">
                    <a href="/signup" class="site-button">
                      <i class="fa fa-user"></i> Sign Up
                    </a>
                    <a href="/login" class="site-button">
                      <i class="fa fa-lock"></i> login
                    </a>
                  </div>
                </div>
                {/* <!-- Quik search --> */}
                <div class="dez-quik-search bg-primary">
                  <form action="#">
                    <input
                      name="search"
                      value=""
                      type="text"
                      class="form-control"
                      placeholder="Type to search"
                    />
                    <span id="quik-search-remove">
                      <i class="flaticon-close"></i>
                    </span>
                  </form>
                </div>
                {/* <!-- main nav --> */}
                <div class="header-nav justify-content-start" id="">
                  <ul class="nav navbar-nav">
                    <li class="active">
                      <a href="/main">
                        Home <i class="fa fa-chevron-down"></i>
                      </a>
                      {/* <ul class="sub-menu">
									<li><a href="index-2.html" class="dez-page">Home 1</a></li>
									<li><a href="index-3.html" class="dez-page">Home 2</a></li>
								</ul> */}
                    </li>
                    <li>
                      <a href="/main">
                        For Candidates <i class="fa fa-chevron-down"></i>
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="/searchjob" class="dez-page">
                            Browse Job
                          </a>
                        </li>
                        <li>
                          <a href="/jobdetail" class="dez-page">
                            Job Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/main">
                        For Employers <i class="fa fa-chevron-down"></i>
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="/submitresume" class="dez-page">
                            Submit Resume
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="/main">
                        Pages <i class="fa fa-chevron-down"></i>
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="/about" class="dez-page">
                            About Us
                          </a>
                        </li>
                        {/* <li><a href="coming-soon.html" class="dez-page">Coming Soon</a></li>
									<li><a href="error-404.html" class="dez-page">Error 404</a></li>
									<li><a href="#" class="dez-page">Portfolio</a>
										<ul class="sub-menu">
											<li><a href="portfolio-grid-2.html" class="dez-page">Portfolio Grid 2 </a></li>
											<li><a href="portfolio-grid-3.html" class="dez-page">Portfolio Grid 3 </a></li>
											<li><a href="portfolio-grid-4.html" class="dez-page">Portfolio Grid 4 </a></li>
										</ul>
									</li> */}
                        <li>
                          <a href="/login" class="dez-page">
                            Login
                          </a>
                        </li>
                        <li>
                          <a href="/signup" class="dez-page">
                            Register
                          </a>
                        </li>
                        <li>
                          <a href="/contact" class="dez-page">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/main">
                        Blog <i class="fa fa-chevron-down"></i>
                      </a>
                      {/* <ul class="sub-menu">
									<li><a href="blog-classic.html" class="dez-page">Classic</a></li>
									<li><a href="blog-classic-sidebar.html" class="dez-page">Classic Sidebar</a></li>
									<li><a href="blog-detailed-grid.html" class="dez-page">Detailed Grid</a></li>
									<li><a href="blog-detailed-grid-sidebar.html" class="dez-page">Detailed Grid Sidebar</a></li>
									<li><a href="blog-left-img.html" class="dez-page">Left Image Sidebar</a></li>
									<li><a href="blog-details.html" class="dez-page">Blog Details</a></li>
								</ul> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main header END --> */}
        </header>
        {/* <!-- header END --> */}
        {/* <!-- Content --> */}
        <div class="page-content">
          {/* <!-- Section Banner --> */}
          <div
            class="dez-bnr-inr dez-bnr-inr-md"
            style={{ backgroundImage: "url(images/main-slider/slide2.jpg)" }}
          >
            <div class="container">
              <div class="dez-bnr-inr-entry align-m ">
                <div class="find-job-bx">
                  <p class="site-button button-sm">
                    Find Jobs, Employment & Career Opportunities
                  </p>
                  <h2>
                    Search Between More Them <br />{" "}
                    <span class="text-primary">50,000</span> Open Jobs.
                  </h2>
                  <form class="dezPlaceAni">
                    <div class="row">
                      <div class="col-lg-4 col-md-6">
                        <div class="form-group">
                          <label>Job Title, Keywords, or Phrase</label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                            <div class="input-group-append">
                              <span class="input-group-text">
                                <i class="fa fa-search"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6">
                        <div class="form-group">
                          <label>City, State or ZIP</label>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                            <div class="input-group-append">
                              <span class="input-group-text">
                                <i class="fa fa-map-marker"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6">
                        <div class="form-group">
                          <select>
                            <option>Select Sector</option>
                            <option>Construction</option>
                            <option>Corodinator</option>
                            <option>Employer</option>
                            <option>Financial Career</option>
                            <option>Information Technology</option>
                            <option>Marketing</option>
                            <option>Quality check</option>
                            <option>Real Estate</option>
                            <option>Sales</option>
                            <option>Supporting</option>
                            <option>Teaching</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-2 col-md-6">
                        <button type="submit" class="bg-blue-500 w-40 h-12 rounded hover:bg-orange-400">
                          Find Job
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Section Banner END --> */}
          {/* <!-- About Us --> */}
          <div
            class="section-full job-categories content-inner-2 bg-white"
            style={{ backgroundImage: "url(../images/pattern/pic1.html)" }}
          >
            <div class="container">
              <div class="section-head d-flex head-counter clearfix">
                <div class="mr-auto">
                  <h2 class="m-b5">Popular Categories</h2>
                  <h6 class="fw3">20+ Catetories work wating for you</h6>
                </div>
                <div class="head-counter-bx">
                  <h2 class="m-b5 counter">1800</h2>
                  <h6 class="fw3">Jobs Posted</h6>
                </div>
                <div class="head-counter-bx">
                  <h2 class="m-b5 counter">4500</h2>
                  <h6 class="fw3">Tasks Posted</h6>
                </div>
                <div class="head-counter-bx">
                  <h2 class="m-b5 counter">1500</h2>
                  <h6 class="fw3">Freelancers</h6>
                </div>
              </div>
              <div class="row sp20">
                {categories.map(function (data) {
                  return (
                    <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="icon-bx-wraper">
                        <div class="icon-content">
                          <div class="icon-md text-primary m-b20">
                            <i class="ti-location-pin"></i>
                          </div>
                          <a href="#" class="dez-tilte">
                            {data.Title}
                          </a>
                          <p class="m-a0">198 Open Positions</p>
                          <div class="rotate-icon">
                            <i class="ti-location-pin"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div class="col-lg-12 text-center m-t30">
                  <button class="site-button radius-xl">All Categories</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- About Us END --> */}
          {/* <!-- Call To Action --> */}
          <div class="section-full content-inner bg-gray">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 section-head text-center">
                  <h2 class="m-b5">Featured Cities</h2>
                  <h6 class="fw4 m-b0">20+ Featured Cities Added Jobs</h6>
                </div>
              </div>
              <div class="row">
                {cities.map(function (data) {
                  return (
                    <div class="col-lg-3 col-sm-6 col-md-6 m-b30">
                      <div
                        class="city-bx align-items-end  d-flex"
                        style={{ backgroundImage: "url(images/city/pic1.jpg)" }}
                      >
                        <div class="city-info">
                          <h5>{data.Name}</h5>
                          <span>{data.Job}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* <!-- Call To Action END --> */}
          {/* <!-- Our Job --> */}
          <div class="section-full bg-white content-inner-2">
            <div class="container">
              <div class="d-flex job-title-bx section-head">
                <div class="mr-auto">
                  <h2 class="m-b5">Recent Jobs</h2>
                  <h6 class="fw4 m-b0">20+ Recently Added Jobs</h6>
                </div>
                <div class="align-self-end">
                  <a href="#" class="site-button button-sm">
                    Browse All Jobs <i class="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-9">
                  <ul class="post-job-bx">
                    {jobs.map(function (data) {
                      return (
                        <li>
                          <a href="#">
                            <div class="d-flex m-b30">
                              <div class="job-post-company">
                                <span>
                                  <img src="images/logo/icon1.png" />
                                </span>
                              </div>
                              <div class="job-post-info">
                                <h4>{data.JobName}</h4>
                                <ul>
                                  <li>
                                    <i class="fa fa-map-marker"></i>{" "}
                                    {data.JobLoc}
                                  </li>
                                  <li>
                                    <i class="fa fa-bookmark-o"></i>{" "}
                                    {data.JobTime}
                                  </li>
                                  <li>
                                    <i class="fa fa-clock-o"></i>{" "}
                                    {data.Published}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="job-time mr-auto">
                                <span>{data.JobTime}</span>
                              </div>
                              <div class="salary-bx">
                                <span>{data.Salary}</span>
                              </div>
                            </div>
                            <span class="post-like fa fa-heart-o"></span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <div class="m-t30">
                    <div class="d-flex">
                      <a class="site-button button-sm mr-auto" href="#">
                        <i class="ti-arrow-left"></i> Prev
                      </a>
                      <a class="site-button button-sm" href="#">
                        Next <i class="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="sticky-top">
                    <div class="candidates-are-sys m-b30">
                      <div class="candidates-bx">
                        <div class="testimonial-pic radius">
                          <img
                            src="images/testimonials/pic3.jpg"
                            alt=""
                            width="100"
                            height="100"
                          />
                        </div>
                        <div class="testimonial-text">
                          <p>
                            I just got a job that I applied for via careerfy! I
                            used the site all the time during my job hunt.
                          </p>
                        </div>
                        <div class="testimonial-detail">
                          {" "}
                          <strong class="testimonial-name">
                            Richard Anderson
                          </strong>{" "}
                          <span class="testimonial-position">Nevada, USA</span>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="quote-bx">
                      <div class="quote-info">
                        <h4>Make a Difference with Your Online Resume!</h4>
                        <p>
                          Your resume in minutes with JobBoard resume assistant
                          is ready!
                        </p>
                        <a href="#" class="site-button">
                          Create an Account
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Our Job END -->	 */}
          {/* <!-- Call To Action --> */}
          <div
            class="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix"
            style={{ backgroundImage: "url(images/background/bg4.jpg)" }}
          >
            <div class="container">
              <div class="section-head text-center text-white">
                <h2 class="m-b5">Testimonials</h2>
                <h5 class="fw4">Few words from candidates</h5>
              </div>
              <div class="blog-carousel-center owl-carousel owl-none">
                <div class="item">
                  <div class="testimonial-5">
                    <div class="testimonial-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry...
                      </p>
                    </div>
                    <div class="testimonial-detail clearfix">
                      <div class="testimonial-pic radius shadow">
                        <img
                          src="images/testimonials/pic1.jpg"
                          width="100"
                          height="100"
                          alt=""
                        />
                      </div>
                      <strong class="testimonial-name">David Matin</strong>
                      <span class="testimonial-position">Student</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimonial-5">
                    <div class="testimonial-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry...
                      </p>
                    </div>
                    <div class="testimonial-detail clearfix">
                      <div class="testimonial-pic radius shadow">
                        <img
                          src="images/testimonials/pic2.jpg"
                          width="100"
                          height="100"
                          alt=""
                        />
                      </div>
                      <strong class="testimonial-name">David Matin</strong>
                      <span class="testimonial-position">Student</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="testimonial-5">
                    <div class="testimonial-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry...
                      </p>
                    </div>
                    <div class="testimonial-detail clearfix">
                      <div class="testimonial-pic radius shadow">
                        <img
                          src="images/testimonials/pic3.jpg"
                          width="100"
                          height="100"
                          alt=""
                        />
                      </div>
                      <strong class="testimonial-name">David Matin</strong>
                      <span class="testimonial-position">Student</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Call To Action END --> */}
          {/* <!-- Our Latest Blog --> */}
          <div
            class="section-full content-inner-2 overlay-white-middle"
            style={{
              backgroundImage: "url(images/lines.png)",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
            }}
          >
            <div class="container">
              <div class="section-head text-black text-center">
                <h2 class="m-b0">Membership Plans</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </div>
              {/* <!-- Pricing table-1 Columns 3 with gap --> */}
              <div class="section-content box-sort-in button-example m-t80">
                <div class="pricingtable-row">
                  <div class="row max-w1000 m-auto">
                    <div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
                      <div class="pricingtable-wrapper style2 bg-white">
                        <div class="pricingtable-inner">
                          <div class="pricingtable-price">
                            <h4 class="font-weight-300 m-t10 m-b0">Basic</h4>
                            <div class="pricingtable-bx">
                              <span>Free</span>
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet adipiscing elit sed do
                            eiusmod tempors labore et dolore magna siad enim
                            aliqua
                          </p>
                          <div class="m-t20">
                            <a href="#" class="site-button radius-xl">
                              <span class="p-lr30">Sign Up</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
                      <div class="pricingtable-wrapper style2 bg-primary text-white active">
                        <div class="pricingtable-inner">
                          <div class="pricingtable-price">
                            <h4 class="font-weight-300 m-t10 m-b0">
                              Professional
                            </h4>
                            <div class="pricingtable-bx">
                              {" "}
                              $ <span>29</span> / Per Installation{" "}
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet adipiscing elit sed do
                            eiusmod tempors labore et dolore magna siad enim
                            aliqua
                          </p>
                          <div class="m-t20">
                            <a href="#" class="site-button white radius-xl">
                              <span class="p-lr30">Sign Up</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4 p-lr0">
                      <div class="pricingtable-wrapper style2 bg-white">
                        <div class="pricingtable-inner">
                          <div class="pricingtable-price">
                            <h4 class="font-weight-300 m-t10 m-b0">Extended</h4>
                            <div class="pricingtable-bx">
                              {" "}
                              $ <span>29</span> / Per Installation{" "}
                            </div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet adipiscing elit sed do
                            eiusmod tempors labore et dolore magna siad enim
                            aliqua
                          </p>
                          <div class="m-t20">
                            <a href="#" class="site-button radius-xl">
                              <span class="p-lr30">Sign Up</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Our Latest Blog --> */}
        </div>
        {/* <!-- Footer --> */}
        <footer class="site-footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-xl-5 col-lg-4 col-md-12 col-sm-12">
                  <div class="widget">
                    <img
                      src="images/logo-white.png"
                      width="180"
                      class="m-b15"
                      alt=""
                    />
                    <p class="text-capitalize m-b20">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry has been the industry's standard
                      dummy text ever since the..
                    </p>
                    <div class="subscribe-form m-b20">
                      <form
                        class="dzSubscribe"
                        action="http://job-board.w3itexperts.com/xhtml/script/mailchamp.php"
                        method="post"
                      >
                        <div class="dzSubscribeMsg"></div>
                        <div class="input-group">
                          <input
                            name="dzEmail"
                            required="required"
                            class="form-control"
                            placeholder="Your Email Id"
                            type="email"
                          />
                          <span class="input-group-btn">
                            <button
                              name="submit"
                              value="Submit"
                              type="submit"
                              class="site-button radius-xl"
                            >
                              Subscribe
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                    <ul class="list-inline m-a0">
                      <li>
                        <a href="#" class="site-button white facebook circle ">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="site-button white google-plus circle "
                        >
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="site-button white linkedin circle ">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="site-button white instagram circle ">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="site-button white twitter circle ">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-8 col-sm-8 col-12">
                  <div class="widget border-0">
                    <h5 class="m-b30 text-white">Frequently Asked Questions</h5>
                    <ul class="list-2 list-line">
                      <li>
                        <a href="#">Privacy & Seurty</a>
                      </li>
                      <li>
                        <a href="#">Terms of Serice</a>
                      </li>
                      <li>
                        <a href="#">Communications</a>
                      </li>
                      <li>
                        <a href="#">Referral Terms</a>
                      </li>
                      <li>
                        <a href="#">Lending Licnses</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">How It Works</a>
                      </li>
                      <li>
                        <a href="#">For Employers</a>
                      </li>
                      <li>
                        <a href="#">Underwriting</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Lending Licnses</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
                  <div class="widget border-0">
                    <h5 class="m-b30 text-white">Find Jobs</h5>
                    <ul class="list-2 w10 list-line">
                      <li>
                        <a href="#">US Jobs</a>
                      </li>
                      <li>
                        <a href="#">Canada Jobs</a>
                      </li>
                      <li>
                        <a href="#">UK Jobs</a>
                      </li>
                      <li>
                        <a href="#">Emplois en Fnce</a>
                      </li>
                      <li>
                        <a href="#">Jobs in Deuts</a>
                      </li>
                      <li>
                        <a href="#">Vacatures China</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- footer bottom part --> */}
          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <span>
                    <a target="_blank" href="https://www.templateshub.net">
                      Templates Hub
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- Footer END --> */}
        {/* <!-- scroll top button --> */}
        <button class="scroltop fa fa-arrow-up"></button>
      </div>
      {/* <!-- JAVASCRIPT FILES ========================================= -->
<script src="js/jquery.min.js"></script><!-- JQUERY.MIN JS -->
<script src="plugins/wow/wow.js"></script><!-- WOW JS -->
<script src="plugins/bootstrap/js/popper.min.js"></script><!-- BOOTSTRAP.MIN JS -->
<script src="plugins/bootstrap/js/bootstrap.min.js"></script><!-- BOOTSTRAP.MIN JS -->
<script src="plugins/bootstrap-select/bootstrap-select.min.js"></script><!-- FORM JS -->
<script src="plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.js"></script><!-- FORM JS -->
<script src="plugins/magnific-popup/magnific-popup.js"></script><!-- MAGNIFIC POPUP JS -->
<script src="plugins/counter/waypoints-min.js"></script><!-- WAYPOINTS JS -->
<script src="plugins/counter/counterup.min.js"></script><!-- COUNTERUP JS -->
<script src="plugins/imagesloaded/imagesloaded.js"></script><!-- IMAGESLOADED -->
<script src="plugins/masonry/masonry-3.1.4.js"></script><!-- MASONRY -->
<script src="plugins/masonry/masonry.filter.js"></script><!-- MASONRY -->
<script src="plugins/owl-carousel/owl.carousel.js"></script><!-- OWL SLIDER -->
<script src="plugins/rangeslider/rangeslider.js" ></script><!-- Rangeslider -->
<script src="js/custom.js"></script><!-- CUSTOM FUCTIONS  -->
<script src="js/dz.carousel.js"></script><!-- SORTCODE FUCTIONS  -->
<script src='js/recaptcha/api.js'></script> <!-- Google API For Recaptcha  -->
<script src="js/dz.ajax.js"></script><!-- CONTACT JS  -->
<script src="plugins/paroller/skrollr.min.js"></script><!-- PAROLLER -->
<!-- Go to www.addthis.com/dashboard to customize your tools -->  */}
    </div>
  );
}
