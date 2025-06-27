// import { FlatList } from "react-native";
// import { styles } from "../../styles";
// import TodoItem from "./TodoItem";

// const Todos = ({ todos, onDelete, onToggleCompleted }) => {
//   return (
//     <FlatList
//       data={todos}
//       style={styles.todosContainer}
//       keyExtractor={(item) => item.id}
//       renderItem={({ item }) => (
//         <TodoItem todo={item} onDelete={onDelete} onToggleCompleted={onToggleCompleted} />
//       )}
//     />
//   );
// };

// export default Todos;




import { FlatList } from "react-native";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { FILTRATION_TYPES } from "../Redux/slices/todos.slice";

const Todos = () => {
  const { todos, filter } = useSelector((state) => state.todosState);

  return (
    <FlatList
      data={todos?.filter((todo) => {
        if (filter === FILTRATION_TYPES.ALL) return true;
        if (filter === FILTRATION_TYPES.COMPLETED) return todo.completed;
        if (filter === FILTRATION_TYPES.IN_PROGRESS) return !todo.completed;
      })}
      style={styles.todosContainer}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TodoItem todo={item} />}
    />
  );
};

export default Todos;
