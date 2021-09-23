const Error = ({ children, onDismiss }) => {
  return (
    <div className="bg-red-500 flex max-w-xs md:max-w-md w-full font-semibold text-xl p-2 m-2 justify-between pointer-events-auto bg-opacity-80 rounded-md">
      {children}
      <div className="flex items-center">
        <button
          className=" border-red-700 border-2 rounded-md focus:outline-none"
          onClick={() => onDismiss()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Error;
