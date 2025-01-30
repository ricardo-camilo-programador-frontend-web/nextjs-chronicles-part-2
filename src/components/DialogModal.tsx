'use client';

import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { isClickOutsideElement } from "@/utils/isClickOutsideElement";
import { useRouter } from "next/navigation";

interface Props {
  uniqueId: string;
  isOpen: boolean;
  children?: ReactNode;
  className?: string;
  showCloseButton?: boolean;
  closeOnClickOutside?: boolean;
  close: () => void;
}

const DialogModal: FC<Props> = ({
  uniqueId,
  isOpen,
  className,
  children,
  showCloseButton = true,
  closeOnClickOutside = true,
  close,
}: Props) => {
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const dialog = document.getElementById(uniqueId);

      if (!isOpen || !dialog) {
        return;
      }

      if (isClickOutsideElement(dialog, e) && closeOnClickOutside) {
        close();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, close, uniqueId, closeOnClickOutside]);

  const handleWithCloseAction = () => {
    close();
  };

  useEffect(() => {
    const dialog = document.getElementById(uniqueId) as HTMLDialogElement;
    if (isOpen && dialog) {
      dialog.showModal();
    } else if (!isOpen && dialog) {
      dialog.close();
    }
  }, [isOpen, uniqueId]);

  return (
    <>
      {isOpen && (
        <dialog
          id={uniqueId}
          data-modal
          className={`relative z-50 bg-transparent overflow-hidden border border-gray-50 text-secondary rounded-xl shadow-md overflow-y-auto ${className}`}
        >
          <div className="flex justify-center align-center index-over-ride m-auto relative z-50">
            <div className="grid w-full px-2 md:px-8">
              {showCloseButton && (
                <button
                  className="w-auto ml-auto h-[0.5rem] absolute top-0 right-0 bg-transparent rounded-none border-none hover:bg-transparent hover:text-secondary text-end shadow-none p-4 z-auto"
                  onClick={handleWithCloseAction}
                >
                  <XMarkIcon className="w-6 h-6 text-secondary text-xl hover:text-primary" />
                </button>
              )}
              <div className="flex w-full">
                {children}
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default DialogModal;
