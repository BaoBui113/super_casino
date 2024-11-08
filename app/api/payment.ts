import { BRAND_ID } from "../constant";
import { customFetch } from "../helper/customFetch";
import { IDepositProps } from "../type";

export const handleDeposit = async (data: IDepositProps) => {
  return await customFetch("/deposit", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      brand_id: BRAND_ID,
      amount: data.amount,
      deposit_name: data.deposit_name,
      game_id: data.game_id,
      user_remark: data.comment,
    }),
  });
};

export const handleWithDraw = async (data: IDepositProps) => {
  return await customFetch("/withdraw", {
    method: "POST",
    body: JSON.stringify({
      username: data.username,
      brand_id: BRAND_ID,
      amount: data.amount,
      deposit_name: data.deposit_name,
      game_id: data.game_id,
      user_remark: data.comment,
    }),
  });
};
