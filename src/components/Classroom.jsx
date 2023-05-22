import { useState } from "react";

function Classroom() {
  // Composant Classroom
  // students  -> ici c'est le tableau de type array
  // setClassroom

  const [students, setStudents] = useState([
    { id: 1, name: "Li" },
    { id: 2, name: "Isabelle" },
    { id: 3, name: "Amandine" },
  ]);

  const addStudent = (e) => {
    e.preventDefault();
    console.log("Valeur du champ", e.target);
  };

  return (
    <div>
      <h1>Classroom</h1>
      <form onSubmit={(e) => addStudent(e)}>
        <input type="text" placeholder="Entrer le nom" />
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
