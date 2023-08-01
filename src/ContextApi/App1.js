import react, { createContext } from 'react';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();
const App1 = () => {

    return (
        <>
            <FirstName.Provider value={` MD `}>
                <LastName.Provider value={` Khan`}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};
export default App1;
export { FirstName, LastName }
