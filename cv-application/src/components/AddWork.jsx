import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

export default function AddWork({ isEditing }) {
  const [workExperiences, SetWorkExperiences] = useState([
    {
      companyName: "KPMG",
      positionTitle: "Associate1",
      mainResponsibilities: `1Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nemo. Architecto ab quae a eveniet iusto perferendis necessitatibus aspernatur earum!
      `,
      from: "2001-01-01",
      to: "2001-01-01",
      id: 0,
    },
    {
      companyName: "Ernst and Young",
      positionTitle: "Associate2",
      mainResponsibilities: `2Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nemo. Architecto ab quae a eveniet iusto perferendis necessitatibus aspernatur earum!
      `,
      from: "2002-02-02",
      to: "2002-02-02",
      id: 1,
    },
  ]);

  function renderWorkExperience(handleObjects) {
    return (
      <>
        {handleObjects.map((handleObject, index) => {
          return (
            <div key={index}>
              <InputField
                type="text"
                state={isEditing}
                label="Company"
                defaultValue={handleObject.companyName}
                id={handleObject.id}
                handleChange={(e) => {
                  handleObject.companyName = e.target.value;
                  console.log(handleObject);
                }}
              />

              <InputField
                type="text"
                state={isEditing}
                label="Company"
                defaultValue={handleObject.positionTitle}
                id={handleObject.id}
              />

              <InputField
                type="date"
                state={isEditing}
                label="Start"
                defaultValue={handleObject.startDate}
                id={handleObject.id}
              />

              <InputField
                type="date"
                state={isEditing}
                label="Start"
                defaultValue={handleObject.startDate}
                id={handleObject.id}
              />
              <label for="jobDesc">Job Description</label>
              <textarea>{handleObject.mainResponsibilities}</textarea>
            </div>
          );
        })}
      </>
    );
  }

  return isEditing ? (
    <>
      {renderWorkExperience(workExperiences)}
      <Button
        buttonText="Add Work"
        onClick={() => {
          let maxID = workExperiences.slice(-1)[0].id;

          SetWorkExperiences((prev) => [...prev, { id: maxID + 1 }]);
        }}
      />
      <Button
        buttonText="Delete"
        onClick={() => {
          let maxID = workExperiences.slice(-1)[0].id;

          const objToRemove = workExperiences.filter(
            (workExperience) => workExperience.id !== maxID
          );

          SetWorkExperiences(objToRemove);

          console.log({ objToRemove });
        }}
      />
    </>
  ) : (
    <>
      {workExperiences.map((workExperience) => {
        return (
          <>
            <p>Company: {workExperience.companyName}</p>
            <p>Position: {workExperience.positionTitle}</p>
            <p>From: {workExperience.from}</p>
            <p>To: {workExperience.to}</p>
            <p>Responsibilities: {workExperience.mainResponsibilities}</p>
          </>
        );
      })}
    </>
  );
}
