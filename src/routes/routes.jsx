import { Redirect, Route as RouterDOM } from "react-router-dom";

const Route = ({ isPrivate = false,user,  Component,  ...rest }) => {
  const token = JSON.parse(localStorage.getItem("@WebSchool:Token"));

  return (
    <RouterDOM
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : `/dashboard/${user}`} />
        );
      }}
    />
  );
};

export default Route;
