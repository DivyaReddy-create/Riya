import React, { useState } from 'react';

const App = () => {
    const [data, setData] = useState({
        username: "",
        email: ""
    });

    const [submittedData, setSubmittedData] = useState(null);

    const { username, email } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (username.length <= 5) {
            alert("Username must be at least 6 characters.");
        } else {
            alert("Form Submitted Successfully");
            setSubmittedData(data); // Store submitted data
        }
    };

    return (
        <div>
            <center>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter username"
                        onChange={changeHandler}
                    />{" "}
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={changeHandler}
                    />{" "}
                    <br />
                    <button type="submit">Submit</button>
                </form>

                <h3>Submitted Data</h3>
                {/* Render submitted data conditionally */}
                {submittedData && (
                    <div>
                        <p>
                            <strong>Name:</strong> {submittedData.username}
                        </p>
                        <p>
                            <strong>Email:</strong> {submittedData.email}
                        </p>
                    </div>
                )}
            </center>
        </div>
    );
};

export default App;
