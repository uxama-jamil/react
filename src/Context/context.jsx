import React ,{ useContext, useState } from "react"

const Data =React.createContext()

const DataProvider=({children})=>{
const [cdata,setData]=useState({})
const updateData =(value)=>{
    console.log('update data',value)
    setData({...cdata,...value})
    }
    console.log('context state value',cdata)
    return<>
    <Data.Provider value={{name:"usama jamil",data:cdata,updateData}}>
        {children}
    </Data.Provider>
    </>

}

const useDataContext = ()=>{
    return useContext(Data)
}
export {DataProvider,useDataContext}