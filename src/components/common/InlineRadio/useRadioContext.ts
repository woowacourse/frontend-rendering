import { useContext } from "react";
import { RadioContext } from "./radioContext";
import { ERROR } from "@/constants";

export const useRadioContext = () => {
  const value = useContext(RadioContext);

  if (!value) throw new Error(ERROR.radioContext);

  return value;
};
