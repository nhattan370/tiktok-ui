import * as request from "../until/request";

const search = async(q, type)=>{
    try {
        const res = await request.get(`users/search`,{
            params:{
                q,
                type,
            }
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
    
}
export {search}