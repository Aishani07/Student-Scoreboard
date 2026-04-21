import { useState } from 'react'

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || score === '') return
    addStudent(name.trim(), score)
    setName('')
    setScore('')
  }

  return (
    <div className="form-wrapper">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Score</label>
          <input
            type="number"
            placeholder="Enter score (0-100)"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            min="0"
            max="100"
            required
          />
        </div>
        <button type="submit" className="btn-add">➕ Add Student</button>
      </form>
    </div>
  )
}

export default AddStudentForm