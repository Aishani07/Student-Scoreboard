import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'
import StatsBar from './components/StatsBar'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aishani Das', score: 78 },
    { id: 2, name: 'Aditi Roy', score: 35 },
    { id: 3, name: 'Rohan Verma', score: 55 },
    { id: 4, name: 'Sneha Patel', score: 20 },
  ])

  const updateScore = (id, newScore) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, score: Number(newScore) } : student
    ))
  }

  const addStudent = (name, score) => {
    const newStudent = { id: Date.now(), name, score: Number(score) }
    setStudents([...students, newStudent])
  }

  const removeStudent = (id) => {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <div className="app-container">
      <Header />
      <StatsBar students={students} />
      <StudentTable students={students} updateScore={updateScore} removeStudent={removeStudent} />
      <AddStudentForm addStudent={addStudent} />
    </div>
  )
}

export default App