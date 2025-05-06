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
        <div
          className="h-full w-full min-h-dvh"
          style={{
            backgroundImage: `url("/images/bg.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Overview />
          <Voucher />
          <DirectTopUp />
          <Support />
          <PromotionCode />
        </div>
      </main>
      <Footer />
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
