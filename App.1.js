import React, { useState } from 'react';

export const App = () => {
  const [data, setData] = useState({
    MobileNumber: "",
    Email: "",
    NewPassword: "",
    DateOfBirth: "",
    FirstName: "",
    Surname: "",
    Gender: "",
  });
  const { MobileNumber, Email, NewPassword, DateOfBirth, FirstName, Surname, Gender } = data;
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    const submitHandler = () => {
      e.preventDefault();
      console.log(data);
    };
  };

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" name="MobileNumber" value={MobileNumber} onChange={handler} /><br />
          <input type="text" name="Email" value={Email} onChange={handler} /><br />
          <input type="NewPassword" name="NewPassword" value={NewPassword} onChange={handler} /><br />
          <input type=" DateOfBirth" name=" DateOfBirth" value={DateOfBirth} onChange={handler} /><br />
          <input type="text" name="FirstName" value={FirstName} onChange={handler} />
          <input type="text" name="Surname" value={Surname} onChange={handler} />
          <input type="text" name="Gender" value={Gender} onChange={handler} /><br />
          <input type="submit" name="submit" />






        </form>
      </center>
    </div>
  );


};
