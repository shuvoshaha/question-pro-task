import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "utils/hook/hook";
import "./profile-view.scss";

const ProfileView: React.FC = () => {
  const data = useAppSelector((state) => state.user)
  const { name, email } = data
  const navigate = useNavigate();

  return (
    <div className="profile--view">
      <p onClick={() => navigate("/user")} className="profile--name">
        {name || ""}
      </p>
      <p onClick={() => navigate("/user")} className="profile--email">
        {" "}
        {email || ""}{" "}
      </p>
    </div>
  );
};

export default ProfileView;
