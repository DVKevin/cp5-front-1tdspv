import { Link } from "react-router-dom";
import type { StudySession } from "../types/study-session";

interface StudyResumeProps {
  studySession: StudySession;
  removeStudy: (id: string) => void;
}

export function StudyResume({ studySession, removeStudy }: StudyResumeProps) {
  return (
    <div className="w-full rounded-xl border border-gray-200 shadow-sm px-4 py-5 flex flex-col gap-3 mb-3 bg-white">
      <div className="flex">
        <div className="flex flex-col flex-1">
          <h2 className="font-semibold text-gray-900">{studySession.subject}</h2>
          <p className="text-sm text-gray-500">{studySession.notes}</p>
          <h3 className="text-sm mt-2 text-gray-600">
            Data: {studySession.date}
          </h3>
        </div>

        <div className="flex flex-col w-32 min-h-16 border border-gray-200 rounded-lg overflow-hidden">
          <Link
            to={`/studySession/${studySession.id}`}
            state={{ studySession }}
            className="flex-1 flex items-center justify-center text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            Detalhes
          </Link>

          <button
            onClick={() => removeStudy(studySession.id)}
            className="flex-1 flex items-center justify-center text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}
