import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_monkey', 'template_704k56m', form.current, 'WNRNYL7SjWgiGRpxl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div id="Contact" className= "container mx-auto px-4 lg:max-w-7xl pb-4">
  <div class="p-5 space-y-5 drop-shadow shadow-inner shadow-dg">
    <h4 class="text-center text-3xl text-alb    ">Contact Me</h4>

    <form ref={form} onSubmit={sendEmail}>
      <div class="grid grid-cols-2 gap-5">
        <input
          type="text"
          class="border border-white px-4 py-2 focus:outline-none focus:border-blue focus:shadow-blue shadow-sm shadow-black"
          placeholder="First Name"
          name='first_name'
        />
        <input
          type="text"
          className="border border-white px-4 py-2 focus:outline-none focus:border-blue focus:shadow-blue shadow-sm shadow-black"
          placeholder="Last Name"
          name='last_name'
        />
        <input
          type="email"
          className="border border-white px-4 py-2 focus:outline-none focus:border-blue col-span-2 focus:shadow-blue shadow-sm shadow-black"
          placeholder="Email"
          name='user_email'
        />
        <input
          type="phone"
          className="border border-white px-4 py-2 focus:outline-none focus:border-blue col-span-2 focus:shadow-blue shadow-sm shadow-black"
          placeholder="Phone"
          name='user_phone'
        />
        <textarea
          cols="10"
          rows="5"
          className="border border-white px-4 py-2 focus:outline-none focus:border-blue col-span-2 focus:shadow-blue shadow-sm shadow-black"
          placeholder="Write your message..."
          name='message'
        ></textarea>
      </div>
      <button
        type="submit"
        value="Send"
        className="focus:outline-none mt-5 bg-light-blue-400   px-4 py-2 text-white font-bold w-full"
      >Submit</button>
    </form>
  </div>
</div>
  )
}

export default Contact