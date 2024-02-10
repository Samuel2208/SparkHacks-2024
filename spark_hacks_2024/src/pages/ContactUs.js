import { useRef, useState } from 'react'
import './ContactUs.css'
import './modal.css'
import emailjs from '@emailjs/browser';
import LinkedIn from "../images/LinkedIn.jpg"

function Contact() {
  const [data, setData] = useState({ name: "", email: "", feedback: "" })
  const fname = useRef();
  const email1 = useRef();
  const fdbck = useRef();
  const form = useRef();

  const [modal, setModal] = useState(false);
  const refresh = () => window.location.reload();

  const togglePopup = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oj57gcw', 'template_1b0zsb8', form.current, 'hZNV2ezDFR4mLXsuA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.value = ""
    fname.current.value = "";
    email1.current.value = "";
    fdbck.current.value = "";
    togglePopup();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }
  return (
    <div id='contactPage'>

      <body id='content'>
        <h1 id='contentA'>
          <p id='messageFeed'>We are commited on making your experience better. Please leave any feedback.</p>
          <form ref={form} onSubmit={sendEmail} method='post'>
            <label req for="fname">Name</label>
            <input value={data.name} ref={fname} type='text' placeholder='Name' name ="name" id='nameBox' onChange={handleChange} />
            <label for="email">Email</label>
            <input value={data.email} ref={email1} name="email" type='email' placeholder='Email@email.com' id='emailBox' required onChange={handleChange} />
            <label for="feedback">Questions/Comments</label>
            <textarea ref={fdbck} name="feedback" value={data.feedback} id='commentArea' onChange={handleChange} cols="40" rows="10" required />
            <button type='submit' id='submitBtn'>Submit</button>
          </form>

          <>
            {modal && (
              <div className='modal' >
                <div className="overlay"></div>
                <div className='modal-content'>
                  <h3>Thank You!</h3>
                  <p>Your feedback means a lot, a member of our team will reach out to you
                    as soon as possible.
                  </p>
                  <button type='button' className='close-modal' onClick={refresh}>Close</button>

                </div>
              </div>
            )}


          </>

        </h1>

        <h2 id='contentB'>
          <label id='contactTeamLabel'><img id='logoL' src={LinkedIn}/> Contact the Team</label>
          <a id='creator' href='https://www.linkedin.com/in/victor-escudero56/'>Sam</a>
          <a id='creator' href='https://www.linkedin.com/in/mark-cirineo-65248b175/' target='blank'>Mark</a>
          <a id='creator' href='https://www.linkedin.com/in/jesus-ramirez15/'>Jesus</a>
        </h2>
      </body>
    </div>
  )

}

export default Contact