import React, { useState } from "react";
import "../../../../asset/sass/global.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

interface modalProps {
  modal: boolean;
  codeValue: string;
  setModal: (modal: boolean) => void;
}

export default function CodePreviewModal({ codeValue, setModal }: modalProps) {
  const handleClose = () => {
    setModal(false);
  };
  const [collectionName, setCollectionName] = useState("");
  const [saveCodeFolder, setSaveCodeFolder] = useState(false);
  const [fileName, setFileName] = useState("ar7fght89mx0hji");

  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const handleInputChange = (e: any) => {
    setCollectionName(e.target.value);
  };
  const isCollectionNameEmpty = collectionName.trim() === "";

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSaveCodeFolder(true);
  };
  const handleFileForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const codeArray = [
      collectionName && collectionName,
      fileName && fileName,
      codeValue && codeValue,
    ];
    console.log(codeArray);
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

        {/* Create a folder */}
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
                  onChange={handleFileNameChange}
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
                  className={`submit-btn ${
                    fileName ? "" : "button-not-active"
                  }`}
                >
                  Save
                </button>
              </div>
            </form>
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
