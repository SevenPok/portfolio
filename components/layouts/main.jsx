import Navbar from "../navbar";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Main;
