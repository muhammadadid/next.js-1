import axios from "axios";
export async function getServerSideProps() {
  const resp = await axios.get(
    "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
    {
      headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
    }
  );
  return {
    props: {
      menus: resp.data.data,
    },
  };
}
const HalamanUtamaVersiServer = ({ menus }) => {
  return (
    <div>
      <h1>Halaman Utama Server</h1>
      {menus.map((menu) => (
        <div
          className="max-w-sm pt-2 pl-5 mb-5 overflow-hidden bg-blue-300 rounded shadow-lg"
          key={menu.id}
        >
          <h1>{menu.name}</h1>
          <p>{menu.description}</p>
          <img className="w-32" src={menu.imageUrl} alt={menu.name} />
        </div>
      ))}
    </div>
  );
};
export default HalamanUtamaVersiServer;
