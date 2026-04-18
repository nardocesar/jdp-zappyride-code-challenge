import { IconHolder } from "components/layout";
import { useFormikContext } from "formik";
import React, { useState, useEffect, useRef } from "react";
import { CustomFieldset, SelectOptionList, SelectWrapper } from "./styles";

type OptionType = {
  label: string;
  value: string;
};

type Props = {
  options: OptionType[];
  label: string;
  onChange: (fieldName: string, value: string) => void;
  fieldName: string;
};

export const SelectWithAutocomplete: React.FC<Props> = ({
  options,
  label,
  onChange,
  fieldName,
}) => {
  const { values } = useFormikContext<any>();
  const selectedOption =
    options.find((option) => option.value === values[fieldName])?.label || "";
  const [inputValue, setInputValue] = useState(selectedOption);
  const [open, setOpen] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    onChange(fieldName, newValue);
    setInputValue(newValue);

    if (newValue === "") {
      onChange(fieldName, "");
    }
  };

  const handleOptionClick = (option: OptionType) => {
    setInputValue(option.label);
    setOpen(false);
    onChange(fieldName, option.value);
  };

  const handleInputFocus = () => {
    setOpen(true);
  };

  const matchingOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <SelectWrapper ref={optionsRef}>
      <CustomFieldset>
        <legend>{label}</legend>
        <input
          type="text"
          value={inputValue}
          name={fieldName}
          onChange={handleOnChange}
          onFocus={handleInputFocus}
        />
        {open && matchingOptions.length > 0 && (
          <SelectOptionList>
            {matchingOptions.map((option) => (
              <li key={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
              </li>
            ))}
          </SelectOptionList>
        )}
      </CustomFieldset>

      <IconHolder size={14} icon="/icons/chevron-down.svg" />
    </SelectWrapper>
  );
};
