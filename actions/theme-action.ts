"use server";

import { cookies } from "next/headers";

// Function to set the selected font in cookies
export async function setSelectedFontServer(font: string) {
    const cookieStore = await cookies();
    cookieStore.set("selectedFont", font, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
    });
}

// Function to get the selected font from cookies
export async function getSelectedFontServer() {
    const cookieStore = await cookies();
    return cookieStore.get("selectedFont")?.value || "font-inter";
}

// Function to set the selected theme in cookies
export async function setSelectedThemeServer(theme: string) {
    const cookieStore = await cookies();
    cookieStore.set("selectedTheme", theme, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
    });
}

// Function to get the selected theme from cookies
export async function getSelectedThemeServer() {
    const cookieStore = await cookies();
    return cookieStore.get("selectedTheme")?.value || "system";
}