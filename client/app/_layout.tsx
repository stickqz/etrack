import { Stack } from "expo-router";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function RootLayout() {

    // if not logged in, show the app layout
    // if logged in, show the dashboard layout
    const isLoggedIn = true; // Replace with actual authentication logic

    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="(app)" options={{ headerShown: false }} />
            </Stack>
        </Provider>
    );
}
