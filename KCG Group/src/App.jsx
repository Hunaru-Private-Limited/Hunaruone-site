import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Landing from "./Pages/Landing/Landing";
import SignUp from "./Pages/Signup/SignUp"; // Assuming you have a Signup page
import SignIn from "./Pages/Signin/SignIn"; // Import SignIn page

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />  {/* Add this line for SignIn */}
      </Routes>
    </Router>
  );
}

export default App;
