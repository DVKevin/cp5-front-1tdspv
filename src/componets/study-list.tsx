import type { StudySession } from "../types/study-session";
import { StudyResume } from "./study-resume";

interface StudyListProps {
  StudyList: StudySession[];
  removeStudy: (id: string) => void;
}

export function StudyList({ StudyList, removeStudy }: StudyListProps) {
  return (
    <>
      {StudyList.map((value) => {
        return <StudyResume removeStudy={removeStudy} studySession={value} />;
      })}
    </>
  );
}
