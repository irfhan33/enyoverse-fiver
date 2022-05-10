import React from "react";
import Input from "../../components/Input";
import Label from "../../components/label";
import Button from "../../components/Button";
import "./styles.css";
import Fieldset from "../../components/fieldset";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-container">
        <div className="contact-header">
          <h3 className="contact-title">Contact us</h3>
          <p className="contact-description">All columns are mandatory</p>
        </div>

        <form className="contact-form">
          <Fieldset>
            <Label>What Question Would You To Ask</Label>
            <Select defaultValue="">
              <option value="">--Select One--</option>
            </Select>
          </Fieldset>

          <Fieldset>
            <Label>Your Name</Label>
            <Input placeholder="Enter your name" />
          </Fieldset>

          <Fieldset>
            <Label>Your Email</Label>
            <Input placeholder="Enter your Email" />
          </Fieldset>

          <Fieldset>
            <Label>Your Telegram</Label>
            <Input placeholder="Enter your Telegram ID" />
          </Fieldset>

          <Fieldset>
            <Label>Message</Label>
            <Textarea placeholder="Enter your message" />
          </Fieldset>

          <div className="checkbox-container">
            <div>
              <input type="checkbox" id="information" />
            </div>
            <label for="information">
              All the information provided is accurate & i understand submitting
              a message doesn't ensure a response.
            </label>
          </div>

          <div className="button-container">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
