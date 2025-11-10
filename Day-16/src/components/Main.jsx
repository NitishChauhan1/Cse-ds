// --- User's Main Component (with Random Code Generator) ---
const Main = () => {
  const [randomCode, setRandomCode] = useState("");

  // Function to generate a random alphanumeric code
  const generateRandomCode = () => {
    const length = 10;
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomCode(result);
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center p-8 sm:p-12 bg-gray-50 text-gray-800">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Random Code Generator</h2>
        <button
          onClick={generateRandomCode}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Generate Code
        </button>

        {/* Display the generated code */}
        {randomCode && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-inner border border-gray-200">
            <p className="text-lg font-medium text-gray-600 mb-2">Your Code:</p>
            <p className="font-mono text-3xl text-blue-800 break-all">
              {randomCode}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};
