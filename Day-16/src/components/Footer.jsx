// --- User's Footer Component ---
const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 p-4 text-center text-sm rounded-b-lg">
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
};

// --- Main App Component ---
// This component renders all the other components together.
export default function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-gray-200 font-sans">
      <div className="w-full max-w-4xl mx-auto shadow-2xl rounded-lg">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
