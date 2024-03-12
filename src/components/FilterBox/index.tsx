/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import Nodes from "../../api/Nodes"
import { useConstructor } from "../../help"

interface FilterBox {
    exeNods:Array<string>
    setexeNods:(nods:Array<string>) =>void
}

const FilterBox:React.FC<FilterBox> = ({exeNods,setexeNods}) => {
    const [categories,setCategories] = useState<Array<string>>([])
    const [checkAll,setCheckAll] = useState(true)
    const [AllCategories,setAllCategories] = useState<any>([])
    useConstructor(() => {
        const nodeApi = new Nodes()
        nodeApi.getCatagories((res) => {
            // console.log(Object.entries(res).map(item => item[0]))
            setAllCategories(res)
            setCategories(Object.entries(res).map(item => item[0]))
        })
    })
    return (
        <>
            <div className="w-[250px] h-[400px] overflow-y-scroll chatBoxScroolBar bg-white shadow-md">
                <div className="p-4 ">
                    <h5 className="">Categories</h5>
                    <hr className="my-2" />
                    <div className="flex items-start mb-2 justify-start">
                        <input type="checkbox" value={'all'} checked={checkAll} onChange={() => {
                            setCheckAll(!checkAll)
                            if(checkAll){
                                const allData:Array<string> =[...categories]
                                categories.forEach((el) => {
                                    const child:Array<string> = AllCategories[el]
                                    child?.forEach((el2) => {
                                        if(!exeNods.includes(el2)){
                                            allData.push(el2)
                                        }
                                    })
                                })
                                setexeNods(allData)
                            }else{
                                setexeNods([])
                            }
                        }} id={'checkAll'} />
                        <label className="text-xs ml-1" htmlFor={'checkAll'}>All</label>
                    </div>                    
                    {categories.map((item:string) => {
                        return (
                            <>
                                <div className="flex items-start mb-2 justify-start">
                                    <input type="checkbox" value={item} checked={exeNods.includes(item) == true ? false :true} onChange={() => {
                                        if(exeNods.includes(item)){
                                            const child:Array<string> = AllCategories[item]
                                            setexeNods([...exeNods.filter((ite) => ite!=item && !child.includes(ite))])
                                        }else{
                                            const child:Array<string> = AllCategories[item]
                                            child.forEach((el) => {
                                                exeNods.push(el)
                                            })
                                            setexeNods([...exeNods,item])
                                        }
                                    }} id={item} />
                                    <label className="text-xs ml-1" htmlFor={item}>{item}</label>
                                </div>
                                {
                                    AllCategories[item]?.map((item:string) => {
                                        return (
                                            <div className="flex items-start ml-8 mb-2 justify-start">
                                                <input type="checkbox" value={item} checked={exeNods.includes(item) == true ? false :true} onChange={() => {
                                                    if(exeNods.includes(item)){
                                                        setexeNods([...exeNods.filter((ite) => ite!=item)])
                                                    }else{
                                                        setexeNods([...exeNods,item])
                                                    }
                                                }} id={item} />
                                                <label className="text-xs ml-1" htmlFor={item}>{item}</label>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default FilterBox