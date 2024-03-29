export default function JobDetail(){
    return(
        <>
        <div id="bg">
<div class="page-wraper">
{/* <div id="loading-area"></div> */}
	{/* <!-- header --> */}
    <header class="site-header mo-left header fullwidth">
		{/* <!-- main header --> */}
        <div class="sticky-header main-bar-wraper navbar-expand-lg">
            <div class="main-bar clearfix">
                <div class="container clearfix">
                    {/* <!-- website logo --> */}
                    <div class="logo-header mostion">
						<a href="index-2.html"><img src="images/logo.png" class="logo" alt=""/></a>
					</div>
                    {/* <!-- nav toggle button --> */}
                    {/* <!-- nav toggle button --> */}
                    <button class="navbar-toggler navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
                    {/* <!-- extra nav --> */}
                    <div class="extra-nav">
                        <div class="extra-cell">
                            <a href="/signup" class="site-button"><i class="fa fa-user"></i> Sign Up</a>
                            <a href="/login" class="site-button"><i class="fa fa-lock"></i> login</a>
                        </div>
                    </div>
                    {/* <!-- Quik search --> */}
                    <div class="dez-quik-search bg-primary">
                        <form action="#">
                            <input name="search" value="" type="text" class="form-control" placeholder="Type to search"/>
                            <span id="quik-search-remove"><i class="flaticon-close"></i></span>
                        </form>
                    </div>
                    {/* <!-- main nav --> */}
                    <div class="header-nav navbar-collapse justify-content-start" id="navbarNavDropdown">
                        <ul class="nav navbar-nav">
							<li class="active">
								<a href="/main">Home <i class="fa fa-chevron-down"></i></a>
								{/* <ul class="sub-menu">
									<li><a href="index-2.html" class="dez-page">Home 1</a></li>
									<li><a href="index-3.html" class="dez-page">Home 2</a></li>
								</ul> */}
							</li>
							<li>
								<a href="/main">For Candidates <i class="fa fa-chevron-down"></i></a>
								<ul class="sub-menu">
									<li><a href="/searchjob" class="dez-page">Browse Job</a></li>
									<li><a href="/jobdetail" class="dez-page">Job Detail</a></li>
								</ul>
							</li>
							<li>
								<a href="/main">For Employers <i class="fa fa-chevron-down"></i></a>
								<ul class="sub-menu">
									<li><a href="/submitresume" class="dez-page">Submit Resume</a></li>
								</ul>
							</li>
							<li>
								<a href="/main">Pages <i class="fa fa-chevron-down"></i></a>
								<ul class="sub-menu">
									<li><a href="/about" class="dez-page">About Us</a></li>
									{/* <li><a href="coming-soon.html" class="dez-page">Coming Soon</a></li>
									<li><a href="error-404.html" class="dez-page">Error 404</a></li>
									<li><a href="#" class="dez-page">Portfolio</a>
										<ul class="sub-menu">
											<li><a href="portfolio-grid-2.html" class="dez-page">Portfolio Grid 2 </a></li>
											<li><a href="portfolio-grid-3.html" class="dez-page">Portfolio Grid 3 </a></li>
											<li><a href="portfolio-grid-4.html" class="dez-page">Portfolio Grid 4 </a></li>
										</ul>
									</li> */}
									<li><a href="/login" class="dez-page">Login</a></li>
									<li><a href="/signup" class="dez-page">Register</a></li>
									<li><a href="/contact" class="dez-page">Contact Us</a></li>
								</ul>
							</li>
							<li>
								<a href="/main">Blog <i class="fa fa-chevron-down"></i></a>
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
    <div class="page-content bg-white">
        {/* <!-- inner page banner --> */}
        <div class="dez-bnr-inr overlay-black-middle" style={{backgroundImage:'url(images/banner/bnr1.jpg)'}}>
            <div class="container">
                <div class="dez-bnr-inr-entry">
                    <h1 class="text-white">Job Detail</h1>
					{/* <!-- Breadcrumb row --> */}
					<div class="breadcrumb-row">
						<ul class="list-inline">
							<li><a href="/main">Home</a></li>
							<li>Job Detail</li>
						</ul>
					</div>
					{/* <!-- Breadcrumb row END --> */}
                </div>
            </div>
        </div>
        {/* <!-- inner page banner END --> */}
        {/* <!-- contact area --> */}
        <div class="content-block">
            {/* <!-- Job Detail --> */}
			<div class="section-full content-inner-1">
				<div class="container">
					<div class="row">
						<div class="col-lg-4">
							<div class="sticky-top">
								<div class="row">
									<div class="col-lg-12 col-md-6">
										<div class="m-b30">
											<img src="images/blog/grid/pic1.jpg" alt=""/>
										</div>
									</div>
									<div class="col-lg-12 col-md-6">
										<div class="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
											<h4 class="text-black font-weight-700 p-t10 m-b15">Job Details</h4>
											<ul>
												<li><i class="ti-location-pin"></i><strong class="font-weight-700 text-black">Address</strong><span class="text-black-light"> Demo Address #8901 Marmora Road Chi Minh City, Vietnam </span></li>
												<li><i class="ti-money"></i><strong class="font-weight-700 text-black">Salary</strong> $800 Monthy</li>
												<li><i class="ti-shield"></i><strong class="font-weight-700 text-black">Experience</strong>6 Year Experience</li>
											</ul>
										</div>
									</div>
								</div>
                            </div>
						</div>
						<div class="col-lg-8">
							<div class="job-info-box">
								<h3 class="m-t0 m-b10 font-weight-700 title-head">
									<a href="#" class="text-secondry m-r30">Digital Marketing Executive</a>
								</h3>
								<ul class="job-info">
									<li><strong>Education</strong> Web Designer</li>
									<li><strong>Deadline:</strong> 25th January 2018</li>
									<li><i class="ti-location-pin text-black m-r5"></i> NewYark </li>
								</ul>
								<p class="p-t20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
								<h5 class="font-weight-600">Job Description</h5>
								<div class="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
								<h5 class="font-weight-600">How to Apply</h5>
								<div class="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
								<h5 class="font-weight-600">Job Requirements</h5>
								<div class="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
								<ul class="list-num-count no-round">
									<li>The DexignLab Privacy Policy was updated on 25 June 2018.</li>
									<li>Who We Are and What This Policy Covers</li>
									<li>Remaining essentially unchanged It was popularised in the 1960s </li>
									<li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</li>
									<li>DexignLab standard dummy text ever since</li>
								</ul>
								<a href="#" class="site-button">Apply This Job</a>
							</div>
						</div>
					</div>
				</div>
			</div>
            {/* <!-- Job Detail --> */}
			{/* <!-- Our Jobs --> */}
			<div class="section-full content-inner">
				<div class="container">
					<div class="row">
						<div class="col-xl-3 col-lg-6 col-md-6">
							<div class="m-b30 blog-grid">
                                <div class="dez-post-media dez-img-effect "> <a href="#"><img src="images/blog/grid/pic1.jpg" alt=""/></a> </div>
                                <div class="dez-info p-a20 border-1">
                                    <div class="dez-post-title ">
                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                    </div>
                                    <div class="dez-post-meta ">
                                        <ul>
                                            <li class="post-date"> <i class="ti-location-pin"></i> London </li>
                                            <li class="post-author"><i class="ti-user"></i>By <a href="#">Jone</a> </li>
                                        </ul>
                                    </div>
                                    <div class="dez-post-text">
                                         <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                    </div>
                                   <div class="dez-post-readmore"> 
										<a href="#" class="site-button outline">Apply Now <i class="ti-arrow-right"></i></a>
									</div>
                                </div>
                            </div>
						</div>
						<div class="col-xl-3 col-lg-6 col-md-6">
							<div class="m-b30 blog-grid">
                                <div class="dez-post-media dez-img-effect "> <a href="#"><img src="images/blog/grid/pic2.jpg" alt=""/></a> </div>
                                <div class="dez-info p-a20 border-1">
                                    <div class="dez-post-title ">
                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                    </div>
                                    <div class="dez-post-meta ">
                                        <ul>
                                            <li class="post-date"> <i class="ti-location-pin"></i> London </li>
                                            <li class="post-author"><i class="ti-user"></i>By <a href="#">Jone</a> </li>
                                        </ul>
                                    </div>
                                    <div class="dez-post-text">
                                         <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                    </div>
                                   <div class="dez-post-readmore"> 
										<a href="#" class="site-button outline">Apply Now <i class="ti-arrow-right"></i></a>
									</div>
                                </div>
                            </div>
						</div>
						<div class="col-xl-3 col-lg-6 col-md-6">
							<div class="m-b30 blog-grid">
                                <div class="dez-post-media dez-img-effect "> <a href="#"><img src="images/blog/grid/pic3.jpg" alt=""/></a> </div>
                                <div class="dez-info p-a20 border-1">
                                    <div class="dez-post-title ">
                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                    </div>
                                    <div class="dez-post-meta ">
                                        <ul>
											<li class="post-date"> <i class="ti-location-pin"></i> London </li>
                                            <li class="post-author"><i class="ti-user"></i>By <a href="#">Jone</a> </li>
                                        </ul>
                                    </div>
                                    <div class="dez-post-text">
                                         <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                    </div>
                                   <div class="dez-post-readmore"> 
										<a href="#" class="site-button outline">Apply Now <i class="ti-arrow-right"></i></a>
									</div>
                                </div>
                            </div>
						</div>
						<div class="col-xl-3 col-lg-6 col-md-6">
							<div class="m-b30 blog-grid">
                                <div class="dez-post-media dez-img-effect "> <a href="#"><img src="images/blog/grid/pic4.jpg" alt=""/></a> </div>
                                <div class="dez-info p-a20 border-1">
                                    <div class="dez-post-title ">
                                        <h5 class="post-title"><a href="#">Title of blog post</a></h5>
                                    </div>
                                    <div class="dez-post-meta ">
                                        <ul>
											<li class="post-date"> <i class="ti-location-pin"></i> London </li>
                                            <li class="post-author"><i class="ti-user"></i>By <a href="#">Jone</a> </li>
                                        </ul>
                                    </div>
                                    <div class="dez-post-text">
                                         <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                                    </div>
                                   <div class="dez-post-readmore"> 
										<a href="#" class="site-button outline">Apply Now <i class="ti-arrow-right"></i></a>
									</div>
                                </div>
                            </div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Our Jobs END --> */}
		</div>
    </div>
    {/* <!-- Content END-->
	<!-- Footer --> */}
    <footer class="site-footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
					<div class="col-xl-5 col-lg-4 col-md-12 col-sm-12">
                        <div class="widget">
                            <img src="images/logo-white.png" width="180" class="m-b15" alt=""/>
							<p class="text-capitalize m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the..</p>
                            <div class="subscribe-form m-b20">
								<form class="dzSubscribe" action="http://job-board.w3itexperts.com/xhtml/script/mailchamp.php" method="post">
									<div class="dzSubscribeMsg"></div>
									<div class="input-group">
										<input name="dzEmail" required="required"  class="form-control" placeholder="Your Email Id" type="email"/>
										<span class="input-group-btn">
											<button name="submit" value="Submit" type="submit" class="site-button radius-xl">Subscribe</button>
										</span> 
									</div>
								</form>
							</div>
							<ul class="list-inline m-a0">
								<li><a href="#" class="site-button white facebook circle "><i class="fa fa-facebook"></i></a></li>
								<li><a href="#" class="site-button white google-plus circle "><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#" class="site-button white linkedin circle "><i class="fa fa-linkedin"></i></a></li>
								<li><a href="#" class="site-button white instagram circle "><i class="fa fa-instagram"></i></a></li>
								<li><a href="#" class="site-button white twitter circle "><i class="fa fa-twitter"></i></a></li>
							</ul>
                        </div>
                    </div>
					<div class="col-xl-5 col-lg-5 col-md-8 col-sm-8 col-12">
                        <div class="widget border-0">
                            <h5 class="m-b30 text-white">Frequently Asked Questions</h5>
                            <ul class="list-2 list-line">
                                <li><a href="#">Privacy & Seurty</a></li>
                                <li><a href="#">Terms of Serice</a></li>
                                <li><a href="#">Communications</a></li>
                                <li><a href="#">Referral Terms</a></li>
                                <li><a href="#">Lending Licnses</a></li>
								<li><a href="#">Support</a></li>
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">For Employers</a></li>
                                <li><a href="#">Underwriting</a></li>
                                <li><a href="#">Contact Us</a></li>
								<li><a href="#">Lending Licnses</a></li>
								<li><a href="#">Support</a></li>
                            </ul>
                        </div>
                    </div>
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
                        <div class="widget border-0">
                            <h5 class="m-b30 text-white">Find Jobs</h5>
                            <ul class="list-2 w10 list-line">
                                <li><a href="#">US Jobs</a></li>
                                <li><a href="#">Canada Jobs</a></li>
                                <li><a href="#">UK Jobs</a></li>
                                <li><a href="#">Emplois en Fnce</a></li>
                                <li><a href="#">Jobs in Deuts</a></li>
								<li><a href="#">Vacatures China</a></li>
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
                    <div class="col-lg-12 text-center"><span><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span></div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer END --> */}
    <button class="scroltop fa fa-chevron-up"></button>
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
<script src="plugins/paroller/skrollr.min.js"></script><!-- PAROLLER --> */}
</div>

        </>
    )
}