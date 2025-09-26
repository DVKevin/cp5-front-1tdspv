import { Link, useParams } from "react-router-dom";
import type { StudySession } from "../types/study-session";

interface StudyDetailsProps {
  studies: StudySession[];
}

export function StudyDetails({ studies }: StudyDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const studySession = studies.find((s) => s.id === id);

  if (!studySession) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Sessão de Estudo não Encontrada</h2>
        <p className="text-gray-600 mb-6">A sessão que você está procurando não existe.</p>
        <Link to="/" className="bg-blue-600 text-white p-2 rounded hover:underline">
          Voltar para a Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{studySession.subject}</h1>
      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold">Data:</span> {studySession.date}</p>
        <p><span className="font-semibold">Duração:</span> {studySession.minutes} minutos</p>
        {studySession.notes && (
          <div>
            <p className="font-semibold">Anotações:</p>
            <p className="mt-1 p-3 bg-gray-50 rounded-md border border-gray-200">{studySession.notes}</p>
          </div>
        )}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">
          &larr; Voltar para a lista
        </Link>
      </div>
    </div>
  );
}