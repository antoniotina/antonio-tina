import React from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_3oQnDWID', e.target, 'user_uzswKCrQCQmjDcQVTzz1x')
            .then((result) => {
                // console.log('good', result.text);
                toast.dark("Your email has been sent !");
            }, (error) => {
                // console.log('bad', error.text);
                toast.dark("Please try again later !");
            });
    }

    return (
        <div>
            <ToastContainer />
            <form className="contact-form form-contact white-font" onSubmit={sendEmail}>
                <div className="row">
                    <h5>Send email</h5>
                </div>
                <div className="row">
                    <div className="input-field col s12 l12">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate white-font" name="from_name" required />
                        <label htmlFor="icon_prefix">Name</label>
                    </div>
                    <div className="input-field col s12 l12">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" className="validate white-font" name="phone_number" required />
                        <label htmlFor="icon_telephone">Telephone</label>
                    </div>
                    <div className="input-field col s12 l12">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_email" type="email" className="validate white-font" name="reply_to" required />
                        <label htmlFor="icon_email">Email</label>
                    </div>
                    <div className="input-field col s12 l12">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" className="materialize-textarea textarea-height validate white-font" name="message_html" required></textarea>
                        <label htmlFor="icon_prefix2">Message</label>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="" className='right' />
                </div>
            </form>
        </div>
    );
}
