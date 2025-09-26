import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./componets/layout";
import { NotFound } from "./pages/not-found";
import { Suspense, lazy, useCallback, useState } from "react";
import type { StudySession } from "./types/study-session";
import { ErrorBoundary } from "./componets/error-boundary";
import { StudyDetails } from "./pages/study-details";


const Home = lazy(() => import('./pages/home').then(module => ({ default: module.Home })));
const NovaSessao = lazy(() => import('./pages/add-nova-sessao').then(module => ({ default: module.NovaSessao })));

function App() {
  const [studies, setStudies] = useState<StudySession[]>([]);

  const removeStudySession = useCallback(
    (id: string) => {
      setStudies((prevStudies) => prevStudies.filter((study) => study.id !== id));
    },
    []
  );

  const addStudySession = useCallback((studySession: StudySession) => {
    setStudies((prev) => [...prev, studySession]);
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div className="text-center py-20">Carregando...</div>}>
          <Routes>
            
            <Route path="/" element={<Layout />}>
            
              <Route
                index
                element={<Home studies={studies} removeStudy={removeStudySession} />}
              />
           
              <Route
                path="/add"
                element={<NovaSessao onAdd={addStudySession} studies={studies} />}
              />
            
              <Route
                path="/session/:id"
                element={<StudyDetails studies={studies} />}
              />
            
              <Route path="*" element={<NotFound />} />
            </Route>
      
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;