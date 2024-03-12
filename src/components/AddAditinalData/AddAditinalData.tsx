/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import FormLabel from '../Base/FormLabel';
import ImageUploadr from '../UploadImage';

interface AddAditinalDataProps {
    isOpen:boolean
    onClose:() => void
    data:any
    sendToApi :(additinal?:any) => void
    additinalDataResolves:Array<any>
    setAdditinalDataResolved:(additinal:Array<any>) => void
}

const AddAditinalData:React.FC<AddAditinalDataProps> = ({
    isOpen,
    onClose,
    data,
    sendToApi,
    additinalDataResolves,
    setAdditinalDataResolved
}) => {
    const resolveSassionName = () => {
        const date = new Date();
        const yers = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return "Test_" + yers + "_" + month + "_" + day;
    };
    const makeAdditinaljson = (key: string, value: any) => {
        const resolved: Array<any> = additinalDataResolves;
        resolved.forEach((item: any) => {
        if (item.key == key) {
            item.value = value;
        }
        });
        if (resolved.length == 0) {
        resolved.push({
            key: key,
            value: value,
        });
        } else {
        const keys = resolved.map((item) => item.key);
        if (!keys.includes(key)) {
            resolved.push({
            key: key,
            value: value,
            });
        }
        }
        setAdditinalDataResolved(resolved);
        // resolveAdditinalJsonForApi();
    };  

    const submit = () => {
        sendToApi()
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() =>{}}>
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
                            New Session
                        </Dialog.Title>
                        <div className="mt-2 max-h-[350px] overflow-y-scroll chatBoxScroolBar">
                            <div className="col-span-12 mb-4 px-[21px]">
                                <FormLabel
                                    htmlFor="modal-form-1"
                                    className="text-[14px]  leading-[19.12px] font-[500] text-[#3C3744]"
                                >
                                    <div>Session Name</div>
                                </FormLabel>
                                <div className="flex items-center -mt-1 w-full">
                                    <input
                                    placeholder={resolveSassionName()}
                                    // onChange={(event) => {
                                    //     makeAdditinaljson(
                                    //     "session_name",
                                    //     event.target.value
                                    //     );
                                    // }}
                                    className="w-full border rounded-lg h-[40px] text-sm px-[16px]"
                                    />
                                </div>
                            </div>
                            {Object.entries(data).map((item) => {
                            const [key, value]: [string, any] = item;
                            return (
                                <>
                                {value == "str" ? (
                                    <div className="col-span-12 mb-4 px-[21px]">
                                    <FormLabel
                                        htmlFor="modal-form-1"
                                        className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                    >
                                        {/* <StarText text={key} /> */}
                                        {key}
                                    </FormLabel>
                                    <div className="flex items-center -mt-1 w-full">
                                        <input
                                        onChange={(event) => {
                                            makeAdditinaljson(
                                            key,
                                            event.target.value
                                            );
                                        }}
                                        className="w-full border rounded-lg h-[40px] text-sm px-[16px]"
                                        />
                                    </div>
                                    </div>
                                ) : undefined}
                                {value == "textarea" ? (
                                    <div className="col-span-12 mb-4 px-[21px]">
                                    <FormLabel
                                        htmlFor="modal-form-1"
                                        className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                    >
                                        {/* <StarText text={key} /> */}
                                        {key}
                                    </FormLabel>
                                    <div className="flex items-center -mt-1 w-full">
                                        <textarea
                                        onChange={(event) => {
                                            makeAdditinaljson(
                                            key,
                                            event.target.value
                                            );
                                        }}
                                        className="w-full border-[1px] border-[#000000]/10
                                            focus:ring-0 focus:outline-none focus:border-[#000000]/10 placeholder:text-[14px] placeholder:font-[100] placeholder:text-[#92a7c1]/60 placeholder:leading-[19.12px] text-[#3C3744] font-[400] text-[14px] rounded-lg h-[100px] text-sm px-[16px]"
                                        />
                                    </div>
                                    </div>
                                ) : undefined}
                                {value == "int" ? (
                                    <div className="col-span-12 mb-4 px-[21px]">
                                    <FormLabel
                                        htmlFor="modal-form-1"
                                        className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                    >
                                        {/* <StarText text={key} /> */}
                                        <div>{key}</div>
                                    </FormLabel>
                                    <div className="flex items-center -mt-1 w-full">
                                        <input
                                        onChange={(event) => {
                                            makeAdditinaljson(
                                            key,
                                            event.target.value
                                            );
                                        }}
                                        type="number"
                                        min={1}
                                        className="w-full rounded-[5px] h-[40px]
                                                border-[1px] border-[#000000]/10
                                            focus:ring-0 focus:outline-none focus:border-[#000000]/10 placeholder:text-[14px] placeholder:font-[100] placeholder:text-[#92a7c1]/60 placeholder:leading-[19.12px] text-[#3C3744] font-[400] text-[14px]"
                                        />
                                    </div>
                                    </div>
                                ) : undefined}
                                {value == "float" ? (
                                    <div className="col-span-12 mb-4 px-[21px]">
                                    <FormLabel
                                        htmlFor="modal-form-1"
                                        className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                    >
                                        {/* <StarText text={key} /> */}
                                        <div>{key}</div>
                                    </FormLabel>
                                    <div className="flex items-center -mt-1 w-full">
                                        <input
                                        onChange={(event) => {
                                            makeAdditinaljson(
                                            key,
                                            event.target.value
                                            );
                                        }}
                                        type="number"
                                        step="0.01"
                                        min={1}
                                        className="w-full h-10 rounded-[5px] 
                                                border-[1px] border-[#000000]/10
                                            focus:ring-0 focus:outline-none focus:border-[#000000]/10 placeholder:text-[14px] placeholder:font-[100] placeholder:text-[#92a7c1]/60 placeholder:leading-[19.12px] text-[#3C3744] font-[400] text-[14px]"
                                        />
                                    </div>
                                    </div>
                                ) : undefined}
                                {value != "int" &&
                                value != "str" &&
                                value != "float" &&
                                value != "textarea" ? (
                                    <div className="col-span-12 mb-4  px-[21px]">
                                    <FormLabel
                                        htmlFor="modal-form-3"
                                        className="text-[14px] leading-[19.12px] font-[500] text-[#3C3744]"
                                    >
                                        {/* <StarText text={key}/> */}
                                        <div>{key}</div>
                                    </FormLabel>
                                    <div className="flex -mt-1  items-center w-full">
                                        <select
                                        className={`w-full h-10 rounded-[5px] 
                                                border-[1px] border-[#000000]/10
                                            focus:ring-0 focus:outline-none focus:border-[#000000]/10 placeholder:text-[14px] placeholder:font-[100] placeholder:text-[#92a7c1]/60 placeholder:leading-[19.12px] text-[#3C3744] font-[400] text-[14px]`}
                                        style={{
                                            boxShadow:
                                            "0px 2px 2px rgba(0, 0, 0, 0.05)",
                                        }}
                                        id="modal-form-3"
                                        onChange={(event) => {
                                            makeAdditinaljson(
                                            key,
                                            event.target.value
                                            );
                                        }}
                                        >
                                        <option value={""}>not selected</option>
                                        {value.map((ite: any) => {
                                            return (
                                            <option className="" value={ite}>
                                                {ite}
                                            </option>
                                            );
                                        })}
                                        </select>
                                    </div>
                                    </div>
                                ) : undefined}
                                </>
                            );
                            })} 

                            <ImageUploadr ></ImageUploadr>                                                           
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => {
                                submit()
                                onClose()
                            }}
                            >
                            Start New Session
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

export default AddAditinalData