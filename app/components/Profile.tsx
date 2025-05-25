const Profile = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center py-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="rounded-full overflow-hidden shadow-lg">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-64 h-64 object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pranathi Mareddy</h1>
          <p className="text-xl text-gray-600 mb-6">Full Stack Developer</p>
          <p className="text-gray-700 mb-8">
            Passionate about building scalable and user-friendly applications. Expert in modern web technologies and cloud solutions.
          </p>
          <div className="flex space-x-4">
            <a href="mailto:mareddypranathireddy@gmail.com" className="text-blue-500 hover:text-blue-700">Email</a>
            <a href="https://www.linkedin.com/in/mareddy-pranathi-reddy-33ab8a255/" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
            <a href="https://leetcode.com/u/pranathi_123/" className="text-blue-500 hover:text-blue-700">Leetcode</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
