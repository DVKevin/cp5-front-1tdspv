import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useCallback, useState } from "react";
import type { StudySession } from "./types/study-session";

import { Layout } from "./componets/layout";
import { ErrorBoundary } from "./componets/error-boundary";


const Home = lazy(() => import('./pages/home').then(module => ({ default: module.Home })));
const NovaSessao = lazy(() => import('./pages/add-nova-sessao').then(module => ({ default: module.NovaSessao })));
const StudyDetails = lazy(() => import('./pages/study-details').then(module => ({ default: module.StudyDetails })));
const NotFound = lazy(() => import('./pages/not-found').then(module => ({ default: module.NotFound })));

function App() {
  const [studies, setStudies] = useState<StudySession[]>([]);

  const removeStudySession = useCallback((id: string) => {
    setStudies((prevStudies) => prevStudies.filter((study) => study.id !== id));
  }, []);

  const addStudySession = useCallback((studySession: StudySession) => {
    setStudies((prev) => [...prev, studySession]);
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div className="text-center p-20">Carregando página...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home studies={studies} removeStudy={removeStudySession} />} />
              <Route path="add" element={<NovaSessao onAdd={addStudySession} studies={studies} />} />
              <Route path="session/:id" element={<StudyDetails studies={studies} />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  ); 
} 

export default App; 
