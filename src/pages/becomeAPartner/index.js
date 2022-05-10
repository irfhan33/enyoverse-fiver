import React, { useState } from "react";
import Button from "../../components/Button";
import Fieldset from "../../components/fieldset";
import Input from "../../components/Input";
import Label from "../../components/label";
import RocketCat from "../../components/RocketCatIllustration";
import RoleSelector from "../../components/RoleSelector";
import Select from "../../components/Select";
import {
  Tabs,
  TabScreen,
  TabTrigger,
  TabTriggerList,
} from "../../components/Tabs";
import "./style.css";

const BecomeAPartner = () => {
  const [value, setValue] = useState("1");
  const [role, setRole] = useState("");
  return (
    <div className="container become-a-partner">
      <Tabs value={value} setValue={setValue}>
        <TabTriggerList>
          <TabTrigger value="1">Getting Started</TabTrigger>
          <TabTrigger value="2">Personal Information</TabTrigger>
          <TabTrigger value="3">Finish</TabTrigger>
          <TabTrigger value="7">Jancok</TabTrigger>
        </TabTriggerList>
        <TabScreen value="1">
          <div className="tabs-container">
            <div className="partner-tab-title">
              <h3>Become a Partner</h3>
              <p>Now choose your role to confirm your identity</p>
            </div>

            <div className="role-selectors">
              <RoleSelector
                checked={role === "influencer"}
                onChange={() => setRole("influencer")}
                name="Influencer"
              />

              <RoleSelector
                checked={role === "agency"}
                onChange={() => setRole("agency")}
                name="Agency"
              />
            </div>
            <div className="tab1-button-container">
              <Button
                onClick={() => {
                  if (role !== "") setValue("2");
                }}
              >
                Select
              </Button>
            </div>
          </div>
        </TabScreen>
        <TabScreen value="2">
          <div className="tabs-container">
            <div className="tabs2-role">
              <RoleSelector name={role} checked={true} />
            </div>

            <form className="tab2-form">
              {role === "influencer" && (
                <>
                  <Fieldset>
                    <Label>Full Name</Label>
                    <Input placeholder="Enter your full name" />
                  </Fieldset>

                  <Fieldset>
                    <Label>Your Email</Label>
                    <Input placeholder="Enter your full email" />
                  </Fieldset>

                  <Fieldset>
                    <Label>Your Telegram ID</Label>
                    <Input placeholder="Enter your Telegram ID" />
                  </Fieldset>

                  <Fieldset>
                    <Label>Choose Your Platform</Label>
                    <div className="platform-container">
                      <div>
                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Youtube
                        </Label>

                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Twitter
                        </Label>

                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Instagram
                        </Label>
                      </div>
                      <div>
                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Facebook
                        </Label>

                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Pinterest
                        </Label>

                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Other
                        </Label>
                      </div>
                    </div>
                  </Fieldset>

                  <Fieldset>
                    <Label>Link to Your Channel/Handle/Account</Label>
                    <Input placeholder="Enter link to your channel" />
                  </Fieldset>

                  <Fieldset>
                    <Label>Link to Telegram/Facebook/Other (If any)</Label>
                    <Input placeholder="Enter link to your social media" />
                  </Fieldset>

                  <Fieldset>
                    <Label>Your Country</Label>
                    <Select>
                      <option>Select your country</option>
                    </Select>
                  </Fieldset>
                </>
              )}

              {role === "agency" && (
                <>
                  <Fieldset>
                    <Label>Full Name</Label>
                    <Input placeholder="Enter your full name" />
                  </Fieldset>

                  <Fieldset>
                    <Label>Official Email</Label>
                    <Input placeholder="Enter official email your company" />
                  </Fieldset>

                  <Fieldset>
                    <Label>Company Website</Label>
                    <Input placeholder="Enter your company website" />
                  </Fieldset>

                  <Fieldset>
                    <Label>Choose Your Platform</Label>
                    <div className="platform-container">
                      <div>
                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Youtube
                        </Label>

                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Twitter
                        </Label>

                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Instagram
                        </Label>
                      </div>
                      <div>
                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Facebook
                        </Label>

                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Pinterest
                        </Label>

                        <Label variant="radio">
                          <Input type="radio" name="platform" />
                          Other
                        </Label>
                      </div>
                    </div>
                  </Fieldset>

                  <Fieldset>
                    <Label>Your Role</Label>
                    <div className="agency-role">
                      <Label variant="radio">
                        <Input type="radio" name="role" />
                        CEO
                      </Label>

                      <Label variant="radio">
                        <Input type="radio" name="role" />
                        Representative
                      </Label>

                      <Label variant="radio">
                        <Input type="radio" name="role" />
                        Marketer
                      </Label>
                    </div>
                  </Fieldset>

                  <Fieldset>
                    <Label>Projects Worked On</Label>
                    <Input placeholder="Enter link to your social media" />
                  </Fieldset>

                  <Fieldset>
                    <Label>Your Country</Label>
                    <Select>
                      <option>Select your country</option>
                    </Select>
                  </Fieldset>
                </>
              )}
            </form>

            <div className="tab2-button-container">
              <Button variant="outline" onClick={() => setValue("1")}>
                Back
              </Button>
              <Button onClick={() => setValue("3")}>Submit</Button>
            </div>
          </div>
        </TabScreen>
        <TabScreen value="3">
          <div className="tab3-success-container">
            <RocketCat />
            <h3>Your Request Has Been Submited</h3>

            <Button>Continue</Button>
          </div>
        </TabScreen>
      </Tabs>
    </div>
  );
};

export default BecomeAPartner;
