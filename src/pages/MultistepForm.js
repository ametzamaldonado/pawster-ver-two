import React from "react";
// import { useNavigate } from "react-router-dom";
import UserRegisterForm from "../components/UserViewComponents/MultistepForm/UserRegisterForm";
import { UserRegistrationProvider } from "../context/UserRegistrationContext";

function MultistepForm() {
 
  // const navigate = useNavigate();

//   useEffect(() => {
//  if (currentUser) {
//     if (userType === "user") {
//       setHomePage("/home");
//     } else {
//       setHomePage("/dashboard");
//     }
//   }
//   })

  return (
    <>
    <UserRegistrationProvider>
      <UserRegisterForm />
    </UserRegistrationProvider>
    </>
  );
}

export default MultistepForm;
