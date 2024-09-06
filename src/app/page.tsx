import Image from "next/image";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";
import Checkout from "@/app/checkout/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Checkout />
    </div>
  );
}
