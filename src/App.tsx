import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./pages/products/Product";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <div
        className="dark:bg-black px-2.5 my-4 py-1 bg-orange-300 w-fit rounded-lg m-auto cursor-pointer hover:bg-orange-500 transition-all ease-in-out duration-200 text-white "
        onClick={() => setShowProduct(!showProduct)}
      >
        {showProduct ? "Hidden" : "Show Product"}
      </div>
      {showProduct ? (
        <Product />
      ) : (
        <div className="text-center">Product is empty!!</div>
      )}
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
