import Style from './freequote.module.scss'

function Freequote(){
    return(
        <div className={Style.freequote}>
            <div className="container mx-auto">
                <ul>
                    <li className={`wow animate__animated animate__fadeIn animate__slow`}>
                    <h6>Get Your Free Quote</h6>
                    <h4>Grow With Us Now</h4>
                    <div className={Style.line}></div>
                    </li>
                    <li className={`wow animate__animated animate__fadeIn animate__slow animate__delay-1s`}>
                        <form>
                            <div className="py-5 px-7">
                            <input type="text" placeholder="Your website URL..." className="border-b-2" />
                            </div>
                            <div className="py-5 px-7">
                            <input type="text" placeholder="Email Address..." className="border-b-2" />
                            </div>
                            <div className={`py-5 bg-indigo-500 ${Style.active}`}>
                            <input type="button" value="Get Quote Now" className="border-b-0"/>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Freequote