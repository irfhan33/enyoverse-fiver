import React from "react";
import Input from "../../components/Input";
import Label from "../../components/label";
import Button from "../../components/Button";
import "./styles.css";
import Fieldset from "../../components/fieldset";
import Select from "../../components/Select";

const MediaEnquirers = () => {
  return (
    <div className="container">
      <div className="media-enquirers-container">
        <div className="media-enquirers-header">
          <h3 className="media-enquirers-title">Media Enquirers</h3>
          <p className="media-enquirers-description">
            All columns are mandatory
          </p>
        </div>

        <form className="media-enquirers-form">
          <Fieldset>
            <Label>Company / publication name</Label>
            <Input placeholder="Enter name your company" />
          </Fieldset>

          <Fieldset>
            <Label>Type of publication</Label>
            <div className="media-radio-container">
              <Label variant="radio">
                <Input type="radio" name="publication"></Input>
                Paper
              </Label>

              <Label variant="radio">
                <Input type="radio" name="publication"></Input>
                Magazine
              </Label>

              <Label variant="radio">
                <Input type="radio" name="publication"></Input>
                Digital
              </Label>
            </div>
          </Fieldset>

          <Fieldset>
            <Label>Website</Label>
            <Input placeholder="Enter link your website" />
          </Fieldset>

          <Fieldset>
            <Label>Your Role</Label>
            <div className="media-radio-container">
              <Label variant="radio">
                <Input type="radio" name="role"></Input>
                PR agency
              </Label>

              <Label variant="radio">
                <Input type="radio" name="role"></Input>
                Direct
              </Label>
            </div>
          </Fieldset>

          <Fieldset>
            <Label>Language</Label>
            <Select defaultValue="">
              <option value="">Select your Language</option>
            </Select>
          </Fieldset>

          <Fieldset>
            <Label>Your Country</Label>
            <Select defaultValue="">
              <option value="">Select your country</option>
            </Select>
          </Fieldset>

          <div className="checkbox-container">
            <div>
              <input type="checkbox" id="information" />
            </div>
            <label for="information">
              All the information submitted is accurate, I understand press &
              media enquiries are not sponsored & only for comments, press
              release articles or interview/roadmap requests.
            </label>
          </div>

          <div className="checkbox-container">
            <div>
              <input type="checkbox" id="understand" />
            </div>
            <label for="understand">
              I understand the team will assess each request & isn't obliged to
              reply to the requests the team does not find useful/insightful
              regarding the project
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

export default MediaEnquirers;
