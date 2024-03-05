import { useState } from "react";
import { SideMenuItem } from "./types";

const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) {
    return;
  }
  callBack();
  setHasBeenCalled(true);
};

const resolveMenuFromRoutes = (menus:Array<SideMenuItem>) => {
    console.log(window.location.hash.replace('#',''))
    console.log(menus.filter((item) => item.path == window.location.hash)[0])
    return menus.filter((item) => item.path == window.location.hash.replace('#',''))[0]
}

export {useConstructor,resolveMenuFromRoutes}