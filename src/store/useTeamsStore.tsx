import { create } from "zustand";
import type { ITeam, IStrapiResponse } from "../types";
import { api } from "../api";

interface ITeamStore {
    teams: IStrapiResponse<ITeam[]> | undefined,
    getTeams: () => Promise<void>,
    // postTeams: () => Promise<void>,
    // deleteTeams: () => Promise<void>,
}

export const useTeamsStore = create<ITeamStore>((set) => ({
    teams: undefined,
    getTeams: async () => {
        try {
            const res = await api.getTeams()
            set({ teams: res })
        } catch (error) {
            console.error(error)
        }
    }
    // postTeams: async () => {
    //     try {
    //         const res = await api.postTeams()
    //         // set({ teams: res })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // deleteTeams: async () => {
    //     try {
    //         const res = await api.deleteTeams()
    //         // set({ teams: res })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
}))