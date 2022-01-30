import { useState } from "react";
import Blog from "./components/Blog";
import Counter from "./components/Counter";
import Post from "./components/Post";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-6">
      <Counter />
      <Post title="SSPŠ" text="Naší vizí je vzdělávání pro budoucnost, kde studenti nejsou pouze pasivními příjemci informací." id={2} />

      <button onClick={() => setShowComponent(!showComponent)} className="border border-black bg-white p-2 ">
        Show Component
      </button>
      {showComponent && <Blog />}
    </div>
  );
}

export default App;
