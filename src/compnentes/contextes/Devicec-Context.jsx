import { createContext, useState } from 'react'
export const deviceContext = createContext();

export default function DevicProvider({ children }) {
    const [device, setDevice] = useState(deviceContext)

    return (
        <deviceContext.Provider value={{device,setDevice}}>
            {children}
        </deviceContext.Provider>
    )
}