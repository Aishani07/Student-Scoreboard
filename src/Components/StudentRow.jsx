import { useState } from 'react'

function StudentRow({ index, student, updateScore }) {
  const [inputScore, setInputScore] = useState(student.score)

  const handleUpdate = () => {
    if (inputScore === '' || isNaN(inputScore)) return
    updateScore(student.id, inputScore)
  }

  const isPassing = student.score >= 40

  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        <span className={isPassing ? 'status pass' : 'status fail'}>
          {isPassing ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td className="update-cell">
        <input
          type="number"
          value={inputScore}
          onChange={(e) => setInputScore(e.target.value)}
          className="score-input"
          min="0"
          max="100"
        />
        <button onClick={handleUpdate} className="btn-update">Update</button>
      </td>
    </tr>
  )
}

export default StudentRow