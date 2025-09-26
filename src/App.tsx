import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { NovaSessao } from "./pages/add-nova-sessao";
import { NotFound } from "./pages/not-found";
import { useCallback, useState } from "react";
import type { StudySession } from "./types/study-session";

export default function App() {
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
    <div
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "#333",
          fontSize: "28px",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Estilização Inline + Rotas
      </h1>

      <BrowserRouter>
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
} 

