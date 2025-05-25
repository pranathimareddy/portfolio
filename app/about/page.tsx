import Navbar from '../components/Navbar';

const About = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Goals</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Become an expert in full-stack development</li>
              <li>Contribute to open-source projects</li>
              <li>Lead technical teams and mentor junior developers</li>
              <li>Stay updated with latest web technologies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hobbies & Interests</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Reading technical books and articles</li>
              <li>Playing chess</li>
              <li>Learning new programming languages</li>
              <li>Contributing to tech communities</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2"></h4>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Earned a Gold Badge in Python </h4>
                <p className="text-gray-600">Issued by HackerRank</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Certificate of Accomplishment – Problem solving </h4>
                <p className="text-gray-600">Issued by HackerRank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
