const StudentsNumber = ({ students }) => {
  const number = students.length;
  const phrase = `Il y a ${number} étudiantes dans cette classe.`;
  console.log("students", students);
  return (
    <div id="studentsNumber">
      <p>{phrase}</p>
    </div>
  );
};

export default StudentsNumber;
