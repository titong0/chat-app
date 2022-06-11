import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeChanger = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="fixed top-3 right-3"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <BsMoonFill className="text-blue-500" size="35" />
      ) : (
        <BsSunFill className="text-amber-200" size="35" />
      )}
    </button>
  );
};

export default ThemeChanger;
