const ErrorCard = () => {
  return (
    <>
      {" "}
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-5">
        <div className="relative w-full max-w-[600px] rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
          <div className="mb-6 flex flex-col items-center pb-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/652/825/large_2x/incorrect-sign-diamond-free-vector.png"
              alt="Company Logo"
              className="mb-4 h-20"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              Unverified Letter Head
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorCard;
