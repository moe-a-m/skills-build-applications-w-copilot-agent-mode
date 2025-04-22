import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://redesigned-spork-g6pj46rr9hpp6x-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Teams</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>{Array.isArray(team.members) ? team.members.map(m => m.username || m).join(', ') : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
