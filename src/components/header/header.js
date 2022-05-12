import Style from './header.module.scss'
import {useState,useEffect} from 'react'
function ListMenu({list}){
    return (
        <ul className={Style.menuList}>
            {
                list.map((value, index) =>{
                  return (
                        <li key={index}
                        >
                            <a href="#">{value}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}
function Logo({src}){
    return (
        <a>
            <img src={src}/>
        </a>
    )
}
function IconTigger(preve){

    if(preve.showup){
        return <i className="fa-solid fa-arrow-rotate-right" onClick={preve.onClick}></i> 
    }
    else return <i className="fa-solid fa-layer-group" onClick={preve.onClick}></i>
}
function MenuTrigger({list}){
    return (
            <ul className={Style.menuTigger}>
            {
                list.map((value, index) =>{
                  return (
                        <li key={index}
                        >
                            <a href="#">{value}</a>
                        </li>
                    )
                })
            }
            </ul>
    )
}
function Header(){
    const menu = ['Home','About','Services','Projects','Blog','Contact','Free Quote'];
    const srcLogo = "https://templatemo.com/templates/templatemo_568_digimedia/assets/images/logo-v1.png";
    const [showup,Setshowup] = useState(false);
    const handleshowup = ()=>{
        Setshowup(!showup);
    }
    return (
        <header>
            <div className={Style.headerArea}>
                <div className="containerMe mx-auto">
                        <div className={Style.main}>
                            <Logo
                                src = {srcLogo}
                            />
                            <ListMenu
                                list = {menu}
                            />
                            <IconTigger
                            onClick={handleshowup}
                            showup = {showup}
                            />
                            {showup && <MenuTrigger list = {menu} />}
                        </div>
                </div>
            </div>
        </header>
    )
}
export default Header