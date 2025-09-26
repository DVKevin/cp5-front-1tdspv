export interface StudySession {
 id: string;
 subject: string; // ex: "React", "Estruturas de Dados"
 minutes: number; // duração em minutos
 date: string; // ISO dd-mm-yyyy
 notes?: string; // opcional
}