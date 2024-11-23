import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./Product";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <Product />
      <Footer />
      <div
        className={`fixed bottom-10 right-10 w-12 h-12 rounded-full font-semibold flex items-center justify-center cursor-pointer ${
          darkMode ? "bg-blue-300 text-black" : " bg-black text-white"
        }`}
        onClick={() => handleDarkMode()}
      >
        {darkMode ? "Light" : "Dark"}
      </div>
    </div>
  );
}

export default App;
