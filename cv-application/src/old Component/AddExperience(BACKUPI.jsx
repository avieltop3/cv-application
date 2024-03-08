import InputField from "../components/InputField";
import Button from "../components/Button";

export default function AddExperience({
  addingNewExperience,
  setAddingNewExpereience,
}) {
  return (
    <>
      <InputField
        type="text"
        label="School"
        id="id"
        value="value"
        state={addingNewExperience}
      />

      <InputField
        type="text"
        label="Degree"
        id="id1"
        value="value"
        state={addingNewExperience}
      />

      <InputField
        type="date"
        label="Start"
        id="id2"
        value="value"
        state={addingNewExperience}
      />

      <InputField
        type="date"
        label="End"
        id="id3"
        value="value"
        state={addingNewExperience}
      />

      <Button
        buttonText={addingNewExperience ? "Submit" : "Edit"}
        onClick={() => {
          setAddingNewExpereience(!addingNewExperience);
          console.log(addingNewExperience);
          return <InputField type="text" />;
        }}
      />
    </>
  );
}
//   ) : (
//     <>
//       <Button
//         buttonText="Add New Experience"
//         onClick={() => {
//           setAddingNewExpereience(!addingNewExperience);
//           console.log(addingNewExperience);
//         }}
//       />
//     </>
//   );

//   return addingNewExperience ? (
//     <>
//       <InputField label="School Name" type="text" value="test" />
//       {console.log({ isEditing, addingNewExperience })}
//     </>
//   ) : (
//     "a"
//   );
