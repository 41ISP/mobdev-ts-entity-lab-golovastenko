import axios from "axios"
import type { ITeam, IStrapiResponse } from "./types"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstance = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
})

const getTeams = async(): Promise<IStrapiResponse<ITeam[]>> => {
    const res = await apiInstance.get<IStrapiResponse<ITeam[]>>('/hltvs', {
        params: {
            populate: "*",
        }
    })
    return res.data
}

// const postTeams = async(): Promise<IStrapiResponse<ITeam[]>> => {
//     // const res = await apiInstance.post<IStrapiResponse<ITeam[]>>('/hltvs', { data: input })
//     // return res.data
// }

// const deleteTeams = async(): Promise<IStrapiResponse<ITeam[]>> => {
//     const res = await apiInstance.delete<IStrapiResponse<ITeam[]>>('/hltvs<documentId>')
//     return res.data
// }

export const api = { getTeams
    // , postTeams, deleteTeams
}