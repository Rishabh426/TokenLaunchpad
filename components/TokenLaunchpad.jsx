export default function TokenLaunchpad() {

  return (
    <div
      className="flex flex-col justify-center items-center h-screen gap-4 
        bg-gradient-to-br from-[#e0f2fe] to-[#dbeafe]"
    >
      <h1 className="text-6xl font-bold text-blue-400">
        Solana <span className="text-black">Token Launchpad</span>
      </h1>

      <div className="flex flex-col gap-10 mt-15">
        <input
          className="inputText w-150 p-3 text-2xl text-black rounded border border-gray-300"
          type="text"
          placeholder="Name"
        />
        <input
          className="inputText w-150 p-3 text-2xl text-black rounded border border-gray-300"
          type="text"
          placeholder="Symbol"
        />
        <input
          className="inputText w-150 p-3 text-2xl text-black rounded border border-gray-300"
          type="text"
          placeholder="img url"
        />
        <input
          className="inputText w-150 p-3 text-2xl text-black rounded border border-gray-300"
          type="text"
          placeholder="Amount"
        />
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 
        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
         dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Token</button>

      </div>
    </div>
  );
}
