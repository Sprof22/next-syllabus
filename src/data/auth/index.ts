export interface User {
    name: string;
    photo: string;
}

export interface Access {
    accessToken: string
    expiresIn: number;
    granted: boolean;
    timestamp: number;
    refreshToken: string;
}


export interface LoginInterface {
    email: string;
    username: string;
    password: string;
}

export interface ISignupInterface extends LoginInterface {
    companyName: string;
}


export interface authStore {
    access?: Access;
    user?: User;
}

export interface PartialUpdate {
    user: Partial<User>
}


export interface IAuthStore extends authStore {
    setUser: (payload: User) => void
    setAccess: (payload: Access) => void
    Login: (payload: LoginInterface) => Promise<void>
    Signup: (payload: ISignupInterface) => Promise<void>
    logoutAccount: () => Promise<void>
}