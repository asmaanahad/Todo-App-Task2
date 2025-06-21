import { Text, View } from "react-native";
import { FlatList } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <View style={styles.todoItem}>
      <Text
        style={{
          ...styles.todotitle,
          fontSize: 20,
          fontWeight: "500",
          flex: 1,
          textDecorationLine:todo.complete ? "line-through": "none"
        }}
      >
        {todo.title}
        {todo.complete}
      </Text>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Ionicons
          name={todo.complete ? "checkbox" : "square-outline"}
          size={22}
          color={todo.complete ? "green" : "gray"}
          onPress={() => completeTodo(todo)}
          style={{ marginRight: 10 }}
        />
        <MaterialIcons
          name="delete"
          size={22}
          color="red"
          onPress={() => {
            deleteTodo(todo);
          }}
        />
      </View>
    </View>
  );
};

export default TodoItem;

