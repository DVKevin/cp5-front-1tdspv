import { Link } from "react-router-dom";
import { Frown } from 'lucide-react';

export function NotFound() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>

      <Frown/>

      <p>sem problemas</p>

      <Link to="/">
        Clique aqui para voltar para a Home
      </Link>
    </div>
  );
}
