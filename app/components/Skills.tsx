const Skills = () => {
  const skillCategories = {
    Programming: ['Python', 'JavaScript', 'C Programing'],
    Frontend: ['React', 'Tailwind CSS', 'HTML5'],
    Backend: ['Node.js', 'MongoDB', 'SQL'],
    Tools:['Machine Learning','AI'],
    Other: ['Problem Solving', 'Teamwork', 'Communication']
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
