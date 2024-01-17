import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "gatsby";
import { IoClose } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
import { IoCart } from "react-icons/io5";
import { useGlobalContext } from "../context_api/Appcontext";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
const ContactComp = () => {
  const { state, dispatch } = useGlobalContext();
const [name,setName]= useState("")
const [email,setEmail]= useState("")
const [phone,setPhone]= useState("")
const [subject,setSubject]= useState("")
const [message,setMessage]= useState("")

  const handleSubmit =(e)=>{
e.preventDefault()
console.log(name,email, phone, subject,message)

  }
// ----------------------------------------------------------
  return (
    <main className="parent">
      <section className="parent cat-heading ">
        <div className="container cat-heading-cont">
          <Link to="/" className="c-h-link">
            <span>Home</span> <IoChevronForward className="c-h-link-icon" />
          </Link>
          <h1 className="c-h-title">Contact</h1>
        </div>
      </section>
      {/* ------------------------------------------------------------- */}
      <section className="parent contact-hero-cont">
        <div
          className="contact-bg"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="contact-bg-overlay"></div>
        </div>
        <div className="contact-form-cont">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>
              <div className="form-fields">
                {/* -------------------------------- */}
                <fieldset className="c-form">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your full name..." onChange={(e)=>setName(e.target.value)}/>
                </fieldset>
                {/* ---------------------------------------- */}
                <fieldset className="c-form">
                  <label htmlFor="email">Email Address</label>
                  <input type="text" id="email" placeholder="Email address"  onChange={(e)=>setEmail(e.target.value)}/>
                </fieldset>
                {/* ---------------------------------------- */}
                <fieldset className="c-form">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" placeholder="Your phone number" onChange={(e)=>setPhone(e.target.value)} />
                </fieldset>
                {/* ---------------------------------------- */}
                <fieldset className="c-form">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="The message subject..." onChange={(e)=>setSubject(e.target.value)}/>
                </fieldset>
                {/* ---------------------------------------- */}
              </div>
              {/* ---------------------------------------------------------------------- */}
              <fieldset className="c-form">
                <label htmlFor="message">Message</label>
                <textarea type="text" maxLength={200} id="message" onChange={(e)=>setMessage(e.target.value)}>
                  The message goes here...
                </textarea>
              </fieldset>
              <button  onSubmit={handleSubmit}>Submit message</button>
              {/* ----------------------------------------------------------- */}
            </form>
          </div>
          <div className="contact-info">
            {contactInfo().map((info, index) => (
              <div className="single-contact-info">
                {(index == 0 && (
                  <MdOutlineMailOutline className="con-icon" />
                )) ||
                  (index == 1 && <IoLocationOutline className="con-icon" />) ||
                  (index == 2 && <FiPhoneCall className="con-icon" />)}
                <h3>{info.title}</h3>
                <p>{info.desc1}</p>
                <p>{info.desc2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactComp;
