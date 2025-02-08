export interface Block {
    id: string;
    name: string;
    completed: boolean;
    content: string;
}

export interface AppState {
    currentWeight: number;
    previousWeight: number;
    blocks: Block[];
    allCompleted: boolean;
}