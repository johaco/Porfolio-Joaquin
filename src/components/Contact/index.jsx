import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

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
                    alert('Message successfully sent!')
                    window.location.reload(false)
                    console.log('SUCCESS!');
                },
                (error) => {
                    alert('Failed to send the message, please try again')
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
                    I am interested in opportunities as a front-end developer in established companies. 
                    However, if you have other questions or proposals, do not hesitate to contact me using the following form.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="user_name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="user_email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="user_subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea type="message" name="message" placeholder="Message" required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Joaquin Sanchez,
                    <br />
                    Argentina,
                    <br />
                    Ruta 50, Catitas Viejas <br />
                    Santa Rosa, Mendoza <br />
                    <br />
                    <span>johacosanchez@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[-33.2993182, -68.0482999]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-33.2993182, -68.0482999]}>
                            <Popup>Joaquin lives here, come over for a mate</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Contact;