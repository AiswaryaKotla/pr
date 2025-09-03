import { useEffect, useState } from "react";

// Our main component
function App() {
  // Step 1: Create a state to store API data
  const [users, setUsers] = useState([]);

  // Step 2: Fetch API data when component loads
  useEffect(() => {
    // Example API: returns fake users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // convert to JSON
      .then((data) => {
        setUsers(data); // save in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // empty [] = run only once when page loads

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Users List (API Example)</h1>

      {/* Step 3: Show users */}
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
