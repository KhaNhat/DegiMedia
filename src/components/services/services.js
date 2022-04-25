import Style from './services.module.scss'
import {useState,useEffect} from 'react'
function Sectionheading(){
    return(
        <div className={Style.Sectionheading}>
            <h6>Our Services</h6>
            <h4>What Our Agency <span>Provides</span></h4>
            <div className={`${Style.line} mx-auto`}></div>
        </div>
    )
}
function Grid(value){
    return(
        <div className={Style.grid}>
            <ul>
            {
                value.listGird.map(function(item,index){
                    return <li 
                                key={index} 
                                className={value.choose === index ? `${Style.choose} py-8 cursor-pointer`:'py-8 cursor-pointer'}
                                onClick={()=>value.Setchoose(index)}
                            >
                                <span>
                                    <img src={item.icon} className="mx-auto mb-2" />
                                    <aside>{item.describe}</aside>
                                </span>
                            </li>
                })
            }
            </ul>
        </div>
    )
}
function InfMain(value){
    return(
        <div className={Style.infMain}>
            {
                value.tickList.map(function(item,index){
                    return (
                        <ul className={index === value.choose ? 'grid':'hidden'}>
                            <li>
                                <h4>{item.title}</h4>
                                <p>Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit,
                                sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token.
                                dover lipsum lorem and the others.</p>
                                <div>
                                    <span><i className="fa-solid fa-check"></i>Optimized Template</span>
                                    <span><i className="fa-solid fa-check"></i>Data Info</span>
                                    <span><i className="fa-solid fa-check"></i>SEO Analysis</span>
                                    <span><i className="fa-solid fa-check"></i>Data Info</span>
                                    <span><i className="fa-solid fa-check"></i>SEO Analysis</span>
                                    <span><i className="fa-solid fa-check"></i>Optimized Template</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sedr do eiusmod deis tempor incididunt.</p>
                            </li>
                            <li>
                            <img src={item.picture} />
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
function Services(){
    const [choose,setChoose] = useState(0);
    const listGird = [
        {   icon:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-01.png',
            describe:'Apartments'
        },
        {   icon:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-02.png',
            describe:'Food & Life'
        },
        {   icon:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-03.png',
            describe:'Cars'
        },
        {   icon:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-04.png',
            describe:'Shopping'
        },
        {   icon:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/service-icon-01.png',
            describe:'Traveling'
        }
    ];
    const tickList = [
            {
                title:'SEO Analysis & Daily Reports',
                picture:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/services-image.jpg'
            },
            {
                title:'Healthy Food & Life',
                picture:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/services-image-02.jpg'
            },
            {
                title:'Car Re-search & Transport',
                picture:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/services-image-03.jpg'
            },
            {
                title:'Online Shopping & Tracking ID',
                picture:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/services-image-04.jpg'
            },
            {
                title:'Enjoy & Travel',
                picture:'https://templatemo.com/templates/templatemo_568_digimedia/assets/images/services-image.jpg'
            }
        ]
    return(
        <div className={Style.services}>
            <div className="container mx-auto">
                <Sectionheading/>
                <Grid 
                    listGird = {listGird}
                    Setchoose = {setChoose}
                    choose = {choose}
                />
                <InfMain
                    tickList = {tickList}
                    Setchoose = {setChoose}
                    choose = {choose}
                />
            </div>
        </div>

    )
}
export default Services