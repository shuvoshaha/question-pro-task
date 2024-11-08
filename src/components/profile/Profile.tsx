import React from "react";
import { useAppDispatch, useAppSelector } from "utils/hook/hook";
import { setEmail, setName } from 'store/slicers/userSlicer'

const Profile: React.FC = () => {

  const data = useAppSelector((state) => state.user)
  const { name, email } = data
  const dispatch = useAppDispatch();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value ));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value ));

  };

  return (
    <>
    <h4>Profile</h4>
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter name"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@email.com"
          autoComplete="off"
        />
      </div>
    </form>
    </>
  );
};

export default Profile;
