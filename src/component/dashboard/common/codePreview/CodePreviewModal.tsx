import React, { useState } from "react";
import "../../../../asset/sass/global.scss";

interface modalProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

export default function CodePreviewModal({ modal, setModal }: modalProps) {
  const handleClose = () => {
    setModal(false);
  };
  return (
    <div className="modal-overlay codePreview-overlay">
      <div className="modal-bg" onClick={handleClose}></div>
      {/* Close */}
      <div className="modal codePreview-modal">
        <div className="codepreview-header">
          <h2>Save component to files</h2>
          <div className="codepreview__menu-btn" onClick={handleClose}>
            <span className="codepreview-line"></span>
            <span className="codepreview-line"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
