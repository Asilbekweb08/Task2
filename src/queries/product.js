import { useMutation } from "@tanstack/react-query";
const { LocalUrl } = require("@/app/api/base-api");

export const Products =async()=>{
    const res = await LocalUrl.get("/api/Product")
    return res.json()
}

export const usePostProduct =(options)=>{
    return useMutation({
        mutationFn:async (ProductData)=>{
            const {data}= await LocalUrl.post('/api/Product')
            return data
        },
        onError:(error)=>{
            const errormsg=  console.log("error");
            
        }
    })
}