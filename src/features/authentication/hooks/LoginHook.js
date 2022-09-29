import React, { useEffect } from "react";

import { useDoLoginMutation } from "../../../store/api/apiSlice";

const LoginHook = async (userEmail, password) => {

const [loginUser, {data, isError, error}] = useDoLoginMutation()

useEffect(() => {
    console.log("LOGGING...")
    loginUser(userEmail, password)

}, [userEmail, password]);  


useEffect(()=> {

    console.log("DATA...");
    console.log(data.toString())

}, [data, isError])  

return {data, isError, error}

};

export default LoginHook;
