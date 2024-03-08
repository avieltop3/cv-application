import { useState } from "react";

export default function Section({ sectionName, children }) {
  return (
    <div className="section">
      <h1>{sectionName}</h1>
      {children}
    </div>
  );
}
