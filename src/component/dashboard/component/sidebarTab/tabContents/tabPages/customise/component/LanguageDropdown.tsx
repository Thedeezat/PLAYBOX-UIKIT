import React from "react";
import styles from "../custom.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Select from "react-select";
import { LanguageOptions } from "../constants/languageOption";

interface Option {
  value: string;
  label: string;
}
interface Props {
  onSelectChange: (value: string) => void;
  selectedValue: string;
}

export default function LanguageDropdown({
  onSelectChange,
  selectedValue,
}: Props) {
  const handleSelectChange = (selectedOption: Option | Option[] | null) => {
    if (selectedOption) {
      const value = Array.isArray(selectedOption)
        ? selectedOption[0].value
        : selectedOption.value;
      onSelectChange(value);
    }
  };
  return (
    <div>
      <Select
        className={styles.dropdown}
        placeholder={`Filter By Category`}
        options={LanguageOptions}
        defaultValue={LanguageOptions[0]}
        value={LanguageOptions.find((option) => option.value === selectedValue)}
        onChange={handleSelectChange}
      />
    </div>
  );
}
