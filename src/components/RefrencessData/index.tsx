/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import FormLabel from "../Base/FormLabel"
import ReactTextFormat from 'react-text-format';

type RefrencessDataProps = {
    isOpen : boolean
    onClose: () => void
    relatedNodes:Array<any>
}

const RefrencessData:React.FC<RefrencessDataProps> = ({isOpen,onClose,relatedNodes}) => {
    return (
        <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() =>{
                onClose()
            }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                        >
                            References Address
                        </Dialog.Title>
                        <div className="mt-2 max-h-[350px] overflow-y-scroll chatBoxScroolBar">
                            {relatedNodes.map((item) => {
                                return (
                                <div className="col-span-12 px-[21px] my-2 ">
                                    <FormLabel
                                    htmlFor="modal-form-7"
                                    className=" flex justify-between text-[14px] leading-[19.12px] font-[500]"
                                    >
                                    <p
                                        data-tooltip-id="related-tooltip"
                                        data-tooltip-content={Object.keys(item)[0]}
                                        className=" text-[#3C3744] text-xs "
                                    >
                                        {Object.keys(item)[0].substring(0, 45)}
                                    </p>
                                    <p className=" text-[#7B93AF] text-xs ">
                                        Similarity{" "}
                                        <span className=" text-[#3C3744]">
                                        {(
                                            Number(item[Object.keys(item)[0]].percent) * 100
                                        ).toFixed(2)}
                                        %
                                        </span>
                                    </p>
                                    </FormLabel>
                                    <div className="flex items-center w-full ">
                                    {/* <textarea
                                        className={`w-full resize-none rounded-[5px] -mt-1  focus:ring-0 focus:outline-none focus:border-[#000000]/10 placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#92a7c1]/60 placeholder:leading-[21px] text-[#3C3744] font-[400] text-[14px]`}
                                        style={{
                                        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
                                        }}
                                        id="modal-form-6"
                                        placeholder="Chunck 1"
                                    /> */}
                                    <div className="border font-poppins rounded-lg text-left bg-gray-50 px-2 text-sm p-2" style={{whiteSpace:'pre-wrap',lineHeight:'24px'}}>
                                        <ReactTextFormat>
                                            {item[Object.keys(item)[0]].content}
                                        </ReactTextFormat>
                                    </div>
                                    </div>
                                </div>
                                );
                            })}                              
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                            close
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>                                
            </Dialog>
         </Transition>
        </>
    )
}

export default RefrencessData