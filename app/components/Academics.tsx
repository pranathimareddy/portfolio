const Academics = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electrical and ElectronicsEngineering",
      institution: "CVR COLLEGE OF ENGINEERING",
      year: "2021-2025",
      achievements: [
        "CGPA: 7.62",
        "Circuit Trouble Shont -Best Technical Event Organizer"
      ]
    },
    {
      INTMEDIATE: "Higher Secondary Education",
      field: "MPC",
      institution: "Narayana Junior College",
      year: "2019-2021",
      achievements: [
        "Percentage: 90.6%",
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
            <p className="text-gray-600 mb-2">{edu.field}</p>
            <p className="text-gray-600 mb-4">{edu.institution}</p>
            <p className="text-gray-600 mb-4">{edu.year}</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Achievements</h4>
              <ul className="list-disc list-inside text-gray-600">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;
