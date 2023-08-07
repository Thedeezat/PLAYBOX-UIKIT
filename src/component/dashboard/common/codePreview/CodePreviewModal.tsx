import React, { useState } from "react";
import "../../../../asset/sass/global.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SnackbarComponent from "../SnackbarPopup";
import { useItemContext } from "../context/AppContext";

interface modalProps {
  modal: boolean;
  codeValue: string;
  setModal: (modal: boolean) => void;
}

export default function CodePreviewModal({ codeValue, setModal }: modalProps) {
  const { codeArray, setCodeArray } = useItemContext();

  const handleClose = () => {
    setModal(false);
  };
  const [collectionName, setCollectionName] = useState("");
  const [saveCodeFolder, setSaveCodeFolder] = useState(false);
  const [fileName, setFileName] = useState("ar7fght89mx0hji");
  const [fileCollection, setFileCollection] = useState<string[]>([fileName]);
  const [openSnackbar, setOpenSnacbar] = useState(false);

  const handleInputChange = (e: any) => {
    setCollectionName(e.target.value);
  };
  const isCollectionNameEmpty = collectionName.trim() === "";

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSaveCodeFolder(true);
  };

  // Create Folder function
  const handleFolderName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  // Create File function
  const handleFileForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingIndex = codeArray.findIndex(
      (item) => item.collectionName === collectionName
    );

    const updatedFileCollection =
      existingIndex !== -1
        ? Array.from(new Set([...fileCollection, fileName]))
        : [fileName];

    const newItem = {
      collectionName: collectionName,
      fileNames: updatedFileCollection,
      codeValue: codeValue,
    };

    const updatedCodeArray =
      existingIndex !== -1
        ? [
            ...codeArray.slice(0, existingIndex),
            newItem,
            ...codeArray.slice(existingIndex + 1),
          ]
        : [...codeArray, newItem];

    setCodeArray(updatedCodeArray);
    setFileCollection(updatedFileCollection);

    setOpenSnacbar(true);

    // Reset form and states
    setTimeout(() => {
      setSaveCodeFolder(false);
      setCollectionName("");
      setFileName("ar7fght89mx0hji");
    }, 1000);
  };

  return (
    <div className="modal-overlay codePreview-overlay">
      <div className="modal-bg" onClick={handleClose}></div>
      {/* Close */}
      <div className="modal codePreview-modal">
        <div className="codepreview-header">
          <h2>Save component</h2>
          <div className="codepreview__menu-btn" onClick={handleClose}>
            <span className="codepreview-line"></span>
            <span className="codepreview-line"></span>
          </div>
        </div>

        {/* Create a component */}
        {saveCodeFolder ? (
          <div className="createFile">
            <div className="folder-options">
              <span className="folderBox"></span>
              <p>{collectionName && collectionName}</p>
            </div>
            <form className="createFile__form" onSubmit={handleFileForm}>
              <div className="createFile__input-container">
                <label htmlFor="componenet-name"></label>
                <ArrowDropDownIcon fontSize="large" className="arrow-icon" />
                <input
                  type="text"
                  value={fileName}
                  id="componenet-name"
                  className={`${fileName ? "inputActive" : ""}`}
                  onChange={handleFolderName}
                  placeholder="Component Name"
                  required
                />
                <ModeEditIcon
                  fontSize="large"
                  sx={{
                    width: "18px",
                    height: "18px",
                  }}
                  className="edit-icon"
                />
              </div>
              <div className="submit-btn-container">
                <button
                  type="submit"
                  className={`submit-btn ${
                    fileName ? "" : "button-not-active"
                  }`}
                >
                  Save
                </button>
              </div>
            </form>
            <SnackbarComponent
              openSnackbar={openSnackbar}
              setOpenSnackbar={setOpenSnacbar}
              snackbarMessage="Code Saved 🥳"
            />
          </div>
        ) : (
          <>
            {/* Create folder */}
            <div>
              <div className="codepreview__intro">
                <h3>Start your collection</h3>
                <p>Use collections to save components for use</p>
              </div>
              <div className="divider"></div>
              <form className="form" onSubmit={handleForm}>
                <input
                  type="text"
                  value={collectionName}
                  onChange={handleInputChange}
                  className={`${isCollectionNameEmpty ? "" : "input-active"}`}
                  placeholder="Collection Name"
                  required
                />
                <button
                  type="submit"
                  className={`${isCollectionNameEmpty ? "" : "buttoon-active"}`}
                >
                  Create
                </button>
              </form>
            </div>
            {/* End of create folder */}
          </>
        )}
      </div>
    </div>
  );
}
