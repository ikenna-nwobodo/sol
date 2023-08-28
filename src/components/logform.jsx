import { useState } from "react";

const LogForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = async () => {

    const data = {
      id: Math.random().toString(),
      title: title,
      description: description,
    };
    props.onSaveData(data);
  };
  return (
    <form className="logform">
      <div className="forminput">
        <label>
          Complaint Title <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" required value={title} onChange={handleTitle} />
      </div>
      <div className="forminput">
        <label>Complaint Description</label>
        <textarea rows={10} value={description} onChange={handleDesc} />
      </div>
      <button
        className="submit-modal"
        type="submit"
        onClick={props.submitHandler}
      >
        Submit
      </button>
      
    </form>
  );
};

export default LogForm;
