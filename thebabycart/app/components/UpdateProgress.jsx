import React from "react";
import Link from "next/link";
function page() {
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column heading-5"
      style={{
        height: "250px",
        textAlign: "center",
        textTransform: "uppercase",
      }}
    >
      Section will update soon {":)"}
      <Link href={"/"}>
        <button className="primary-button page-Button-Home mt-4">
          GO TO HOME
        </button>
      </Link>
    </div>
  );
}

export default page;
