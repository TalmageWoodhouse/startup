import React from "react";
import "./messageDialog.css"; // Ensure you create and import this CSS file

export function MessageDialog(props) {
  if (!props.message) return null; // Don't render the modal if there's no message

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-body">{props.message}</div>
        <div className="modal-footer">
          <button onClick={props.onHide}>Close</button>
        </div>
      </div>
    </div>
  );
}
