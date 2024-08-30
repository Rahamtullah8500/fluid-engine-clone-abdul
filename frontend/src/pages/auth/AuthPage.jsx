import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./AuthPage.css";
import apiClient from "../../apiClient";
import { userSignIn } from "../../store/slice/UserSlice";
import { useNavigate } from "react-router-dom";

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await apiClient.post('api/users/signin', { email, password });
      dispatch(userSignIn(response.data));
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      toast.success("Login successful");
      navigate('/')
    } catch (err) {
      console.log(err)
      toast.error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoading(true);
    try {
      const response = await apiClient.post('api/users/signup', { email, password });
      dispatch(userSignIn(response.data));
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      toast.success("Account created successfully");
      navigate('/')
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <div className="auth-switch">
          <button
            className={`auth-switch-button ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`auth-switch-button ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Create Account
          </button>
        </div>
        <form className="auth-form" onSubmit={isLogin ? handleLogin : handleSignUp}>
          <h2>{isLogin ? "Login" : "Create Account"}</h2>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          {!isLogin && (
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          )}
          <button type="submit" disabled={isLoading}>
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPages;
