import Image from "next/image";
import BirthdayCard from "./BirthdayCard";
import Confetti from "./Confetti";


export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="flex flex-col items-center">
      <Image
          src="/miku-vocaloid.webp"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="slide-up"
        />
        <div className="slide-up text-4xl font-bold mt-8" style={{ color: "#f6851b" }}>
          HAPPY BIRTHDAY PLUE!!!!!!
        </div>
        {/* <Image
        src="/kirby.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
        className="slide-up"
        /> */}
        <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
          <Image
            src="/kirby.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            className="slide-up"
          />
        </a>
        <div className="slide-up" style={{ color: "#7a7876" }}>Click the kirby to make battle plans!!</div>
        <audio controls  autoPlay loop >
        <source src="/mikusong.mp3" type="audio/mp3" />
        </audio>
        <div className="slide-up" style={{ color: "#7a7876" }}>Best i could do with the time <b>;-;</b></div>
      </main>
      
    </div>
  );
}
