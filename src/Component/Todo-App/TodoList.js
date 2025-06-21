import { ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native-web";
import TodoItem from "./TodoItem";
import { styles } from "./styles";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <ScrollView
      style={{ ...styles.todosContainer }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default TodoList;

