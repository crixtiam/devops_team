import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Sales COL";
  }, []);
  return (
    <div className="container mt-4">
      <h1>Index</h1>
    </div>
  );
};

export default Index;