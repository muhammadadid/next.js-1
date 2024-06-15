import Link from "next/link";
import { Router } from "next/router";

export default function Home() {
 const handleClickMauBayar = () => {
   Router.push("/shop/checkOut")
 }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/shop/sepatu-lari">Sepatu-lari</Link>
      <button onClick={handleClickMauBayar}>Mau Bayar</button>
    </div>
  );
}
