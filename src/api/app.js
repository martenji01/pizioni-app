import axios from "axios";

const apiEndpoint = {
    list: ""
}

export const getListRequest = async (filter, status, page)=>{
    const params = {
        name: filter,
        status: status,
        page: page
    }

    try{
        const {data: list} = await axios.get(apiEndpoint.list, {params})
        console.log({list})
        return list
    }   catch (e) {
        console.log({GetListError: e})
        return null
    }
}
