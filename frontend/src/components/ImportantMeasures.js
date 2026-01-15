import React from "react";
import { Modal } from "antd";

export default function ImportantMeasures({ open, onClose, measures, title = "Important Measures" }) {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <ul>
        {measures.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Modal>
  );
}
