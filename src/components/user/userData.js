import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { NavLink } from "react-router-dom";

const GETUSER_QUERY = gql`
  query {
    getUser {
      userInfo
    }
  }
`;

const UserData = () => {
  const { loading, error, data } = useQuery(GETUSER_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const userInfo = JSON.parse(data.getUser.userInfo);

  return (
    <>
      <div>{userInfo.given_name}</div>
      <div>{userInfo.email}</div>
      <div>
        <img
          style={{ width: "100px", height: "auto" }}
          alt=""
          src={userInfo.picture}
        />
      </div>
      <NavLink to="/edit">
        <button>Edit</button>
      </NavLink>
    </>
  );
};

export default UserData;
