import { AboutMe, Address, ConfirmationPage, Income, PersonalInfo, ResidenceInfo } from "./FormComponents/index";
import { useRegistrationContext } from "../../../context/UserRegistrationContext";
import "./SwitchCase.scss";

export default function SwitchCase() {
  const { page } = useRegistrationContext();

  switch (page) {
    case 1:
      return <AboutMe />;
    case 2:
      return <PersonalInfo />;
    case 3:
      return <Address />;
    case 4:
      return <ResidenceInfo />;
    case 5:
      return <Income />;
    case 6:
      return <ConfirmationPage />;

    default:
      console.log("No more steps");
  }
}
