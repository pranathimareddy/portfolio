import Navbar from './components/Navbar';
import Profile from './components/Profile';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Profile />
    </main>
  );
}
