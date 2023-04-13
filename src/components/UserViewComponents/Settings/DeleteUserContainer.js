import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import "./DeleteUserContainer.scss";
import { useAuth } from "../../../context/AuthContext";

function DeleteUserContainer({ currentUser }) {
  const { deleteUserAccount } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleAccept = () => {
    setShow(false);
    deleteUserAccount(currentUser.uid)
  };

  const handleModal = () => setShow(true);
  return (
    <div className="delete-user">
      <h4 className="name">Delete Account</h4>
      <div className="delete-messsage">
        Permanetly delete your account and all data associated with it. If you
        experienced an issue with your account and need help, please contact us
        so we can assist you.
      </div>
      <button onClick={handleModal}>DELETE MY ACCOUNT</button>
      {show && (
        <DeleteModal
          show={show}
          handleClose={handleClose}
          handleAccept={handleAccept}
        />
      )}
    </div>
  );
}

export default DeleteUserContainer;
