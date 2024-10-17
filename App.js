import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native"; // Ubah ini ke @react-navigation/native
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screen/DashboardScreen";
import SettingsScreen from "./screen/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        title: "Lapan Lapan",
                        drawerLabel: "Home",
                    }}
                />
                <Drawer.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: "Lapan Lapan",
                        drawerLabel: "About Me",
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
