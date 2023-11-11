import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

export const HomePage = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b border-gray-200 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">Ultimate Blog App</div>
        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <div>
            <button className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2">
              <div className="">Write</div>
              <div>
                <FiEdit className="text-2xl text-gray-600" />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r border-gray-300 px-24">
          <div className="flex w-full flex-col space-y-4 py-10">
            <div className="flex w-full items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-lg border border-gray-300"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch className="" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full rounded-lg px-4 py-1 pl-7 text-sm outline-none placeholder:text-sm placeholder:text-gray-300"
                  placeholder="Search"
                />
              </label>
              <div className="flex w-full items-center justify-end space-x-4">
                <div className="">My Topics: </div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-3xl bg-gray-200/50 px-4 py-3"
                    >
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-8">
              <div>Articles</div>
              <div>
                <button className="font-semi-bold flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5">
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="text-xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center space-y-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="group flex flex-col space-y-4 border-b border-gray-300 pb-8 last:border-none"
              >
                <div className="flex w-full items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                  <div>
                    <div className="text-sm">
                      Author Name &bull; 22 December 2022
                    </div>
                    <div className="text-sm">
                      Bio: Nice guy, smart guy, humble guy
                    </div>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12 gap-4">
                  <div className="col-span-8 flex flex-col space-y-4">
                    <p className="text-xl font-bold text-gray-800 decoration-indigo-600 group-hover:underline">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium, numquam!
                    </p>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Assumenda incidunt asperiores eligendi debitis quasi qui
                      sunt! A exercitationem quibusdam facilis minima, eaque
                      sequi recusandae. Quae, voluptatem harum libero distinctio
                      voluptate blanditiis soluta commodi, quam, maiores in
                      eaque inventore modi accusantium.
                    </p>
                  </div>
                  <div className="col-span-4">
                    <div className="h-full w-full rounded-xl bg-gray-300 transition duration-300 hover:scale-105 hover:shadow-xl">
                      IMAGE
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-gray-200/50 px-5 py-2"
                    >
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
        <aside className="col-span-4 flex h-full w-full flex-col space-y-4 p-6">
          <div>
            <h3 className="my-4 text-lg font-semibold">
              People you might be interested in{" "}
            </h3>
            <div className="flex flex-col space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="flex flex-row items-center space-x-5" key={i}>
                  <div className="h-10 w-10 flex-none rounded-full bg-gray-300"></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      Jane Doe {i}
                    </div>
                    <div className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laborum, sed!
                    </div>
                  </div>
                  <div>
                    <button className="flex items-center space-x-3 rounded border border-gray-400/50 px-4 py-2">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky top-0">
            <h3 className="my-4 text-lg font-semibold">Your reading list</h3>
            <div className="flex flex-col space-y-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="group flex items-center space-x-6">
                  <div className="aspect-square h-full w-2/5 rounded-xl bg-gray-300"></div>
                  <div className="flex w-3/5 flex-col space-y-2">
                    <div className="group:underline text-lg font-semibold">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Minus a commodi quibusdam excepturi nihil!
                    </div>
                    <div className="flex w-full items-center space-x-1">
                      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                      <div>Author Name &bull;</div>
                      <div>Dec 22, 2022</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
