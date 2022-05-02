import { FC, MouseEvent } from "react";
import { ColorResult } from "react-color";
interface PickerDialogProps {
  value?: string;
  onChange?: (r: ColorResult) => void;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}
declare const PickerDialog: FC<PickerDialogProps>;
export default PickerDialog;
