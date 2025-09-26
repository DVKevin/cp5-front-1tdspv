import type { StudySession } from "../types/study-session";
import { StudyResume } from "./study-resume";

interface StudyListProps {
  studies: StudySession[];
  removeStudy: (id: string) => void;
}

export function StudyList({ studies, removeStudy }: StudyListProps) {
  return (
    <>
      {studies.map((value) => {
        return <StudyResume removeStudy={removeStudy} studySession={value} key={value.id} />;
      })}
    </>
  );
}