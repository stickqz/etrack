import { Stack } from "expo-router"; // Import Stack for navigation
import "./globals.css"; // Import global styles


export default function RootLayout() {

    // if not logged in, show the app layout
    // if logged in, show the dashboard layout
    const isLoggedIn = true; // Replace with actual authentication logic

    return (
        <Stack>
            <Stack.Screen name="(app)" options={{ headerShown: false }} />
        </Stack>
    );
}
