import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Movies } from "./components/Movies";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Movies />
    </QueryClientProvider>
  );
}

export default App;
