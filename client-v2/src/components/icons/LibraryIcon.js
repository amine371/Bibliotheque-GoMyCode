import React from "react";

const LibraryIcon = ({ active }) => {
  return (
    <svg
      height="36px"
      viewBox="0 0 480 480"
      width="36px"
      fill={active ? "#000000" : "#807f7f"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m240 0h-104c-4.417969 0-8 3.582031-8 8v56h-120c-4.417969 0-8 3.582031-8 8v400c0 4.417969 3.582031 8 8 8h232c4.417969 0 8-3.582031 8-8v-464c0-4.417969-3.582031-8-8-8zm-8 416h-88v-16h88zm-216-296h112v240h-112zm216-32h-88v-24h88zm-216 288h112v24h-112zm128 8v-280h88v280zm88-368v32h-88v-32zm-104 64v24h-112v-24zm-112 336h112v48h-112zm128 48v-32h88v32zm0 0" />
      <path d="m479.742188 437.984375-96-368c-.535157-2.0625-1.871094-3.824219-3.714844-4.898437-1.839844-1.070313-4.03125-1.363282-6.089844-.8125l-120 32c-4.25 1.132812-6.789062 5.484374-5.679688 9.742187l96 368c.535157 2.0625 1.875 3.824219 3.71875 4.894531 1.839844 1.066406 4.03125 1.355469 6.085938.800782l120-32c4.242188-1.132813 6.777344-5.476563 5.679688-9.726563zm-201.246094-279.441406 104.542968-27.871094 3.761719 14.398437-104.535156 27.914063zm112.34375 2.050781 46.398437 177.980469-104.503906 27.882812-46.398437-177.992187zm50.472656 193.46875 8.191406 31.394531-104.542968 27.871094-8.160157-31.382813zm-71.023438-272.261719 8.710938 33.398438-104.542969 27.863281-8.703125-33.382812zm-12.578124 380.398438-8.710938-33.398438 104.542969-27.878906 8.703125 33.382813zm0 0" />
      <path d="m104 144h-64c-4.417969 0-8 3.582031-8 8v64c0 4.417969 3.582031 8 8 8h64c4.417969 0 8-3.582031 8-8v-64c0-4.417969-3.582031-8-8-8zm-8 64h-48v-48h48zm0 0" />
    </svg>
  );
};

export default LibraryIcon;
