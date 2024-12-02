import { Col, Row } from "reactstrap";
import "./Login.css";
import { useState } from "react";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("signUp email:", email, "password:", password);
  
    const data = { email, password };
  
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Login failed:", errorData.message || "Unknown error");
        return;
      }
  
      const result = await res.json();
      console.log("Login success:", result);
      // Handle success, e.g., store token or navigate
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };
  

  return (
    <>
      <div className="mainContainer">
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className="container">
            <Col md={8}>
              <label for="email">
                <b>Email </b>
              </label>

              <Row>
                <input
                  className="inpute1"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  className="inpute2"
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Row>

              <button
                style={{
                  margin: "30px 20px",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "8px",
                }}
                type="submit"
              >
                Login
              </button>
              <div className="container" style={{ marginLeft: "-160px" }}></div>
            </Col>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginComponent;
