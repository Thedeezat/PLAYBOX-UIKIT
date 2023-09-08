import React, { useState, useEffect } from "react";
import styles from "../../../files.module.scss";
interface ComponentType {
  collectionName: string;
  files: string[];
}
interface ComponentProps {
  openedCodeArray?: ComponentType;
  openedFile: string;
  editFile: boolean;
}

export default function EditFile({
  openedCodeArray,
  openedFile,
  editFile,
}: ComponentProps) {
  console.log(openedFile[0]);
  const [newFileName, setNewFileName] = useState("");

  useEffect(() => {
    setNewFileName(openedFile[0] || "");
  }, [openedFile]);

  const handleRenameFunction = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className={styles.editFile}>
      {editFile && (
        <>
          <span> {openedCodeArray && openedCodeArray.collectionName} </span>

          {"/ "}
          <form onSubmit={handleRenameFunction}>
            <input
              type="text"
              placeholder="Rename File Name"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              required
            />
            <button type="submit">Update</button>
          </form>
        </>
      )}
    </div>
  );
}
