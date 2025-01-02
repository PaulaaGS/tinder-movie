import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { MoviesViewer } from "./components/MoviesViewer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MoviesViewer />
    </QueryClientProvider>
  );
}

export default App;
