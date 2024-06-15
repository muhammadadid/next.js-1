import { useRouter } from "next/router";

const DetailProduck = () => {
  const router = useRouter();
  const { namaProduck } = router.query;
  return (
    <div>
      <h1>{namaProduck}</h1>
    </div>
  );
};
export default DetailProduck;
