import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChromePicker } from "react-color";
import Box from "@mui/material/Box";
const PickerDialog = ({ value, onClick, onChange }) =>
  _jsx(
    Box,
    Object.assign(
      { sx: { position: "relative" } },
      {
        children: _jsxs(
          Box,
          Object.assign(
            { sx: { position: "absolute", zIndex: "2" } },
            {
              children: [
                _jsx(Box, {
                  sx: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px" },
                  onClick: onClick,
                }),
                _jsx(ChromePicker, { color: value, onChange: onChange }),
              ],
            },
          ),
        ),
      },
    ),
  );
export default PickerDialog;
