import React, { useRef, useEffect } from "react";

export const Sidebar = ({ sidebar, handleSidebar, onDragStart }) => {
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleSidebar(false); // close sidebar if clicked outside
      }
    }

    if (sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar, handleSidebar]);

  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100"
        onClick={() => handleSidebar(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
          <ul className="font-bold border-b border-gray-400">
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg group">
                <span className="text-lg">Elements</span>
              </div>
            </li>
          </ul>
          <ul className="mt-4 space-y-2 font-medium">
            <li>
              <div
                draggable="true"
                onDragStart={(e) => onDragStart(e, "heading")}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="16"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Heading</span>
              </div>
            </li>
            <li>
              <div
                draggable="true"
                onDragStart={(e) => onDragStart(e, "paragraph")}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="16"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Paragraph</span>
              </div>
            </li>
            <li>
              <div
                draggable="true"
                onDragStart={(e) => onDragStart(e, "button")}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 transition duration-75"
                  height="20"
                  width="16"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path
                    d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"
                  />
                  <path
                    d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Button</span>
              </div>
            </li>
            <li>
              <div
                draggable="true"
                onDragStart={(e) => onDragStart(e, "image")}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Image</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
