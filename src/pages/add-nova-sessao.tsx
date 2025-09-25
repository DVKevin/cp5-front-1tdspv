import { useMemo } from "react";
import type { StudySession } from "../types/study-session";
import { StudySessionForm } from "../components/study-session-form";

interface AddNovaSessao {
  studies: StudySession[];
  onAdd: (studySession: StudySession) => void;
}

export function NovaSessao({ onAdd, studies }: AddNovaSessao) {
  const studySessionTotal = useMemo(() => {
    return studies.length;
  }, [studies]);

  const studyMinutes = useMemo(() => {
    let studyMinutes: number = 0;

    studies.forEach((studySession) => {
      studyMinutes += studySession.minutes;
    });

    const hours = Math.floor(studyMinutes / 60);
    const minutes = studyMinutes % 60;

    return `${hours}h ${minutes}min`;
  }, [studies]);

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="font-semibold text-gray-900 text-lg mb-2">
        Adicionar novo conteúdo de estudos
      </h2>

      <div className="mb-4 text-sm text-gray-600 space-y-1">
        <p>Total de conteúdos: <span className="font-medium">{studySessionTotal}</span></p>
        <p>Tempo de estudo: <span className="font-medium">{studyMinutes}</span></p>
      </div>

      <StudySessionForm onAdd={onAdd} />
    </div>
  );
}
