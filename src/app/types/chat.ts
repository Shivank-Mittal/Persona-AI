export enum ROLE {
    ASSISTANT= "ASSISTANT",
    USER = "USER",
    SYSTEM = "MODEL"
}


export type Chat = {role: ROLE, content: string, thinking?: boolean}
