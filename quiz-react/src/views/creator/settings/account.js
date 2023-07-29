import React from "react";
import CreatorPageTitle from "../../../components/creator/page_title";

const Account = () => {
  return (
    <>
      <div className="mt-4 mx-4">
        <CreatorPageTitle title={"Account Settings"} />
        <div className="flex-grow bg-slate-800">
          <div class="p-6">
            <h2 class="text-slate-800 dark:text-slate-100 font-bold text-2xl mb-5">
              My Account
            </h2>

            {/* <!-- Picture --> */}
            <section className="mt-6">
              <div class="flex items-center">
                <div class="mr-4">
                  <img
                    class="rounded-full cea2a ckssj"
                    src="https://preview.cruip.com/mosaic/images/user-avatar-80.png"
                    width="80"
                    height="80"
                    alt="User upload"
                  />
                </div>
                <button class="bg-[#6366f1] px-2 py-1 rounded">Change</button>
              </div>
            </section>

            {/* <!-- Business Profile --> */}
            <section className="mt-6">
              <h3 class="text-slate-800 dark:text-slate-100 font-bold text-2xl">
                Business Profile
              </h3>
              <div class="text-base text-blue-100 my-2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit.
              </div>
              <div class="flex flex-col gap-4 md:flex-row xl:flex-row mt-6">
                <div class="w-full md:w-1/3 xl:w-1/3">
                  <label class="block text-base text-gray-200" for="name">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your question"
                    className={`w-full rounded border border-gray-700 bg-slate-900 mt-2 py-2 px-5 font-normal outline-none 
                          transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter 
                          dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    value="Acme Inc."
                  />
                </div>
                <div class="w-full md:w-1/3 xl:w-1/3">
                  <label
                    class="block text-base text-gray-200"
                    for="business-id"
                  >
                    Business Id
                  </label>
                  <input
                    type="text"
                    id="business-id"
                    placeholder="Enter your question"
                    className={`w-full rounded border border-gray-700 bg-slate-900 mt-2 py-2 px-5 font-normal outline-none 
                          transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter 
                          dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    value="habkh-akdjf"
                  />
                </div>
                <div class="w-full md:w-1/3 xl:w-1/3">
                  <label class="block text-base text-gray-200" for="name">
                    Location
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your question"
                    className={`w-full rounded border border-gray-700 bg-slate-900 mt-2 py-2 px-5 font-normal outline-none 
                          transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter 
                          dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    value="Acme Inc."
                  />
                </div>
              </div>
            </section>

            {/* <!-- Email --> */}
            <section className="mt-6">
              <h3 class="text-slate-800 dark:text-slate-100 font-bold text-2xl">
                Email
              </h3>
              <div class="text-base text-blue-100 my-2">
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                officia.
              </div>
              <div class="flex flex-wrap">
                <div class="mr-2">
                  <label class="sr-only" for="email">
                    Business email
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your question"
                    className={`w-full rounded border border-gray-700 bg-slate-900 mt-2 py-2 px-5 font-normal outline-none 
                          transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter 
                          dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
                    value="creator@pollsage.in"
                  />
                </div>
                <button class="mt-2 py-2 px-3 border border-slate-200 dark:border-slate-700 text-indigo-500 rounded">
                  Change
                </button>
              </div>
            </section>

            {/* <!-- Password --> */}
            <section className="mt-6">
              <h3 class="text-slate-800 dark:text-slate-100 font-bold text-2xl">
                Password
              </h3>
              <div class="text-base text-blue-100 my-2">
                You can set a permanent password if you don't want to use
                temporary login codes.
              </div>
              <div class="mt-5">
                <button class="mt-2 py-2 px-3 border border-slate-200 dark:border-slate-700 text-indigo-500 rounded">
                  Set New Password
                </button>
              </div>
            </section>
          </div>
          <footer>
            <div class="flex flex-col border-slate-200 dark:border-slate-700 py-5 px-6 border-t">
              <div class="flex self-end">
                <button class="border px-3 py-2 rounded dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  Cancel
                </button>
                <button class="ml-3 px-3 py-2 rounded bg-indigo-500 hover:bg-indigo-600">Save Changes</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Account;
