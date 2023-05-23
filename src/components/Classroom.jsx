import { useState } from "react"; // React Hook = fonction réutilisable

function Classroom({ students, setStudents }) {
  // Composant Classroom
  // name -> le nom de l'étudiant à ajouter
  // students  -> ici c'est le tableau de type array
  // number -> le nombre d'étudiants

  const [name, setName] = useState("");

  const addStudent = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire qui est le rafraichissement de la page lors du submit
    // Mise à jour du state
    setStudents([...students, { id: students.length + 1, name }]);
    setName("");
  };

  //   setTimeout(() => {
  //     console.log("test");
  //   }, 2000); // 2000 ms = 2s

  return (
    <div id="classroom">
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
