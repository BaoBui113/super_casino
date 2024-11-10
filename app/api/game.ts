import { BRAND_ID } from "../constant";
import { customFetch } from "../helper/customFetch";
import { GameRunProps } from "../type";

export const handleGameRun = async (data: GameRunProps) => {
  return await customFetch("/game-run", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      brand_id: BRAND_ID,
      game_id: data.game_id,
      mobile: data.mobile,
    }),
  });
};
