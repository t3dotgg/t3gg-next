import Page from "../components/page";
import Image from "next/image";
import Logo from "../assets/t3-block.svg";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <div className="bg-gray-900 bg-gradient-to-tr from-gray-900 to-gray-800">
        <div className="flex flex-col items-center min-h-screen animate-fade-in-down text-gray-200 relative">
          <div
            className="flex flex-col justify-center items-center py-8 px-4 max-w-5xl"
            style={{ fontFamily: "Inter" }}
          >
            <Image src={Logo} className="rounded-xl" />
            <div className="text-4xl mt-4 font-medium">Welcome to T3 Tools</div>
            <div className="my-4" />
            <p>We're just getting started :)</p>
            <p>
              Started by{" "}
              <Link href="/me">
                <a>Theo</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
