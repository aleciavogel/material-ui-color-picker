import { FC } from "react";
import { TextFieldProps } from "@mui/material";
import { ConverterType } from "../index";
export interface ColorPickerProps {
  convert?: ConverterType;
  name?: string;
  id?: string;
  defaultValue?: string;
  value?: string;
  hintText?: string;
  placeholder?: string;
  label?: string;
  floatingLabelText?: string;
  onChange: (color: string) => void;
}
declare const ColorPicker: FC<Omit<TextFieldProps, "onChange"> & ColorPickerProps>;
export default ColorPicker;
