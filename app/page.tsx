import DirectTopUp from "./components/DirectTopUp/DirectTopUp";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";
import PromotionCode from "./components/PromotionCode/PromotionCode";
import Support from "./components/Support/Support";
import Voucher from "./components/Voucher/Voucher";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar />
      <main>
        <div className="h-full w-full min-h-dvh">
          <Overview />
          <Voucher />
          <DirectTopUp />
          <Support />
          <PromotionCode />
        </div>
      </main>
      <Footer />
    </div>
  );
}
