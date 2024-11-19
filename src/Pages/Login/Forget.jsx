import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Forget = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState(location.state?.email || '')
    const handleResetPassword = () => {
        window.open("https://mail.google.com", "_blank");
      };
    return (
        <div>
      <h2>Forgot Password</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleResetPassword();
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
    );
};

export default Forget;