import React, { useState, useEffect, useRef } from "react";
import styles from "../../../files.module.scss";
import { useItemContext } from "../../../../../../../../common/context/AppContext";
import SnackbarComponent from "../../../../../../../../common/SnackbarPopup";

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
  const { newFileName, setNewFileName } = useItemContext();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const updatedFileArray = [openedFile];
  const updatedFileName = [...updatedFileArray];
  let NewName = updatedFileName[0][0];

  const handleRenameFunction = (e: any) => {
    e.preventDefault();
    setOpenSnackbar(true);
    NewName = newFileName;
    setNewFileName(NewName);
  };

  useEffect(() => {
    setNewFileName(NewName);
  }, [NewName]);

  return (
    <>
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
      <SnackbarComponent
        setOpenSnackbar={setOpenSnackbar}
        openSnackbar={openSnackbar}
        snackbarMessage="The snippet name has been updated"
      />
    </>
  );
}
