import axios from "axios";
import { useEffect, useState } from "react";

const listPage = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMenu = () => {
    axios
      .get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
        headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
      })
      .then((resp) => {
        console.log(resp.data.data);
        setMenu(resp.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMenu();
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1>List Page</h1>
      {menu.map((menu) => (
        <div
          className="max-w-sm pt-2 pl-5 mb-5 overflow-hidden bg-blue-300 rounded shadow-lg"
          key={menu.id}
        >
          <img className="w-32 rounded-full" src={menu.imageUrl} alt="" />
          <h1>{menu.name}</h1>
          <p>{menu.description}</p>
        </div>
      ))}
    </div>
  );
};
export default listPage;
