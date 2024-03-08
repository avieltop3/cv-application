import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import Button from "./components/Button";
import InputField from "./components/InputField";
import AddExperience from "./components/AddExperience";
import AddWork from "./components/AddWork";
// import AddExperience from "./old Component/AddExperience(BACKUPI";

function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [buttonText, setButtonText] = useState("Edit");
  const [generalInformation, setGeneralInformation] = useState([
    { label: "First Name", type: "text", data: "" },
    { label: "Last Name", type: "text", data: "" },
    { label: "email", type: "email", data: "" },
  ]);

  // Functionality to edit resume
  function setButtonTextForEditing(state, first, second) {
    state === true ? setButtonText(first) : setButtonText(second);
    setIsEditing(!isEditing);
  }

  return (
    <>
      <Section sectionName="General Information">
        {/* <InputField
          label="First Name"
          type="text"
          state={isEditing}
          handleChange={handleChangeGeneralInformation}
        />
        <InputField
          label="Last Name"
          type="text"
          state={isEditing}
          handleChange={(e) => setValue(e.target.value)}
        />
        <InputField label="email" type="email" state={isEditing} /> */}

        {generalInformation.map((generalInfo) => {
          return isEditing ? (
            <>
              <InputField
                type={generalInfo.type}
                label={generalInfo.label}
                state={isEditing}
                handleChange={(e) => {
                  generalInfo.data = e.target.value;
                }}
                defaultValue={generalInfo.data}
              />
            </>
          ) : (
            <>
              <p>{`${generalInfo.label}: ${generalInfo.data}`}</p>
            </>
          );
        })}
      </Section>

      <Section sectionName="Educational Experience">
        <AddExperience isEditing={isEditing} key="school" />
      </Section>

      <Section sectionName="Practical Experience">
        <AddWork isEditing={isEditing} />
      </Section>

      <Button
        buttonText={buttonText}
        onClick={() => setButtonTextForEditing(isEditing, "Edit", "Submit")}
      />
    </>
  );
}

export default App;
