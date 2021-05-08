import Form from "../components/form";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <h1>Calculate Your Hours</h1>
              </div>
              <div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
