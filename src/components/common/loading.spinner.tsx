const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="animate-spin inline-block w-12 h-12 border-4 border-green-800 border-t-transparent rounded-full">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
