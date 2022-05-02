import { ConverterType } from "../index";
import { ColorResult } from "react-color";
export declare const DEFAULT_CONVERTER: ConverterType;
export declare const converters: {
  [key in ConverterType]: (c: ColorResult) => string;
};
export default converters;
