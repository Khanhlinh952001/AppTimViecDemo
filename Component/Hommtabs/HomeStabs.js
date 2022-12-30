
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <>
      <Tab.Navigator
        style={{ paddingTop: 10, backgroundColor: "black" }}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#3d3044",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Cart") {
              iconName = focused ? "shopping-cart" : "shopping-cart";
            } else if (route.name === "List") {
              iconName = focused ? "list-alt" : "list-alt";
            } else if (route.name === "User") {
              iconName = focused ? "user" : "user";
            }

            // You can return any component that you like here!

            return <FontAwesome name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "white",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="List"
          component={List}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="User"
          component={User}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}