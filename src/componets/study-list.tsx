import type { StudySession } from "../types/study-session";
import { StudyResume } from "./study-resume";


interface StudyListProps {
  studies: StudySession[];
  removeStudy: (id: string) => void;
}


export function StudyList({ studies, removeStudy }: StudyListProps) {
  return (
    <div className="space-y-4">
      {studies.map((session) => (
        <StudyResume
          key={session.id}
          removeStudy={removeStudy}
          studySession={session}
        />
      ))}
    </div>
  );
}