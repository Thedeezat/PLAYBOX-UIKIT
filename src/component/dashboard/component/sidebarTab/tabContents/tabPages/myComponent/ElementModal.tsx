import { useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Modaltooltip from "../../../../../common/Modaltooltip";

import SnackbarComponent from "../../../../../common/SnackbarPopup";
interface ImageTextObject {
  image: string;
  text: string;
}
interface ElementContextProps {
  imageTextArray: ImageTextObject[];
}

type frameworkOption = {
  label: string;
  value: string;
};

type stylOption = {
  label: string;
  value: string;
};

export default function ElementModal({
  imageTextArray,
}: ElementContextProps): JSX.Element {
  const [modal, setModal] = useState<boolean>(false);
  const [openSnackbar, setOpenSnacbar] = useState(false);

  const [activeComponent, setActiveComponent] =
    useState<ImageTextObject | null>(null);

  const reactOptions: frameworkOption[] = [
    { label: "Plain HTML", value: "Plain HTMl" },
    { label: "Create React app", value: "Create React app" },
    { label: "TypeScript", value: "Typescript" },
  ];

  const cssOptions: stylOption[] = [
    { label: "Plain CSS", value: "Plain CSS" },
    { label: "Tailwind", value: "Tailwind" },
    { label: "SCSS", value: "SCSS" },
  ];
  const sourceCode = (
    <span>
      {`
      function generateRandomNumber(min, max) {${(<br />)}
        const randomArray = [];${(<br />)}
        const arrayLength = generateRandomNumber(5, 10);${(<br />)}
        for (let i = 0; i < arrayLength; i++) {${(<br />)}
          randomArray.push(generateRandomNumber(1, 100));${(<br />)}
        }${(<br />)}
        console.log("Random Array:", randomArray);${(<br />)}
      }${(<br />)}
    `}
    </span>
  );

  // Modal
  const handleClick = (element: ImageTextObject) => {
    // setModal(true);
    // setActiveComponent(element);
    setOpenSnacbar(true);
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
                        {/* SyntaxHighlight */}
                        <p className="previewCode">{sourceCode}</p>
                      </div>
                      <div className="modalPreview__display"></div>
                    </div>

                    <section className="modal-info">
                      <span className="divider"></span>

                      <div className="modal-info_inner">
                        {/* Heading */}
                        <div className="modal-info__heading">
                          <h4 className="modal-info__head"> {element.text} </h4>
                          <p className="modal-info__explanation">
                            View all written framework listings.
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
                            {/* React frameworks */}
                            {reactOptions.map((option) => (
                              <Modaltooltip
                                text="Copy source"
                                key={option.value}
                              >
                                {option.label}
                              </Modaltooltip>
                            ))}
                          </div>
                        </div>
                        {/* Framework-2 */}
                        <div className="select-framework">
                          <div className="select-framework_head">
                            {" "}
                            <p> List of stying framework</p>
                            <ArrowDropDownIcon
                              fontSize="medium"
                              className="arrow-icon"
                            />
                          </div>
                          <div className="select-framework__options">
                            {/* CSS frameworks */}
                            {cssOptions.map((option) => (
                              <Modaltooltip
                                text="Copy source"
                                key={option.value}
                              >
                                {option.label}
                              </Modaltooltip>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* generate button */}
                    <div className="button_container">
                      <button className="generate_button">Edit Code </button>
                    </div>
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
        setOpenSnackbar={setOpenSnacbar}
        snackbarMessage="Coming Soon ✌️"
      />
    </>
  );
}

// const imageTextArray: ElementContextProps[] = [{ image: [], text: [] }]
