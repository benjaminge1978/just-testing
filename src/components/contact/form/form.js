import React from "react";
import Arrow from "../../../images/arrow-right.svg";

import "./form.scss";

export default () => (
    <form method="POST" action="https://formspree.io/mvokvpdv" name="contact-from" id="contact-form">
        <label> Name
            <input type="text" name="name" placeholder="Name" />
        </label>
        <label>Phone
            <input type="text" name="phone" placeholder="Telephone" />
        </label>
        <label> Email
            <input type="email" name="email" placeholder="Email" />
        </label>
        <label> How can we help
            <textarea name="message" rows="6" placeholder="How can we help?" />
        </label>

            <input type="checkbox" name="consent" value="Consent" />
<label for="vehicle1"><p className="consent">I have read and I accept the <a href="/privacy-policy">privacy policy</a> and I give my consent for the information above to be collected.</p>
</label><br></br>


        <button className="animated-link" type="submit" value="Send">Send message <Arrow /></button>
    </form>
)