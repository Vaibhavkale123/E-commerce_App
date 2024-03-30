import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
  });

  const [response, setResponse] = useState({});

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    fetch("http://localhost:8080/api/user/admin/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        sessionStorage.setItem("active-admin", JSON.stringify(res));
        toast.success("logged in successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    });

    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div className="card form-card border-color" style={{ width: "25rem" }}>
          <div className="card-header bg-color text-center">
            <h4 className="card-title">Admin Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label for="emailId" class="form-label custom-bg-text">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label custom-bg-text">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
              </div>

              <button
                type="submit"
                className="btn custom-bg text-color"
                onClick={loginAction}
              >
                Login
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
