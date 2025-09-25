import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import type { ReactNode } from "react";
// import { useState } from "react";
interface IProps {
  isOpen: boolean;
  close: () => void;
  title?: string;
  children: ReactNode;
}
const Model = ({ isOpen, close, title, children }: IProps) => {
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <Button
          onClick={open}
          className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white data-hover:bg-indigo-400 duration-500 cursor-pointer"
        >
          Open dialog
        </Button>
      </div> */}

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-black"
                >
                  {title}
                </DialogTitle>
              )}
              {children}
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Model;
