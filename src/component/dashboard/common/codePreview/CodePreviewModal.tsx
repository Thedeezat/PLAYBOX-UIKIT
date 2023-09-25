import React, { useState } from "react";
import "../../../../asset/sass/global.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SnackbarComponent from "../SnackbarPopup";
import { useItemContext } from "../context/AppContext";
import FolderIcon from "@mui/icons-material/Folder";
import DoneIcon from "@mui/icons-material/Done";

interface modalProps {
  modal: boolean;
  codeValue: string;
  setModal: (modal: boolean) => void;
}

export default function CodePreviewModal({ codeValue, setModal }: modalProps) {
  const { codeArray, setCodeArray, fileName, setFileName } = useItemContext();

  const handleClose = () => {
    setModal(false);
  };

  const [collectionName, setCollectionName] = useState("");
  const [saveCodeFolder, setSaveCodeFolder] = useState(false);
  const [openSnackbar, setOpenSnacbar] = useState(false);
  const [pickFolder, setPickFolder] = useState(false);
  const [createNewFolder, setCreateNewFolder] = useState(true);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [clickedCollectionName, setClickedCollectionName] = useState("");

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
        ? codeArray[existingIndex].files.concat([[fileName, codeValue]])
        : [[fileName, codeValue]];

    const newItem = {
      collectionName: collectionName,
      files: updatedFileCollection,
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
    setOpenSnacbar(true);

    // Reset form and states
    setTimeout(() => {
      setSaveCodeFolder(false);
      setCollectionName("");
      setFileName("ar7fght89mx0hji");
      setModal(false);
    }, 1300);
  };

  // Triggered when a collection name is clicked
  const handlePickFolder = (index: number, collectionName: string) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    setClickedCollectionName(collectionName);

    if (activeIndex === index) {
      setPickFolder(false);
    } else {
      setPickFolder(true);
    }
  };

  // Create new collection
  const handleNewFolder = () => {
    setCreateNewFolder(false);
  };

  // Save New file in existing component
  const handleExistingFolder = () => {
    if (pickFolder) {
      setSaveCodeFolder(true);
      setCollectionName(clickedCollectionName);
    }
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
          </div>
        ) : (
          <>
            {/* Create folder */}
            <div>
              {codeArray.length > 0 && createNewFolder ? (
                <>
                  <div className="component-collection-container">
                    <div className="component-collection__folders">
                      {codeArray.map((component, index) => (
                        <div
                          key={index}
                          onClick={() =>
                            handlePickFolder(index, component.collectionName)
                          }
                          className={`component-collection ${
                            activeIndex === index && "active-folder"
                          }`}
                        >
                          <FolderIcon
                            sx={{
                              width: "40px",
                              height: "40px",
                            }}
                            className="folderBox "
                          />
                          <div className="foler-ticked">
                            <DoneIcon
                              sx={{
                                width: "20px",
                                height: "20px",
                              }}
                              className="folder-ticked__icon"
                            />
                          </div>
                          <p>{component.collectionName}</p>
                        </div>
                      ))}
                    </div>
                    <div className="divider"></div>
                    {/* New collection */}
                    <div className="component-collection-container__bottomText ">
                      <p onClick={() => handleNewFolder()}>
                        {" "}
                        + Create new collection
                      </p>
                      <button
                        onClick={handleExistingFolder}
                        className={`${pickFolder && "saveButton-active"}`}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
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
                      className={`${
                        isCollectionNameEmpty ? "" : "input-active"
                      }`}
                      placeholder="Collection Name"
                      required
                    />
                    <button
                      type="submit"
                      className={`${
                        isCollectionNameEmpty ? "" : "buttoon-active"
                      }`}
                    >
                      Create
                    </button>
                  </form>
                </>
              )}
            </div>
            {/* End of create folder */}
          </>
        )}
      </div>

      <SnackbarComponent
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnacbar}
        snackbarMessage="Code Saved 🥳"
      />
    </div>
  );
}
