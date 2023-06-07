import { faEnvelope, faGlobe } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className=" py-4 border-t border-solid flex justify-between ">
      <div className="container px-4  space-y-10 w-4/12 ">
        <p className="text-center text-[#023047]  ">all rights are reserved</p>
      </div>
      <div className="container px-4 flex justify-center items-center w-2/12">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="mr-4">
            <a
              href="https://twitter.com"
              className="flex items-center justify-center h-10 w-10 rounded-full border border-solid border-[#023047] text-gray-800"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-lg text-[#023047]"
              />
            </a>
          </div>
          <div className="mr-4">
            <a
              href="https://twitter.com"
              className="flex items-center justify-center h-10 w-10 rounded-full border border-solid border-[#023047] text-gray-800"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-lg text-[#023047]"
              />
            </a>
          </div>
          <div className="mr-4">
            <a
              href="https://twitter.com"
              className="flex items-center justify-center h-10 w-10 rounded-full border border-solid border-[#023047] text-gray-800"
            >
              {" "}
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-lg text-[#023047]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
