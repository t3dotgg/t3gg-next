import Page from "../components/page";
import Image from "next/image";
import Logo from "../assets/t3-block.svg";

export default function Home() {
  return (
    <Page>
      <div className="bg-gray-900 bg-gradient-to-tr from-gray-900 to-gray-800">
        <div className="flex flex-col min-h-screen animate-fade-in-down text-gray-200 relative">
          <div className="top-0 sticky px-2 py-2 bg-gray-800 flex justify-between items-center shadow-lg z-50 w-full">
            <Image
              loading="eager"
              src={Logo}
              alt="logo"
              width={60}
              height={60}
            />
          </div>
          <div className="py-4" />
          <div className="flex flex-col p-8 max-w-5xl">Welcome to T3 Tools</div>
        </div>
      </div>
    </Page>
  );
}
