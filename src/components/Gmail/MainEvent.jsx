import { useState } from "react";
import { send } from 'emailjs-com'

function MainEvent() {
  const [sender_name, set_sender_name] = useState('');
  const [image, set_image] = useState('');
  const [sender_email, set_sender_email] = useState('');
  const [sender_message, set_sender_message] = useState('');

  const handleName = (e) =>
  {
    set_sender_name(e.target.value)
  }
  const handleEmail = (e) =>
  {
    set_sender_email(e.target.value)
  }
  const handleMessage = (e) =>
  {
    set_sender_message(e.target.value)
  }
  const handleImage = () =>
  {
    return(
      <div>
        <img src="https://i.ibb.co/54XSvtx/DT-banner.jpg" alt="image"></img>
      </div>
    );
  }
  const sendMail = (e) =>
  {
    e.preventDefault();
    send(
      'service_5ucez7e',
      'template_96pvcem',
      {sender_name, sender_email, sender_message},
      'htNbILA46JBpjwWnB'
    )
    .then((response) => {
      alert('message sent successfully', response.status, response.text)
    })
    .catch((err) => {
      console.log("Failed", err)
    })
  }
  return (
    <div>
       <p className="form-control" style={{ maxWidth: "90%", backgroundColor: "orange"}}>Note: This is realtime connectivity protocol...</p>
       <h1 class="form-control">Contact Us Form</h1>
      <form onSubmit={sendMail}>
      <input type="text" className="form-control" name="sender_name" value={sender_name} onChange = {handleName} required
      placeholder="your name"></input><br />
      <input type="email" name="sender_email" className="form-control" value={sender_email} onChange = {handleEmail} required
      placeholder="your email"></input><br />
      <p style = {{ display: "none"}} value = {image} onChange = {handleImage}></p>
      <input type="text" name="sender_message" value={sender_message} className="form-control" onChange = {handleMessage} required
      placeholder="your message"></input><br />
      {/* <input type="submit" name="submit" value={submit}></input> */}
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
export default MainEvent;
