import { LangContext } from "../contexs/lang";
import { useContext } from "react";

export const useLang = () => {
    const {lang, setLang} = useContext(LangContext)
    return [lang, setLang]
}