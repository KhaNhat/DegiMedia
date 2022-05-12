import Style from './contact.module.scss'

function ContactHeading(){
    return(
        <div className={`wow animate__animated animate__fadeIn animate__delay-1s ${Style.contactHeading}`}>
            <h6>Contact Us</h6>
            <h4>Get In Touch With Us <span>Now</span></h4>
            <div className={Style.line}></div>
        </div>
    )
}
function ContactMain(){
    return(
        <div className={`wow animate__animated animate__fadeInUp ${Style.contactMain}`}>
            <form>
                <div className={Style.main}>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58756.987128414774!2d-43.
                385296!3d-23.012325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.
                %20L%C3%BAcio%20Costa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1svi!2sus!4v1652228949
                183!5m2!1svi!2sus" width="100%" height="636px" style={{border: 0}} allowfullscreen="" loading="lazy"
                 referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="px-3">
                        <ul className={Style.mainRight}>
                            <li>
                                <div className={Style.inforPost}>
                                    <img className="mx-auto" src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/phone-icon.png" />
                                    <a href="#">010-020-0340</a>
                                </div>
                            </li>
                            <li className={Style.item2}>
                                <div className={Style.inforPost}>
                                    <img className="mx-auto" src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/email-icon.png" />
                                    <a href="#">our@email.com</a>
                                </div>
                            </li>
                            <li>
                                <div className={Style.inforPost}>
                                    <img className="mx-auto" src="https://templatemo.com/templates/templatemo_568_digimedia/assets/images/location-icon.png" />
                                    <a href="#">123 Rio de Janeiro</a>
                                </div>
                            </li>
                            <li className={Style.item4}>
                                <fieldset className="mb-8">
                                <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required="" />
                                </fieldset>
                                <fieldset className="mb-8">
                                <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                                </fieldset>
                                <fieldset>
                                <input type="subject" name="subject" id="subject" placeholder="Subject" autocomplete="on" />
                                </fieldset>
                            </li>
                            <li className={Style.item5}>
                                <fieldset>
                                <textarea name="message" type="text" class="form-control" id="message" placeholder="Message" required=""></textarea>
                                </fieldset>
                            </li>
                            <li className={Style.item6}>
                            <button type="submit" id="form-submit" class="main-button ">Send Message Now</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    )
}
function Contact(){
    return(
        <div className={Style.contact}>
            <div className="container mx-auto">
                <ContactHeading />
                <ContactMain />
            </div>
        </div>
    )
}
export default Contact;