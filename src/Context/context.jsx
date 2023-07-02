import React ,{ useContext } from "react"

const Data =React.createContext()

const DataProvider=({children})=>{

    return<>
    <Data.Provider value={{name:"usama jamil"}}>
        {children}
    </Data.Provider>
    </>

}
const useDataContext = ()=>{
    return useContext(Data)
}
export {DataProvider,useDataContext}