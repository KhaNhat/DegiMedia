import Style from './about.module.scss'

function AboutImg(value){
    return(
            <img src= {value.SrcImg} className="w-100" />
    )
}
function Chart(value){
    return (
        <div className="position: relative">
            <svg width="150" height="150" className={Style.progress}>
                <circle r="70" cx="75" cy="75" class={Style.track} 
                style={
                    {stroke:value.color,strokeDashoffset:value.percent[0]}
                }
                >
                </circle>
            </svg>
            <div className={Style.infor}>
            {value.percent[1]}% <br />
                <span>{value.percent[2]}</span>
            </div>
        </div>
    )
}
function ContentRight(){
    return (
        <div className={Style.aboutMainright}>
            <h6>about us</h6>
            <h4>Who is DigiMedia <span>Agency</span></h4>
            <div className={Style.line}></div>
            <p>We hope this DigiMedia template is useful for your work. You can use this template for any purpose. You may
            <a href="#"> contribute a little amount </a>
             via PayPal to <a href="#">support TemplateMo </a>
             in creating new templates regularly.</p>
             <div className={Style.charts}>
                 <Chart
                 color = "#f32490"
                 percent = {[44,90,'Coding']}
                 />
                 <Chart 
                 color = "#726ae3"
                 percent ={[88,80,'Photoshop']}
                 />
                 <Chart
                 color = "#f58b56"
                 percent ={[88,80,'Animation']}
                 />
             </div>
        </div>
    )
}
function About(){
    const SrcImg = "https://templatemo.com/templates/templatemo_568_digimedia/assets/images/about-dec.png";
    return(
        <div className={Style.about}>
            <div className="container mx-auto">
                <div className={Style.aboutMain}>
                    <AboutImg
                        SrcImg = {SrcImg}
                    />
                    <ContentRight />
                </div>
            </div>
        </div>
    )
}
export default About