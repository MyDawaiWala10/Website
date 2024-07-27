export default function Location() {
  return (
    <div className="w-80 bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Welcome to MyDawaiWala
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Please provide your delivery location.</p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-[#12a701] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Detect my location
          </button>
        </div>
      </div>
    </div>
  );
}
