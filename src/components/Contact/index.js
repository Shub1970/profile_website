import "./index.scss"
import React,{useState,useEffect,useRef} from 'react'
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import emailjs from '@emailjs/browser';
import { MapContainer } from "react-leaflet";
import { TileLayer,Marker,Popup } from "react-leaflet";

const Contact = () => {
    const [letterClass,setLetterClass]=useState('text-animate')
    const refForm=useRef();

    useEffect(()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    })
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_goh836j','template_3pur1zk',refForm.current,'xNt7M2D3T6cITb8NS').then(()=>{
            alert('message successfully send!')
            window.location.reload(false)
        },()=>{
            alert('failed to send the message!, please try again')
        })
    }
return (
    <>
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                 strArray={['C','o','n','t','a','c','t','','m','e']} 
                idx={15}/>
            </h1>
            <p>
                I am interested in startup company - especially ambitious or large project. However, if you have other request like collaboration, don't hesitate to contact me using below form either. 
            </p>
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input type="text" name='name' placeholder="Name" required />
                        </li>
                        <li className="half">
                            <input type="email" name='email' placeholder="Email" required />
                        </li>
                        <li>
                            <input type="text" name="subject" 
                            placeholder="Subject"
                            required />
                        </li>
                        <li>
                            <textarea 
                            type='text'
                            name="message" 
                            placeholder="Message" 
                            required
                            ></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className="info-map">
            Shubham kuamr,
            <br />
            New Delhi,
            <br />
            Hno-21, gautam colony ,kanaheri road
            <br />
            <span>18shubham1998@gmail.com</span>
        </div>
        <div className="map-wrap">
            <MapContainer center={[28.56168958050459, 77.00175165988504]} zoom={14}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[28.56168958050459, 77.00175165988504]}>
                    <Popup>shubham lives here, come over for a cup of tea some time :)</Popup>
                </Marker>

            </MapContainer>
        </div>
    </div>
        <Loader type='pacman' />
    </>
)
}

export default Contact