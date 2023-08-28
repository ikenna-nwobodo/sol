import "./button.css";
import { useState } from "react";
import LogForm from "./logform";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Button = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const submitHandler = async () => {
        toast.success("Complaint Logged", {
          closeButton: false,
          autoClose: 1000,
          type: toast.TYPE.SUCCESS,
          transition: Bounce,
        });
    toggleModal();
  };

  return (
    <>
      <button onClick={toggleModal}>Log Complaint</button>
      {modal && (
        <div className="modal">
          {/* <div onClick={toggleModal} className="overlay"></div> */}
          <div className="modal-content">
            <div className="closemodal">
              <button className="close-modal" onClick={toggleModal}>
                <span class="material-symbols-rounded">close</span>
              </button>
            </div>
            <h1>Log Complaint</h1>
            <LogForm submitHandler={submitHandler} />
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Button;
