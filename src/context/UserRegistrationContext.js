import { createContext, useState, useEffect, useContext } from "react";
import { db } from "../firebase/config";
import { useAuth } from "./AuthContext";
import { updateDoc, doc, getDoc } from "firebase/firestore";

const UserRegistrationContext = createContext();

export const useRegistrationContext = () => {
    return useContext(UserRegistrationContext)
}

export const UserRegistrationProvider = ({ children }) => {
    const { currentUser } = useAuth();
    const userRef = doc(db, "users", currentUser.uid);

    const [page, setPage] = useState(1);

    const prevHide = page === 1 && "remove-button"

    const continueHide = page === 6 && "remove-button"

    const submitHide = page !== 6 && "remove-button"

    const [userInputData, setUserInputData] = useState({
        aboutMe: '',
        firstName: "",
        lastName: "",
        age: '',
        phone_number: "",
        annualIncome: "",
        rentMortage: "",
        householdSize: '',
        numberOfPrevPets: '',
        residenceType: "",
        address: {
            street_address: '',
            street_address_two: '',
            postal_code: '',
            city: '',
            state: ''
        }
    });

    const handleTextChange = (event) => { // works!
        // if user is trying to update a variable inside of the address key
        console.log(event.target.id, event.target.value)
        if(userInputData['address'].hasOwnProperty(event.target.id)){ //
            setUserInputData(prevState => {
                return {
                  ...prevState,
                  address: {
                    ...prevState.address,
                    [event.target.id]: event.target.value,
                  }
                };
              });
        } else {
            setUserInputData({
                ...userInputData,
                [event.target.id]: event.target.value,
              });
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          //create user on firestore
          await updateDoc(userRef, {
            aboutMe:userInputData["aboutMe"],
            firstName: userInputData["firstName"],
            lastName: userInputData["lastName"],
            age: userInputData["age"],
            annualIncome: userInputData["annualIncome"],
            rentMortage: userInputData["rentMortage"],
            householdSize: userInputData["householdSize"],
            numberOfPrevPets: userInputData["numberOfPrevPets"],
            residenceType: userInputData["residenceType"],
            address: userInputData["address"],
            phone_number: userInputData['phone_number'],
          });
        //   window.location.reload();
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        async function getData (){
            const userData = (await getDoc(userRef)).data();
            if(userData['rentMortage']) {
              setUserInputData(userData);
            }
        }
    
        getData()
    }, [userRef])

      const value = {
        userInputData,
        setUserInputData,
        handleTextChange,
        handleSubmit,
        page,
        setPage,
        prevHide, 
        continueHide, 
        submitHide
      }

      return (
        <UserRegistrationContext.Provider value={value}>
            { children }
        </UserRegistrationContext.Provider>
      )
}

export default UserRegistrationContext 