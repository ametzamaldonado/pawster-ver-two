import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ShelterRoute({ component: Component, path, exact }) {
    const { currentUser, userType } = useAuth();
  
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) => {
          if (currentUser && userType === "shelter") {
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  }
  