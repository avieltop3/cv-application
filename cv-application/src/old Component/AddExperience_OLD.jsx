import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useRef } from "react";

import { useEffect } from "react";

export default function AddExperience({ isEditing }) {
  // const [id, setId] = useState(0);
  let id = useRef(0);
  const [experiences, setExperiences] = useState([
    {
      // // id: id.current,
      // school: "test",
      // degree: "",
      // startDate: "",
      // endDate: "",
    },
  ]);

  useEffect(() => {
    console.log(experiences);
    // id.current = id.current + 1;
  }, [experiences]);

  useEffect(() => {
    // id.current = id.current + 1;
    console.log(id.current);
  }, [id]);

  //   TO FIX
  // function handleChange(key) {
  //   console.log(event.target.value);
  //   // setExperiences([...experiences, { [key]: event.target.value }]);
  // }

  return isEditing === true ? (
    <>
      {experiences.map((experience, index) => {
        let updated = { id: index };

        return (
          <div key={index}>
            <InputField
              type="text"
              label="School"
              state={isEditing}
              // key={experience.key}
              handleChange={(e) => {
                let filter = experiences.find(
                  (experience) => experience.id === index
                );
                if (filter === undefined) {
                  filter = updated;
                } else {
                  filter.school = e.target.value;
                }
              }}
              defaultValue={experience.school}
            />
            <InputField
              type="text"
              label="Degree"
              state={isEditing}
              // key={experience.key}
              handleChange={(e) => {
                let filter = experiences.find(
                  (experience) => experience.id === index
                );
                if (filter === undefined) {
                  filter = updated;
                } else {
                  filter.degree = e.target.value;
                }
              }}
              defaultValue={experience.degree}
            />

            <InputField
              type="date"
              label="Start"
              state={isEditing}
              // key={experience.key}
              handleChange={(e) => {
                let filter = experiences.find(
                  (experience) => experience.id === index
                );
                filter.startDate = e.target.value;
              }}
              defaultValue={experience.startDate}
            />

            <InputField
              type="date"
              label="End"
              state={isEditing}
              // key={experience.key}
              handleChange={(e) => {
                let filter = experiences.find(
                  (experience) => experience.id === index
                );
                filter.endDate = e.target.value;
              }}
              defaultValue={experience.endDate}
            />
            <Button
              buttonText="Delete"
              onClick={() => {
                console.log(index);
                setExperiences(
                  experiences.filter((experience) => experience.id !== index)
                );
                experiences.forEach((experience) =>
                  console.log(`experience id ${experience.id}
                  experience: ${console.log(experience)}
                  index: ${index}`)
                );
              }}
            />
            <Button
              buttonText="Add Experience"
              onClick={() => {
                // experiences[0].school === ""
                //   ? setExperiences([updated])
                //   : setExperiences([...experiences, updated]);
                // updated.id = id;

                Object.keys(experiences[0]).length === 0
                  ? setExperiences([updated])
                  : setExperiences([...experiences, updated]);
                console.log(`experiences: ${JSON.stringify(experiences)}`);
              }}
            />
          </div>
        );
      })}
    </>
  ) : (
    experiences.map((experience, index) => {
      if (experience.school === "test") {
        return null;
      } else {
        return (
          <div key={index}>
            <p>{`School: ${experience.school}`}</p>
            <p>{`Degree: ${experience.degree}`}</p>
            <p>{`Start Date: ${experience.startDate}`}</p>
            <p>{`End Date: ${experience.endDate}`}</p>
          </div>
        );
      }
    })
  );
}
// experiences.map((experience) => {
//   return (
// <>
//   <h1>{`School: ${experience.school}`}</h1>
//   <h1>{`Degree: ${experience.degree}`}</h1>
//   <h1>{`Start Date: ${experience.startDate}`}</h1>
//   <h1>{`End Date: ${experience.endDate}`}</h1>
//   <h1>{experience.endDate}</h1>
// </>
//   );
// })
