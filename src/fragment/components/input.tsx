/* eslint-disable react/display-name */
import { CodeComponentMeta, useSelector } from "@plasmicapp/host";
import * as InputPrimitive from "@/components/ui/input";
import { HTMLInputTypeAttribute, RefAttributes, useState, useEffect } from "react";

type InputType = {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: any;
  disabled?: boolean;
  className?: string;
  name?: string;
  type?: HTMLInputTypeAttribute | "amount";
  attributes?: InputPrimitive.InputProps & RefAttributes<HTMLInputElement>;
  multiple?: boolean;
  accept?: string;
};

export const Input = (props: InputType) => {
  const {
    placeholder,
    value,
    onChange,
    disabled,
    className,
    name,
    type = "text",
    attributes,
    multiple,
    accept,
  } = props;

  const fragmentConfig = useSelector("Fragment");

  // حالت نمایش فرمت‌شده برای amount
  const [displayValue, setDisplayValue] = useState(value ?? "");

  useEffect(() => {
    if (type === "amount") {
      const raw = value?.toString().replace(/\D/g, "") || "";
      const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setDisplayValue(formatted);
    } else {
      setDisplayValue(value ?? "");
    }
  }, [value, type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    if (type === "amount") {
      // حذف هر چیزی جز عدد
      const raw = inputVal.replace(/\D/g, "");
      onChange?.(raw); // خروجی فقط عدد خام
      const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setDisplayValue(formatted);
    } else {
      onChange?.(inputVal);
      setDisplayValue(inputVal);
    }
  };

  return (
    <InputPrimitive.Input
      disabled={disabled}
      onChange={handleChange}
      value={displayValue}
      dir={type !== "text" && type !== "amount" ? "ltr" : fragmentConfig.rtl ? "rtl" : "ltr"}
      name={name}
      placeholder={placeholder}
      className={className}
      type={type === "amount" ? "text" : type}
      {...(type == "file" && {
        multiple,
        accept,
      })}
      {...attributes}
    />
  );
};

export const inputMeta: CodeComponentMeta<InputType> = {
  name: "Input",
  displayName: "Fragment/Input",
  importPath: "@/fragment/components/input",
  figmaMappings: [{ figmaComponentName: "Input" }],
  props: {
    placeholder: "string",
    value: {
      type: "string",
      defaultValue: "",
    },
    type: {
      type: "choice",
      options: [
        "text",
        "password",
        "hidden",
        "number",
        "date",
        "datetime-local",
        "time",
        "email",
        "tel",
        "file",
        "amount", // 🔥 حالت جدید
      ],
      defaultValue: "text",
      defaultValueHint: "text",
    },
    disabled: "boolean",
    multiple: {
      type: "boolean",
      hidden: (ps) => ps.type != "file",
    },
    accept: {
      type: "string",
      hidden: (ps) => ps.type != "file",
    },
    name: {
      type: "string",
      advanced: true,
      description: "The HTML name of the input",
    },
    attributes: {
      type: "object",
      advanced: true,
    },
    onChange: {
      type: "eventHandler",
      argTypes: [{ name: "value", type: "string" }],
    },
  },
  classNameProp: "className",
  defaultStyles: {
    width: "stretch",
  },
  states: {
    value: {
      type: "writable",
      variableType: "text",
      valueProp: "value",
      onChangeProp: "onChange",
    },
  },
};
