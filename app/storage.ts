import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "golfstorage";

// Saves a new round
export async function saveScore(score: number) {
    try {
        const existing = await AsyncStorage.getItem(key);
        const history = existing ? JSON.parse(existing) : [];

        // Add new round
        const newHistory = [...history, { score, date: new Date().toISOString() }];

        await AsyncStorage.setItem(key, JSON.stringify(newHistory));
    } catch (e) {
        console.error("Error", e);
    }
}

// Load all rounds
export async function overallHistory(): Promise<{ score: number; date: string }[]> {
    try {
        const saved = await AsyncStorage.getItem(key);
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        console.error("Error", e);
        return [];
    }
}