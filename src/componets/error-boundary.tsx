import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
     
      return (
        <div className="flex flex-col justify-center items-center gap-3 text-center py-20">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Ocorreu um erro inesperado.</h1>
          <p className="text-gray-600 mb-6">
            Pedimos desculpa pelo transtorno. Por favor, tente voltar para a página inicial.
          </p>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="bg-blue-600 text-white p-2 rounded hover:underline"
          >
            Voltar para a Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}