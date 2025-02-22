"use client"

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Profile = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="w-full flex gap-10">
      <div className="w-1/2 bg-white border border-gray-300 h-96 rounded-md"></div>
      <div className="w-1/2">
        <h1 className="text-3xl">Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta
          ducimus accusamus quam expedita. Ducimus, praesentium vero. Corrupti
          pariatur suscipit, dolorem quasi laboriosam officia voluptatum
          exercitationem, nihil, dolore reiciendis deserunt!
        </p>
        <button onClick={() => setToggleModal(!toggleModal)} className="bg-black px-8 text-white py-2 rounded-3xl">
          Book now
        </button>
          <Dialog open={toggleModal} onClose={setToggleModal} className="relative z-50">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <DialogPanel
                  transition
                  className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                >
                  <TransitionChild>
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        onClick={() => setToggleModal(false)}
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Panel title</DialogTitle>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
