import { Fragment, FunctionComponent, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import useFilter from "../hooks/useFilter";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Filters: FunctionComponent = function () {
  const [open, setOpen] = useState<boolean>(false);

  const { selected, setSelected, filters } = useFilter();

  return (
    <div>
      {/* Mobile filter dialog */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex md:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.name}
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 font-dinpro text-base text-gray-400">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "-rotate-180" : "rotate-0",
                                  "h-5 w-5 transform",
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center font-dinpro-medium"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <section className="flex max-w-full   items-center justify-center  border-[1px] border-solid border-whitesmoke-200 ">
        <div className=" mx-10 flex w-full items-center justify-end pb-3 pt-4 md:hidden">
          <button
            type="button"
            className="  rounded-lg  bg-whitesmoke-100 px-4 py-[9px]   text-end font-dinpro-medium text-base text-gray-700 hover:text-gray-900 md:hidden"
            onClick={() => setOpen(true)}
          >
            Filters
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex w-3/4   flex-wrap items-center justify-between  gap-3  bg-white pb-3  pt-4">
            <Popover.Group className="hidden space-x-6 md:flex md:items-baseline lg:space-x-8">
              {filters.map((section) => (
                <Popover
                  as="div"
                  key={section.name}
                  id="desktop-menu"
                  className="relative z-10 inline-block text-left active:border-whitesmoke-100"
                >
                  <div>
                    <Popover.Button className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-whitesmoke-100 px-2 py-[9px]  text-gray-700 hover:bg-whitesmoke-200 hover:text-gray-900 focus:outline-none lg:gap-8 lg:px-[13px]">
                      <span className=" font-dinpro-medium text-base text-dimgray-300 ">
                        <span>{section.name}</span>
                        <span
                          className={`ml-1.5 rounded ${selected.map((item) => item.slice(0, item.indexOf("-"))).filter((item) => item === section.id).length ? `bg-stone-300` : `text-transparent`} px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-900`}
                        >
                          {
                            selected
                              .map((item) => item.slice(0, item.indexOf("-")))
                              .filter((item) => item === section.id).length
                          }
                        </span>
                      </span>
                      <ChevronDownIcon
                        className="ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-900"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Popover.Panel className="absolute right-0 mt-2 origin-top-right rounded-md bg-white p-4  shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div
                            key={option.value}
                            className="flex items-center "
                          >
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              checked={selected.includes(
                                `${section.id}-${option.label}`,
                              )}
                              className="h-4 w-4 rounded border-gray-300 text-amber-900 focus:ring-transparent"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelected((selected: string[]) => [
                                    ...selected,
                                    `${section.id}-${option.label}`,
                                  ]);
                                } else {
                                  setSelected((selected: string[]) => [
                                    ...selected.filter(
                                      (item) =>
                                        item !==
                                        `${section.id}-${option.label}`,
                                    ),
                                  ]);
                                }
                              }}
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 whitespace-nowrap pr-6 font-dinpro-medium  text-sm text-gray-900"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </form>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ))}
              <Popover
                as="div"
                id="desktop-menu"
                className="relative z-10 inline-block text-left"
              >
                <div>
                  <Popover.Button className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-beige  px-2  py-[9px]  text-darkolivegreen-200 hover:bg-primary-tint-1 hover:text-darkolivegreen-300 lg:gap-8  lg:px-[13px]">
                    <span className=" font-dinpro-medium text-base text-dimgray-300">
                      {"All Filters"}
                    </span>
                    <ChevronDownIcon
                      className="ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-900"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filters;
