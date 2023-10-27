import { Dimensions, Platform } from "react-native";

export const { width, height } = Dimensions.get("window");
export const SPACING = 10;
export const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = height * 0.65;

export const HEIGHT_BAR = 220;
export const BORDER_RADUIS_BAR = 25;

export const imageW = width * 0.7;
export const imageH = imageW * 1.54;