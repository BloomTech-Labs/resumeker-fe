import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const UserData = () => {
    const { user } = useAuth0();

    return (
        <>
            <div style={{ padding: "15px" }}>
                <label>Hi, </label>
                <div>{user.name}</div>

                <div style={{ padding: "10px" }}>
                    <img
                        style={{ width: "100px", height: "auto" }}
                        alt=""
                        src={user.picture}
                    />
                </div>
            </div>
        </>
    );
};

export default UserData;
