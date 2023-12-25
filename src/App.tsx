import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AlertProvider } from "./context/AlertContext";
import { AppRoutes } from "./Routes";

const queryClient = new QueryClient();

const App: FC = () =>
{
    return (
        <QueryClientProvider client={queryClient}>
            <AlertProvider>
                <AppRoutes />
            </AlertProvider>
        </QueryClientProvider>
    );
};

export default App;