import { IconHolder } from "components/layout";
import React, { useState, useEffect, useRef } from "react";
import { CustomFieldset, SelectOptionList, SelectWrapper } from "./styles";

type OptionType = {
  label: string;
  value: string;
};

type Props = {
  options: OptionType[];
  label: string;
  onChange: (value: OptionType | null) => void;
};

export const SelectWithAutocomplete: React.FC<Props> = ({
  options,
  label,
  onChange,
}) => {
  const [value, setValue] = useState<OptionType | null>(null);
  const [inputValue, setInputValue] = useState("");
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
    setInputValue(newValue);

    if (newValue === "") {
      setValue(null);
      onChange(null);
    }
  };

  const handleOptionClick = (option: OptionType) => {
    console.log(option);

    setValue(option);
    setInputValue(option.label);
    setOpen(false);
    onChange(option);
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
