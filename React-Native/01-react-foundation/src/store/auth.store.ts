import { create } from "zustand";

interface AuthState {
    status: AuthUserState.authenticated | AuthUserState.unauthenticated | AuthUserState.checking
    token?: string;
    user?: {
        name: string;
        email: string;
    },
    login: (email: string, password: string) => void;
    logout: () => void
}

export enum AuthUserState {
    authenticated = 'authenticated',
    unauthenticated = 'unauthenticated',
    checking=  'checking',
}


export const useAuthStore = create<AuthState>()((set) => ({
    status: AuthUserState.checking,
    token: undefined,
    user: undefined,
    login: (email: string, password:string) => {
        set({
            status: AuthUserState.authenticated,
            token: 'ABC123',
            user: {
                name:'Mario',
                email: email
            }
        });
    },
    logout: () => {
        set({
            status :AuthUserState.unauthenticated,
            token : undefined,
            user: undefined,
        })
    },
}))