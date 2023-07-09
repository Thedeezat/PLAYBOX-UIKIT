import React from "react";
import styles from "../custom.module.scss";
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist.json";

interface Option {
  value: string;
  label: string;
}

interface ThemeDropdownProps {
  handleThemeChange: (theme: { value: string; label: string }) => void;
  theme: string;
}

export default function ThemeDropdown({
  handleThemeChange,
  theme,
}: ThemeDropdownProps) {
  const themeOptions: Option[] = Object.entries(monacoThemes).map(
    ([themeId, themeName]) => ({
      label: themeName,
      value: themeId,
    })
  );

  const handleSelectChange = (selectedOption: Option | null) => {
    if (selectedOption && selectedOption.value) {
      handleThemeChange({ value: selectedOption.value, label: "" });
    }
  };

  return (
    <div>
      <Select
        placeholder="Select Theme"
        className={styles.dropdown}
        options={themeOptions}
        value={themeOptions.find((option) => option.value === theme)}
        onChange={handleSelectChange}
      />
    </div>
  );
}
