import { useState, useEffect } from "react";
import styles from "./custom.module.scss";
import CustomCodeEditor from "./component/CodeEditor";
import LanguageDropdown from "./component/LanguageDropdown";
import ThemeDropdown from "./component/ThemeDropdown";
import { LanguageOptions } from "./constants/languageOption";
import { ToastContainer, toast } from "react-toastify";
import { defineTheme } from "./lib/defineTheme";

const javascriptDefault = `/** Add Code Here **/`;

export default function Custom() {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(LanguageOptions[0].value);

  const onSelectChange = (value: any) => {
    setLanguage(value);
  };

  const onChange = (action: string, data: string) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  function handleThemeChange(theme: { value: string; label: string }) {
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme.value);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme.value));
    }
  }

  useEffect(() => {
    defineTheme("clouds-midnight").then((_) => setTheme("clouds-midnight"));
  }, []);

  return (
    <section className={styles.custom}>
      <div className={styles.custom_heading}>
        <h3 className={styles.custom_heading_intro}>
          {" "}
          Create custom components{" "}
        </h3>
        {/* list  */}
        <div className={styles.recentComponents_container}>
          <p className={styles.recentComponents__head}>
            Choose tools to work with
          </p>
          <LanguageDropdown
            onSelectChange={onSelectChange}
            selectedValue={language}
          />
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>

        {/* theme */}
      </div>
      {/* Code Editor */}
      <CustomCodeEditor
        code={code}
        onChange={onChange}
        language={language}
        theme={theme}
      />
    </section>
  );
}
