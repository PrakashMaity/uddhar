import { responsiveHeight, responsiveWidth } from "../helper/ResponsiveUI";

export const styleConst = {
  COLOR: {
    LIGHT: {
      LIGHT_20: "#E3E5E5",
      LIGHT_40: "#F2F4F5",
      LIGHT_60: "#F7F9FA",
      LIGHT_80: "#FBFBFB",
      LIGHT_100: "#E3E5E5",
    },
    DARK: {
      DARK_25: "#292B2D",
      DARK_50: "#464A4D",
      DARK_75: "#161719",
      DARK_100: "#0D0E0F",
    },
    VIOLET: {
      VIOLET_20: "#EEE5FF",
      VIOLET_40: "#D3BDFF",
      VIOLET_60: "#B18AFF",
      VIOLET_80: "#8F57FF",
      VIOLET_100: "#7F3DFF",
    },
    RED: {
      RED_20: "#FDD5D7",
      RED_40: "#FDA2A9",
      RED_60: "#FD6F7A",
      RED_80: "#FD5662",
      RED_100: "#FD3C4A",
    },
    GREEN: {
      GREEN_20: "#CFFAEA",
      GREEN_40: "#93EACA",
      GREEN_60: "#65D1AA",
      GREEN_80: "#2AB784",
      GREEN_100: "#00A86B",
    },
    YELLOW: {
      YELLOW_20: "#FCEED4",
      YELLOW_40: "#FCDDA1",
      YELLOW_60: "#FCCC6F",
      YELLOW_80: "#FCBB3C",
      YELLOW_100: "#FCAC12",
    },
    BLUE: {
      BLUE_20: "#BDDCFF",
      BLUE_40: "#8AC0FF",
      BLUE_60: "#57A5FF",
      BLUE_80: "#248AFF",
      BLUE_100: "#0077FF",
    },
    GREY: {
      GREY_20: "#C0C0C0"
    }
  },
  FONT_SIZE: {
    TITLE_X: responsiveHeight(64),
    TITLE_1: responsiveHeight(32),
    TITLE_2: responsiveHeight(24),
    TITLE_3: responsiveHeight(18),
    REGULAR_1: responsiveHeight(16),
    REGULAR_2: responsiveHeight(16),
    REGULAR_3: responsiveHeight(14),
    SMALL: responsiveHeight(13),
    TINY: responsiveHeight(12),
  },
  FONT_FAMILY: {
    PRIMARY: "Inter-Regular",
    INTER_SEMIBOLD: "Inter-SemiBold",
    INTER_BOLD: "Inter-Bold",
  },
  PADDING: {
    PADDING_HORIZONTAL: responsiveWidth(10),
    PADDING_VERTICAL: responsiveHeight(10),
  },
  MARGIN: {
    MARGIN_HORIZONTAL: responsiveWidth(15),
    MARGIN_VERTICAL: responsiveHeight(10),
  },
};
