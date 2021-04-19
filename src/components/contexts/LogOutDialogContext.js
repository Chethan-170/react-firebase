import { createContext } from 'react';
const LogOutDialogContext = createContext({
    status: true,
    setLogOutDialogStatus: ()=>{}
});
export default LogOutDialogContext;