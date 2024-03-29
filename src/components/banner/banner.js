import Style from './banner.module.scss'
function Banner(){
    return (
        <div className={Style.mainBanner}>
            <div className="containerMe mx-auto">
            <div className={Style.bannerCenter}>
                <div className={`wow animate__animated animate__fadeInLeft ${Style.bannerLeft}`}>
                    <h6>Digital Media Agency</h6>
                    <h2>We Boost Your Website Traffic</h2>
                    <p>This template is brought to you by TemplateMo website. 
                        Feel free to use this for a commercial purpose.
                        You are not allowed to redistribute the template ZIP file on any other template website. 
                        Thank you.</p>
                    <a href="#">Free Quote</a>
                </div>
                <div className={`wow animate__animated animate__fadeInRight animate__delay-1s ${Style.bannerRight}`}>
                    <img src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/slider-dec.png" />
                </div>
            </div>
            </div>
        </div>
    )
}
export default Banner