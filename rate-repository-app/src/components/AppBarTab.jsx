import Text from "./Text";
import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 1,
    paddingLeft: 10,
    paddingBottom: 10
  },
});

const AppBarTab = ({ text, route }) => {
  return (
    <Pressable style={styles.flexItem}>
      <Link to={route}>
        <Text color="white" fontSize="subheading" fontWeight="bold" >
          {text}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;