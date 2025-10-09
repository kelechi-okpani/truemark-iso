"use client";

import { HashLoader } from "react-spinners";

export default function CenteredLoader() {
  return (
    <div className="flex items-center justify-center">
      <HashLoader size={60} color="#387467" />
    </div>
  );
}
