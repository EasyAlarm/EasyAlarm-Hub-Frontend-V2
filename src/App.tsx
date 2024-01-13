import 'react-toastify/dist/ReactToastify.css';

import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppRoutes } from "./Routes";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const App: FC = () =>
{
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer theme='colored' autoClose={2000} />
            <AppRoutes />
        </QueryClientProvider>
    );
};

export default App;