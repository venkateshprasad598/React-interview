import "./App.css";
import { useState } from "react";
import Button from "./Button";
function App() {
  const [person, newPerson] = useState({ firstName: "", email: "" });
  const [people, newPeople] = useState([]);
  console.log(person);
  console.log(people);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatePerson = { ...person, [name]: value, id: new Date().getTime() };
    newPerson(updatePerson);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const updatePeople = [...people, person];
    newPeople(updatePeople);
  };

  return (
    <div className="App">
      <form>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>

      {people.map((data) => {
        const { firstName, email, id } = data;
        return (
          <div key={id}>
            <h1>{firstName}</h1>
            <h2>{email}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
