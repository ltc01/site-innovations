import React from 'react';

function Achievements() {
  const achievements = [
    { id: 1, name: 'JavaScript Certification' },
    { id: 2, name: 'React Badge' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Achievements</h2>
      <ul>
        {achievements.map((achievement) => (
          <li key={achievement.id} className="mb-2">
            {achievement.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
