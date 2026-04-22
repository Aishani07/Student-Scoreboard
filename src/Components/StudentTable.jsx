import StudentRow from './StudentRow'

function StudentTable({ students, updateScore, removeStudent }) {
  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              index={index + 1}
              student={student}
              updateScore={updateScore}
              removeStudent={removeStudent}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable