// Importing Related Assets/Modules
import AsyncStorage from "@react-native-async-storage/async-storage";

// Key used to store things in AsyncStorage
const key = "golfstorage";

// Saves a new round
export async function saveScore(score: number) {
    try {
        // calls for any existing stored data
        const existing = await AsyncStorage.getItem(key);

        // Parse existing data or use an empathy array if there is nothing stored
        const history = existing ? JSON.parse(existing) : [];

        // Add new score including the current date and time(toISOString)
        const newHistory = [...history, { score, date: new Date().toISOString() }];

        // Save newHistory to AsyncStorage
        await AsyncStorage.setItem(key, JSON.stringify(newHistory));
    } catch (e) {
        // Calls any errors that occur while running
        console.error("Error", e);
    }
}

// Load all rounds in AsyncStorage
export async function overallHistory(): Promise<{ score: number; date: string }[]> {
    try {
        // Getting the stored history
        const saved = await AsyncStorage.getItem(key);

        // Parse and return it as an array with score and date objects
        return saved ? JSON.parse(saved) : [];
        
    } catch (e) {
        // Calls any errors that occur while running. 
        // If any errors, return an empty array( return [])
        console.error("Error", e);
        return [];
    }
}