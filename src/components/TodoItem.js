// import { View, Text, TouchableOpacity } from "react-native";
// import Feather from "@expo/vector-icons/Feather";
// import { styles } from "../../styles";

// const TodoItem = ({ todo, onDelete, onToggleCompleted }) => {
//   return (
//     <View style={styles.todoItem}>
//   <Text
//     style={{
//       fontSize: 22,
//       fontWeight: "700",
//       color: "#222",
//       textDecorationLine: todo.completed ? "line-through" : "none",
//       marginBottom: 8,
//     }}
//   >
//     {todo.title}
//   </Text>

//   <Text
//     style={{
//       fontSize: 16,
//       color: "#777",
//       marginBottom: 16,
//     }}
//   >
//     {todo.description}
//   </Text>

//   <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
//     <TouchableOpacity onPress={() => onToggleCompleted(todo.id)} style={{ marginRight: 16 }}>
//       <Feather
//         name="check-circle"
//         size={28}
//         color={todo.completed ? "#4CAF50" : "#ccc"}
//       />
//     </TouchableOpacity>

//     <TouchableOpacity onPress={() => onDelete(todo.id)}>
//       <Feather name="trash-2" size={28} color="#F44336" />
//     </TouchableOpacity>
//   </View>
// </View>

//   );
// };

// export default TodoItem;




import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";
import { useDispatch } from "react-redux";
import { markAsCompleted, removeTodo } from "../Redux/slices/todos.slice";

const TodoItem = ({ todo }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.todoItem} activeOpacity={0.7}>
      <Text
        onPress={() => navigate(PATHS.DETAILS, { todo })}
        style={{
          fontSize: 20,
          fontWeight: "500",
          textDecorationLine: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Feather
          name="trash"
          size={20}
          color="red"
          onPress={() => dispatch(removeTodo(todo.id))}
        />
        
        <AntDesign
          name={todo.completed ? "checkcircle" : "checkcircleo"}
          size={20}
          color="green"
          onPress={() => dispatch(markAsCompleted(todo.id))}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
