import { useState } from "react";

import DownloadIcon from "@mui/icons-material/Download";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Modaltooltip from "../../../../../common/Modaltooltip";

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
                  {/* Close */}
                  {/* <div className="menu-btn" onClick={handleClose}>
                    <span className="line"></span>
                    <span className="line"></span>
                  </div> */}
                  {/* modal */}
                  <div className="modal">
                    {/* Heading */}
                    <section className="modal-heading">
                      <div className="modal-heading_inner">
                        <h4 className="modal-intro">Generate code</h4>
                        <div className="download-code">
                          <p>Download</p>
                          <DownloadIcon
                            fontSize="medium"
                            className="download-icon"
                          />
                        </div>
                      </div>
                    </section>

                    {/* Code preview */}
                    <div className="code-preview"></div>

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
                      <button className="generate_button">Edit Code</button>
                    </div>
                    {/* End of modal info */}
                  </div>
                </div>
              </>
            )}
          </section>
        ))}
      </div>
    </>
  );
}

// const imageTextArray: ElementContextProps[] = [{ image: [], text: [] }]
