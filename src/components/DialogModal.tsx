'use client';

import type { FC, ReactNode } from "react";
import { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { isClickOutsideElement } from "@/utils/isClickOutsideElement";

interface Props {
  uniqueId: string;
  isOpen: boolean;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
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
  style,
  close,
}: Props) => {
  const currentScroll = window.scrollY;

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

  const lockScroll = (): void => {
    window.scrollTo(0, currentScroll);
  };

  useEffect(() => {
    const dialog = document.getElementById(uniqueId) as HTMLDialogElement;
    if (isOpen && dialog) {
      dialog.showModal();
      lockScroll();
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
          className={`relative z-50 bg-transparent overflow-hidden text-secondary appearance-none border-none rounded-xl overflow-y-auto ${className}`}
          style={{
            ...style,
            marginTop: `${currentScroll}px`,
          }}
        >
          <div className="flex justify-center align-center index-over-ride m-auto relative z-50">
            <div className="grid w-full px-2 md:px-8">
              {showCloseButton && (
                <button
                  className="absolute bg-transparent bg-white border-none flex h-14 hover:bg-gray-100 hover:text-bold hover:text-red-500 hover:text-secondary items-center justify-center ml-auto p-4 right-0 rounded-full shadow-none text-4xl top-0 w-10 w-auto z-auto"
                  title="Close"
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
