import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_9h3dabi', 'template_arn9ss1', form.current, {
          publicKey: '6ht2Hprv76Kk1XG-N',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="user_name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="user_email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" name="user_subject" placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea type="message" name="message" placeholder="Message" required/>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Contact;