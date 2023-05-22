import { useState } from "react";

function Classroom() {
  // Composant Classroom
  // students  -> ici c'est le tableau de type array
  // setStudents

  const [name, setName] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "Li" },
    { id: 2, name: "Isabelle" },
    { id: 3, name: "Amandine" },
  ]);

  const addStudent = (e) => {
    e.preventDefault();
    console.log("Valeur du champ", name);
    // Mise à jour du state
    setStudents([...students, { id: students.length + 1, name: name }]);
  };

  console.log("students", students);

  return (
    <div>
      <h1>Classroom</h1>
      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Entrer le nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Ajouter une étudiante</button>
      </form>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Classroom;
