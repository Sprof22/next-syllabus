import { BlackAxios } from "../config"
import { LoginInterface } from '../../data/auth';

export const loginFunction = async function (input: LoginInterface) {
    try {
        const result = await BlackAxios.post("/auth/login")
        return result.data
    } catch (error) {

    }
}