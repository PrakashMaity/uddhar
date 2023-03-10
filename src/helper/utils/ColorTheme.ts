import { styleConst } from "../../theme/root.style";

export const boxThemeChanger = (themeData: string) => {
  if (themeData === "VIOLET") {
    return {
      iconColor: styleConst.COLOR.VIOLET.VIOLET_100,
      boxColor: styleConst.COLOR.VIOLET.VIOLET_20,
    };
  } else if (themeData === "RED") {
    return {
      iconColor: styleConst.COLOR.RED.RED_100,
      boxColor: styleConst.COLOR.RED.RED_20,
    };
  } else if (themeData === "GREEN") {
    return {
      iconColor: styleConst.COLOR.GREEN.GREEN_100,
      boxColor: styleConst.COLOR.GREEN.GREEN_20,
    };
  } else if (themeData === "YELLOW") {
    return {
      iconColor: styleConst.COLOR.YELLOW.YELLOW_100,
      boxColor: styleConst.COLOR.YELLOW.YELLOW_20,
    };
  } else {
    return {
      iconColor: styleConst.COLOR.BLUE.BLUE_100,
      boxColor: styleConst.COLOR.BLUE.BLUE_20,
    };
  }
};
