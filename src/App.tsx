import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, About, YourBooks, Browse } from "./pages";
import Navbar from "./components/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReadingListProvider } from "./Context/ReadingListContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <h1>Error element</h1>,
        children: [
            {
                index: true,
                element: <HomePage />,
                errorElement: <h1>Error element</h1>,
            },
            {
                path: "Browse",
                element: <Browse />,
                errorElement: <h1>Error element</h1>,
            },
            {
                path: "about",
                errorElement: <h1>Error</h1>,
                element: <About />,
            },
            {
                path: "YourBooks",
                errorElement: <h1>Error</h1>,
                element: <YourBooks />,
            },
        ],
    },
]);

function App() {
    const queryClient = new QueryClient();

    return (
        <>
            <ReadingListProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </ReadingListProvider>
        </>
    );
}

export default App;
