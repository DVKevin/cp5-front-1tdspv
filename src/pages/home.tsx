import { StudyList } from "../componets/study-list";
import type { StudySession } from "../types/study-session";

interface HomeProps {
    studies: StudySession[];
    removeStudy: (id: string) => void;
}

export function Home({ studies, removeStudy }: HomeProps){
    return(
        <>
            <h2 className="font-bold text-gray-600 text-xl mb-3">Página inicial</h2>
            <StudyList studies={studies} removeStudy={removeStudy} />
        </>
    )
}