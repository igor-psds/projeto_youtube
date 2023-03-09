import { createContext, useContext } from "react";

export type MenuContext = {
    openMenu: boolean,
    setOpenMenu:(o: boolean) => void
}

export const GlobalMenuContext = createContext<MenuContext>({
    openMenu: true,
    setOpenMenu: () => {},
})

export const useGlobalMenuContext = () => useContext(GlobalMenuContext);