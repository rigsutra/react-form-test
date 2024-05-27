import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    Streetaddress: "",
    City: "",
    State: "",
    Zipcode: "",
    Country: "",
    Comment: false,
    Candidates: false,
    Offers: false,
    SMS: "",
  });

  function handlesubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handledata(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prevdata) => {
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="form-main">
      <form className="form-container" onSubmit={handlesubmit}>
        <div className="indiv">
          <h2 className="form">Form</h2>
          <label htmlFor="firstname">First name</label>

          <input
            type="text"
            placeholder="Ashish"
            name="firstname"
            onChange={handledata}
            value={formData.firstname}
            id="firstname"
          />

          <label htmlFor="lastname">Last name</label>

          <input
            type="text"
            placeholder="Singh"
            name="lastname"
            onChange={handledata}
            value={formData.lastname}
            id="lastname"
          />

          <label htmlFor="email">Email address</label>

          <input
            type="text"
            placeholder="email@mail.com"
            name="email"
            onChange={handledata}
            value={formData.email}
            id="email"
          />

          <label htmlFor="country">Country</label>

          <select
            name="country"
            id="country"
            value={formData.Country}
            onChange={handledata}
          >
            <option value="India"> India</option>
            <option value="Pakstina"> Pakstina</option>
            <option value="USA"> USA</option>
            <option value="EU"> EU</option>
          </select>

          <label htmlFor="Streetaddress">Street Address</label>

          <input
            type="text"
            placeholder="53 , 2nd street"
            name="Streetaddress"
            onChange={handledata}
            value={formData.Streetaddress}
            id="Streetaddress"
          />

          <label htmlFor="City">City</label>

          <input
            type="text"
            placeholder="Delhi"
            name="City"
            onChange={handledata}
            value={formData.City}
            id="City"
          />

          <label htmlFor="state">State/ Province</label>

          <input
            type="text"
            placeholder="Uttar Pradesh"
            name="State"
            onChange={handledata}
            value={formData.State}
            id="state"
          />
          <label htmlFor="Zipcode">ZIP / Postal Code</label>

          <input
            type="text"
            placeholder="302011"
            name="Zipcode"
            onChange={handledata}
            value={formData.Zipcode}
            id="Zipcode"
          />

          <h4 className="byemail">By Email</h4>

          <div className="comments">
            <input
              type="checkbox"
              name="Comment"
              onChange={handledata}
              checked={formData.Comment}
              id="Comment"
            />
            <label htmlFor="Comment">Comments</label>
            <p>get notified when someone posts</p>
          </div>

          <div className="comments">
            <input
              type="checkbox"
              name="Candidates"
              onChange={handledata}
              checked={formData.Candidates}
              id="Candidates"
            />
            <label htmlFor="Candidates">Candidates</label>
            <p>get notified when a Candidates applies for job</p>
          </div>

          <div className="comments">
            <input
              type="checkbox"
              name="Offers"
              onChange={handledata}
              checked={formData.Offers}
              id="Offers"
            />
            <label htmlFor="Offers">Offers</label>
            <p>get notified when a Candidate accepts or rejects an Offer</p>
          </div>

          <div className="push">
            <h4>Push Notfication</h4>
            <p>These are delivered via SMS to your mobile phone</p>
          </div>
          <div className="radiowala">
            <input
              type="radio"
              name="SMS"
              onChange={handledata}
              value="Everything"
              id="Everything"
              checked={formData.SMS === "Everything"}
            />
            <label htmlFor="Everything">Everything</label>
          </div>

          <div className="radiowala">
            <input
              type="radio"
              name="SMS"
              onChange={handledata}
              value="Same as email"
              id="Same as email"
              checked={formData.SMS === "Same as email"}
            />
            <label htmlFor="Same as email">Same as email</label>
          </div>
          <div className="radiowala">
            <input
              type="radio"
              name="SMS"
              onChange={handledata}
              value="No push Notification"
              id="No push Notification"
              checked={formData.SMS === "No push Notification"}
            />
            <label htmlFor="No push Notification">No push Notification</label>
          </div>
          <input className="btn" type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default Form;
