import React from "react";
import Image from "next/image";
function page() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div className="mt-5">Developed by Ayush Sharma</div>
      <a href="https://www.linkedin.com/in/ayushsharma77/" target="_blank">
        <div className=" mt-5 aboutme-img mb-5">
          <Image height={100} width={100} src={"/images/linkedin.png"}></Image>
        </div>
      </a>
    </div>
  );
}

export default page;
