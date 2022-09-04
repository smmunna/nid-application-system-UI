import React from 'react'
import "../../App.css"
import Logo from "../images/logo-ec.png"

export default function Footer() {
  return (
    <div>
       <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="eclogo">
                        <img src={Logo} alt="" srcset="" />
                        <p>Bangladesh Election Commision</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-info">
                        <p>Email: minhazulabedinmunna@gmail.com <br />
                        Helpline: 105, +88 01708-501261 <br />
                        Contact time: Sunday-Thursday, 9:00 am - 5:00 pm. <br />
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}
