import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Forget = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState(location.state?.email || '')
    const handleResetPassword = () => {
        // Redirect user to Gmail logout page
        window.location.href = "https://mail.google.com/mail/u/0/logout";
      };
    return (
        <div className="max-w-sm mx-auto flex flex-col justify-center items-center border rounded-md shadow-sm space-y-3 my-4">
      <h2>Forgot Password</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleResetPassword();
        }}
      >
        <input
          type="email"
          className="border-2 rounded-sm p-3"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button  type="submit">Reset Password</button>
      </form>
    </div>
    );
};

export default Forget;