function StatsBar({ students }) {
  const total = students.length
  const passed = students.filter(s => s.score >= 40).length
  const failed = total - passed
  const average = total === 0 ? 0 : (students.reduce((sum, s) => sum + s.score, 0) / total).toFixed(1)

  return (
    <div className="stats-bar">
      <div className="stat-card total">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Total Students</span>
      </div>
      <div className="stat-card avg">
        <span className="stat-number">{average}</span>
        <span className="stat-label">Class Average</span>
      </div>
      <div className="stat-card pass">
        <span className="stat-number">{passed}</span>
        <span className="stat-label">Passed</span>
      </div>
      <div className="stat-card fail">
        <span className="stat-number">{failed}</span>
        <span className="stat-label">Failed</span>
      </div>
    </div>
  )
}

export default StatsBar