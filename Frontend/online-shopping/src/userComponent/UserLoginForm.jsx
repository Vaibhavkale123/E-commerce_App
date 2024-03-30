import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    fetch("http://localhost:8080/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log(res);

        if (res.role === "Admin") {
          console.log("Working fine:)");
          sessionStorage.setItem("active-admin", JSON.stringify(res));
        } else if (res.role === "Customer") {
          sessionStorage.setItem("active-user", JSON.stringify(res));
        } else if (res.role === "Delivery") {
          sessionStorage.setItem("active-delivery", JSON.stringify(res));
        }

        toast.success("logged in successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        navigate("/home");
        window.location.reload(true);
      });
    });
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">User Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div class="mb-3 text-color">
                <label for="role" class="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="role"
                >
                  <option value="0">Select Role</option>
                  <option value="Admin"> Admin </option>
                  <option value="Customer"> Customer </option>
                  <option value="Delivery"> Delivery Person </option>
                </select>
              </div>

              <div className="mb-3 text-color">
                <label for="emailId" class="form-label">
                  <b>Email Id</b>
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
              <div className="mb-3 text-color">
                <label for="password" className="form-label">
                  <b>Password</b>
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
                className="btn bg-color custom-bg-text"
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

export default UserLoginForm;
