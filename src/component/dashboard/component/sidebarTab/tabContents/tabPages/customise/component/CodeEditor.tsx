import React, { useState } from "react";
import styles from "../custom.module.scss";
import Editor from "@monaco-editor/react";
import CodePreviewModal from "../../../../../../common/codePreview/CodePreviewModal";

interface CodeEditorProps {
  onChange: (label: string, value: string) => void;
  language: string;
  code: string;
  theme: string;
}
export default function CustomCodeEditor({
  onChange,
  language,
  code,
  theme,
}: CodeEditorProps) {
  const [value, setValue] = useState(code || "");
  const [modal, setModal] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModal(true);
  };
  const handleEditorChange = (value: string | undefined) => {
    setValue(value || "");
    if (onChange) {
      onChange("code", value || "");
    }
  };

  return (
    <div className={styles.custom_board}>
      <div className={styles.code_editor__header}>
        {/* code tabs */}
        <div className={styles.languageType__tab}>
          <p className={styles.header__tabs}>{language ? language : ""}</p>
        </div>
        {/* action tabs */}
        <div className={styles.action__tabs}>
          <p
            className={`${styles.header__tabs} ${styles.header__tabs__choose}`}
          >
            Choose File
          </p>
          <p
            className={`${styles.header__tabs} ${styles.header__tabs__save}`}
            onClick={handleModalOpen}
          >
            Save Component
          </p>
        </div>
      </div>
      {modal && (
        <CodePreviewModal modal={modal} setModal={setModal} codeValue={value} />
      )}

      {/* main editor */}
      <Editor
        className={styles.code_editor}
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue={"/** Add Code Here **/"}
        onChange={handleEditorChange}
        options={{
          autoIndent: "full",
          automaticLayout: true,
          colorDecorators: true,
          fontSize: 13,
          lineHeight: 24,
          contextmenu: true,
          minimap: {
            enabled: false,
          },
          wordWrap: "on",
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
    </div>
  );
}
