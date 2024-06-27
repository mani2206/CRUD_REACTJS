import { useContext } from "react";
import { GlobalContext } from "../AppContext";

export const useGlobalContext = () => useContext(GlobalContext);
