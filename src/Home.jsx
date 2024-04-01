import { useState } from "react";
import "./App.css";
import Crypto from "./crypto/Crypto";
// import "./App.css";
// import Crypto from "../crypto/Crypto";
// function HomePage() {
//   return (
//     <div className="container center">
//       <h1>Welcome</h1>
//       <a href="/crypto" className="w-2">
//         Crypto
//       </a>
//       <br />
//       <a href="/test" className="w-2">
//         test
//       </a>
//     </div>
//   );
// }
async function hashText(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
function HomePage() {
  const mypassword =
    "5e8d7d9574b0b6c3feb0e15282b13202bef8ba6b771d77fd786a73abb3a2e078";
  const [hashedText, setHashedText] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleHash = async () => {
    const hash = await hashText(password);
    setHashedText(hash);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    handleHash();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mypassword === hashedText) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Password");
      setPassword(""); // Clear password field after incorrect attempt
    }
  };
  return isAuthenticated ? (
    <Crypto />
  ) : (
    <form onSubmit={handleSubmit}>
      <label style={{ margin: "1em" }}>
        Password: &nbsp;&nbsp;
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HomePage;
