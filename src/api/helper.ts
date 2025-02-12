import { LetterHead } from "@/schema/letter";
import { axiosWithCredentials } from "./axios";
import { Response } from "./types/api.types";

export const getLetterHead = async ({ id }: { id: string }) => {
  const response = await axiosWithCredentials.post<Response<LetterHead>>(
    "/letterhead/get",
    { id }
  );
  return response.data.data;
};
