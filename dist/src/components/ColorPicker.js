var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { DEFAULT_CONVERTER, converters } from "../utils/transformers";
import PickerDialog from "./PickerDialog";
const ColorPicker = (_a) => {
  var {
      onChange,
      convert = DEFAULT_CONVERTER,
      name,
      id,
      hintText,
      placeholder,
      floatingLabelText,
      label,
      value,
      defaultValue = "#000",
    } = _a,
    otherFields = __rest(_a, [
      "onChange",
      "convert",
      "name",
      "id",
      "hintText",
      "placeholder",
      "floatingLabelText",
      "label",
      "value",
      "defaultValue",
    ]);
  const [showPicker, setShowPicker] = useState(false);
  const defaultColor = useMemo(
    () => (value !== null && value !== void 0 ? value : defaultValue),
    [value, defaultValue],
  );
  const [color, setColor] = useState(defaultColor);
  const handleShowPicker = useCallback(() => setShowPicker(true), [setShowPicker]);
  const handleHidePicker = useCallback(() => setShowPicker(false), [setShowPicker]);
  useEffect(() => {
    setColor(defaultColor);
  }, [value, setColor, defaultColor]);
  const handleInputChange = useCallback(
    (event) => {
      setColor(event.target.value);
      onChange(event.target.value);
    },
    [setColor, onChange],
  );
  const handlePickerClick = useCallback(() => {
    handleHidePicker();
    onChange(color);
  }, [handleHidePicker, onChange]);
  const handlePickerChange = useCallback(
    (c) => {
      const newColor = converters[convert](c);
      setColor(newColor);
      onChange(newColor);
    },
    [setColor, onChange],
  );
  return _jsxs(_Fragment, {
    children: [
      _jsx(
        TextField,
        Object.assign(
          {
            name: name,
            id: id,
            label: floatingLabelText || label,
            value: color,
            placeholder: hintText || placeholder,
            onClick: handleShowPicker,
            onChange: handleInputChange,
            InputProps: {
              startAdornment: _jsx(
                InputAdornment,
                Object.assign(
                  { position: "start" },
                  {
                    children: _jsx(Box, {
                      sx: {
                        background: color,
                        border: "solid 1px",
                        borderColor: (theme) => theme.palette.divider,
                        width: 25,
                        height: 25,
                      },
                    }),
                  },
                ),
              ),
            },
          },
          otherFields,
        ),
      ),
      showPicker &&
        _jsx(PickerDialog, {
          value: color,
          onClick: handlePickerClick,
          onChange: handlePickerChange,
        }),
    ],
  });
};
export default ColorPicker;
