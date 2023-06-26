import { useState } from "react";

import DownloadIcon from "@mui/icons-material/Download";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface ImageTextObject {
  image: string;
  text: string;
}
interface ElementContextProps {
  imageTextArray: ImageTextObject[];
}

export default function ElementModal({
  imageTextArray,
}: ElementContextProps): JSX.Element {
  const [modal, setModal] = useState<boolean>(false);

  const handleClick = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };
  return (
    <>
      <div className="layout_component_wrapper">
        {imageTextArray.map((element, index) => (
          <>
            <div className="layout_component" key={index} onClick={handleClick}>
              <div className="layout_component__inner">
                <>
                  <img src={`${element.image}`} alt="" />
                  <span className="layout_component__text">{element.text}</span>
                </>
              </div>
            </div>
            {/* Modal */}
            {modal && (
              <div className="modal-overlay">
                <div className="modal-bg" onClick={handleClose}></div>
                {/* Close */}
                <div className="menu-btn" onClick={handleClose}>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
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
                        <h4 className="modal-info__head"> Popover </h4>
                        <p className="modal-info__explanation">
                          Generate a navigation with your selected framework
                        </p>
                      </div>
                      {/* Framework-1 */}
                      <div className="select-framework">
                        <div className="select-framework_head">
                          {" "}
                          <p> Select React framework</p>
                          <ArrowDropDownIcon
                            fontSize="medium"
                            className="arrow-icon"
                          />
                        </div>
                        <div className="select-framework__options">
                          <span>Plain HTMl</span>
                          <span>Creact React app</span>
                          <span>Typescript</span>
                          <span>Next js</span>
                        </div>
                      </div>
                      {/* Framework-2 */}
                      <div className="select-framework">
                        <div className="select-framework_head">
                          {" "}
                          <p> Select stying framework</p>
                          <ArrowDropDownIcon
                            fontSize="medium"
                            className="arrow-icon"
                          />
                        </div>
                        <div className="select-framework__options">
                          <span>Plain CSS</span>
                          <span>Tailwind</span>
                          <span>Bootstrap</span>
                          <span>SCSS</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* generate button */}
                  <div className="button_container">
                    <button className="generate_button">Generate</button>
                  </div>
                  {/* End of modal info */}
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}

// const imageTextArray: ElementContextProps[] = [{ image: [], text: [] }]
