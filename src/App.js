import { useState } from "react";
import Classroom from "./components/Classroom";
import Count from "./components/Count";
import StudentsNumber from "./components/StudentsNumber";

function App() {
  // const onChangeNumber = (number) => {
  //   // retourne le nombre d'étudiantes
  // };
  const [students, setStudents] = useState([
    { id: 1, name: "Li" },
    { id: 2, name: "Isabelle" },
    { id: 3, name: "Amandine" },
  ]);
  return (
    <div>
      <Classroom students={students} setStudents={setStudents} />
      <StudentsNumber students={students} />
      <hr />
      <Count />
    </div>
  );
}

// Props -> Attributs de nos composants que l'on peut transmettre d'un composant à un autre
// 1. On peut faire passer les props d'un composant parent à un composant enfant
// 2. On peut transmettre les props d'un composant à un autre en déclenchant un évènement qui va permettre de modifier les props en commun
export default App;
