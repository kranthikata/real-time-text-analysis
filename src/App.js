import RealTimeAnalysis from "./components/RealTimeAnalysis";

function App() {
  return (
    <div className="text-center container mx-auto p-4 xl:h-screen bg-gray-700">
      <h1 className="text-5xl font-bold mb-12 font-mono text-gray-200">
        Real-Time Text Analysis
      </h1>
      <RealTimeAnalysis />
    </div>
  );
}

export default App;
