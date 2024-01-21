import { GlobalType } from "../reducers/global.state"
import { LanguageKeys } from "../../assets/locales"
import Mode from "model/ui/mode"

export const setLanguage = (data: LanguageKeys) => {
  return {
    type: GlobalType.SET_LANGUAGE,
    payload: data,
  }
}

export const setTheme = (data: any) => {
  return {
    type: GlobalType.SET_THEME,
    payload: data,
  }
}
