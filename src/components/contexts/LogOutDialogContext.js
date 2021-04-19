import { createContext } from 'react';
const LogOutDialogContext = createContext({
    status: false,
    setLogOutDialogStatus: ()=>{}
});
export default LogOutDialogContext;