import React from "react";
import bg_game from "@/app/assets/images/bg-game.png";
import Image from "next/image";
import game1 from "@/app/assets/images/game1.png";
import game2 from "@/app/assets/images/game2.png";
import game3 from "@/app/assets/images/game3.png";
import game4 from "@/app/assets/images/game4.png";
import InformationGameItem from "../InforGameItem";
import ContainerBackground from "../ContainerBackground";
import BetGame from "../BetGame";
const list_games = [
  {
    id: 1,
    img: game1,
    title: "Casino Game",
    value: "hogaming",
    tags: ["CARDGAME", "ONLINE", "CASINO"],
  },
  {
    id: 2,
    img: game2,
    title: "Slot Game",
    value: "evolution",
    tags: ["JACKPOT", "SLOT", "BACARA"],
  },

];
export default function ListGame() {
  return (
    <div className="relative w-full min-h-[200px]">
      <Image src={bg_game} alt="bg_game" fill className="object-cover" />
      <ContainerBackground classNames=" py-[40px] relative">
        <div className="grid grid-cols-12 gap-12">
          {list_games.map((game, index) => {
            return (
              <div key={index} className="xl:col-span-6 col-span-12">
                <InformationGameItem
                  value={game.value}
                  img={game.img}
                  title={game.title}
                  tags={game.tags}
                  id={game.id}
                />
              </div>
            );
          })}
        </div>
      </ContainerBackground>
    </div>
  );
}
