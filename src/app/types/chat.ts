export enum ROLE {
    ASSISTANT= "ASSISTANT",
    USER = "USER",
    SYSTEM = "SYSTEM"
}


export type Chat = {role: ROLE, content: string, thinking?: boolean}
