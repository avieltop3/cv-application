import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { useRef } from "react";
import "./AddExperience.css";

import { useEffect } from "react";

export default function AddExperience({ isEditing }) {
  const [experiences, setExperiences] = useState([
    {
      school: "school1",
      degree: "degree1",
      stateDate: "12/12/1234",
      endDate: "12/12/1234",
      id: 0,
    },
    {
      school: "school2",
      degree: "degree2",
      stateDate: "22/12/1234",
      endDate: "22/12/1234",
      id: 1,
    },
  ]);

  useEffect(() => {
    console.log({ experiences });
  }, [experiences]);

  function renderInputField(handleChangeObject) {
    let maxID = experiences.slice(-1)[0].id;

    return (
      <>
        <div className="educBox">
          <InputField
            type="text"
            defaultValue={handleChangeObject.school}
            label="School"
            id="school"
            state={isEditing}
            handleChange={(e) => {
              handleChangeObject.school = e.target.value;
              console.log(handleChangeObject);
            }}
          />

          <InputField
            type="text"
            defaultValue={handleChangeObject.degree}
            label="Degree"
            id="degree"
            state={isEditing}
            handleChange={(e) => {
              handleChangeObject.degree = e.target.value;
            }}
          />

          <InputField
            type="date"
            label="Start Date"
            id="startDate"
            state={isEditing}
            handleChange={(e) => {
              handleChangeObject.startDate = e.target.value;
            }}
          />

          <InputField
            type="date"
            label="End Date"
            id="endDate"
            state={isEditing}
            handleChange={(e) => {
              handleChangeObject.endDate = e.target.value;
            }}
          />
        </div>
        <div>
          {maxID === handleChangeObject.id && (
            <Button
              buttonText="Delete"
              onClick={() => {
                // finds the ID of the object you want to delete, which is handleChangeObject.id
                console.log(handleChangeObject.id);
                // find the object containing the ID you want to delete
                const objectToDelete = experiences.find(
                  (experience) => experience.id === handleChangeObject.id
                );

                const theObjNow = experiences.filter(
                  (experience) => experience.id !== handleChangeObject.id
                );

                setExperiences((prev) => {
                  const updatedExperiences = prev.filter(
                    (experience) => experience.id !== handleChangeObject.id
                  );
                  return updatedExperiences;
                });

                console.log({ theObjNow });
              }}
            />
          )}
        </div>
      </>
    );
  }

  return isEditing === true ? (
    <div className="educationEdit">
      {experiences.map((experience) => renderInputField(experience))}
      <Button
        buttonText="Add"
        onClick={() => {
          // GET THE BIGGEST ID
          let biggestID = experiences.slice(-1)[0].id;
          //   Create a new object so it renders the inputs
          setExperiences((prev) => [...prev, { id: biggestID + 1 }]);
        }}
      />
    </div>
  ) : (
    <>
      {experiences.map((experience) => {
        return (
          <>
            <p>School: {experience.school}</p>
            <p>Degree: {experience.degree}</p>
            <p>Start: {experience.startDate}</p>
            <p>end: {experience.endDate}</p>
          </>
        );
      })}
    </>
  );
}
