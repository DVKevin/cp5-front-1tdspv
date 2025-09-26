import {useState } from "react";
import type { StudySession } from "../types/study-session";

interface StudySessionFormProps {
  onAdd: (studySession: StudySession) => void;
}

export function StudySessionForm({ onAdd }: StudySessionFormProps   ) {

  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");


  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const studySession: StudySession = {
      id: crypto.randomUUID(),
      subject,
      minutes,
      date,
      notes
    };

    onAdd(studySession);

    setSubject("");
    setMinutes(0);
    setDate("");
    setNotes("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-gray-100 border-solid border-3 rounded-xl p-4 flex flex-col gap-3 mt-2 mb-2 w-full"
    >

      <label htmlFor="studySession-subject">Conteúdo</label>
      <input
        type="text"
        id="studySession-subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Conteúdo"
        className="border rounded p-2"
      />

      <label htmlFor="studySession-minutes">Duração (min)</label>
      <input
        type="number"
        id="studySession-minutes"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
        placeholder="Duração (min)"
        className="border rounded p-2"
      />

      <label htmlFor="studySession-date">Dia de estudos</label>
      <input
        type="date"
        id="studySession-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Dia de estudos"
        className="border rounded p-2"
      />

    <label htmlFor="studySession-notes">Anotações do conteúdo (opcional)</label>
      <input
        type="text"
        id="studySession-notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Anotações do conteúdo"
        className="border rounded p-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-yellow-400"
      >
        Adicionar estudos
      </button>
    </form>
  );
}
