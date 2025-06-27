// import { View, Text, FlatList } from "react-native";
// import { styles } from "../../styles";
// import React from "react";

// const CompletedTasks = ({ route }) => {
//   const todos = route?.params?.todos || [];

//   const completed = todos.filter(todo => todo.completed);

//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
//         Completed Tasks
//       </Text>

//       <FlatList
//         data={completed}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Text style={{ padding: 8, fontSize: 16 }}>
//             ✅ {item.title}
//           </Text>
//         )}
//       />
//     </View>
//   );
// };

// export default CompletedTasks;



import { useSelector } from "react-redux";
import { styles } from "../../styles";
import TodoItem from "../components/TodoItem";
import { FlatList, Text, View } from "react-native";

const CompletedTasks = () => {
  const todos = useSelector((state) =>
    state.todosState.todos.filter((todo) => todo.completed)
  );

  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No completed tasks</Text>
        </View>
      ) : (
        <FlatList
          data={todos}
          style={styles.todosContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem todo={item} />}
        />
      )}
    </View>
  );
};

export default CompletedTasks;
