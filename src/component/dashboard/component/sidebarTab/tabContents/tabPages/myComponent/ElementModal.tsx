import { useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Modaltooltip from "../../../../../common/Modaltooltip";

import SnackbarComponent from "../../../../../common/SnackbarPopup";

interface ImageTextObject {
  image: string;
  text: string;
  sourceCode: string;
}
interface ElementContextProps {
  imageTextArray: ImageTextObject[];
}

type frameworkOption = {
  label: string;
  value: string;
};
export default function ElementModal({
  imageTextArray,
}: ElementContextProps): JSX.Element {
  const [modal, setModal] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [activeComponent, setActiveComponent] =
    useState<ImageTextObject | null>(null);

  const reactOptions: frameworkOption[] = [
    { label: "JavaScript", value: "JavaScript" },
    { label: "TypeScript", value: "Typescript" },
    { label: "HTML", value: "HTMl" },
  ];

  // Modal
  const handleClick = (element: ImageTextObject) => {
    setModal(true);
    setActiveComponent(element);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <div className="layout_component_wrapper">
        {imageTextArray.map((element, index) => (
          <section key={index}>
            <div
              className="layout_component"
              onClick={() => handleClick(element)}
            >
              <div className="layout_component__inner">
                <>
                  <img src={`${element.image}`} alt="" />
                  <span className="layout_component__text">{element.text}</span>
                </>
              </div>
            </div>
            {/* Modal */}
            {modal && activeComponent && activeComponent == element && (
              <>
                <div className="modal-overlay">
                  <div className="modal-bg" onClick={handleClose}></div>
                  <div className="modal">
                    {/* Heading */}
                    <section className="modal-heading">
                      <div className="modal-heading_inner">
                        <h4 className="modal-intro">Generate code</h4>
                        <div className="modal-cancel-btn" onClick={handleClose}>
                          <span className="cancel-line"></span>
                          <span className="cancel-line"></span>
                        </div>
                      </div>
                    </section>

                    {/* Code preview */}
                    <div className="modalPreview">
                      <div className="modalPreview__code">
                        {/* preview code */}
                        <pre className="previewCode">
                          <code>{activeComponent.sourceCode}</code>
                        </pre>
                      </div>
                    </div>

                    <section className="modal-info">
                      <span className="divider"></span>

                      <div className="modal-info_inner">
                        {/* Heading */}
                        <div className="modal-info__heading">
                          <h4 className="modal-info__head"> {element.text} </h4>
                          <p className="modal-info__explanation">
                            View all framework listings.
                            {/* Generate your component */}
                          </p>
                        </div>
                        {/* Framework-1 */}
                        <div className="select-framework">
                          <div className="select-framework_head">
                            {" "}
                            <p> List of React framework</p>
                            <ArrowDropDownIcon
                              fontSize="medium"
                              className="arrow-icon"
                            />
                          </div>
                          <div className="select-framework__options">
                            {reactOptions.map((option) =>
                              option.label === "JavaScript" ? (
                                <Modaltooltip
                                  text="Copy source"
                                  key={option.value}
                                >
                                  <div
                                    className="option option-active"
                                    onClick={() =>
                                      navigator.clipboard.writeText(
                                        element.sourceCode
                                      )
                                    }
                                  >
                                    {option.label}
                                  </div>
                                </Modaltooltip>
                              ) : (
                                <div
                                  key={option.value}
                                  className="option"
                                  onClick={() => setOpenSnackbar(true)}
                                  style={{
                                    color: "gray",
                                    cursor: "pointer",
                                    opacity: 0.5,
                                  }}
                                >
                                  {option.label}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* generate button */}
                    {/* <div className="button_container">
                      <button className="generate_button">Edit Code </button>
                    </div> */}
                    {/* End of modal info */}
                  </div>
                </div>
              </>
            )}
          </section>
        ))}
      </div>

      <SnackbarComponent
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        snackbarMessage="Coming Soon ✌️"
      />
    </>
  );
}

// const imageTextArray: ElementContextProps[] = [{ image: [], text: [] }]
