import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity ,FlatList} from "react-native";
import { styles } from "./styles";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    const loadData = async () => {
      try {
        const data = await AsyncStorage.getItem("todos");
        if (data !== null) {
          setTodos(JSON.parse(data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  },[]);

  useEffect(()=>{
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch(e){
        console.log(e);
        
      }
    }
    saveData();
  },[todos])

  
  const addTodo = (todo) => {
    setTodos(prevTodos => [...prevTodos, todo])
  }
  const deleteTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
  }
  const completeTodo = (todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, complete: !t.complete } : t))
    );
  }

  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.complete;
    if (filter === "done") return todo.complete;
    return true;
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.text,
          fontSize: 24,
          color: "black",
          fontWeight: "bold",
          marginBottom: 20,
          marginTop: 40,
          borderBottom: "2px solid black",
        }}
      >
        TODO APP
      </Text>
      {/* Here we send add fun to get it in form page and add todo to */}
      <TodoForm addTodo={addTodo} />
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterBtn, filter === "all" && styles.activeFilterBtn]}
          onPress={() => {
            setFilter("all");
          }}
        >
          <Text
            style={[
              styles.text,
              { color: "black", fontSize: 16 },
              filter === "all" && styles.activeFilterText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            filter === "active" && styles.activeFilterBtn,
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: "black", fontSize: 16 },
              filter === "active" && styles.activeFilterText,
            ]}
            onPress={() => {
              setFilter("active");
            }}
          >
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            filter === "done" && styles.activeFilterBtn,
          ]}
          onPress={() => {
            setFilter("done");
          }}
        >
          <Text
            style={[
              styles.text,
              { color: "black", fontSize: 16 },
              filter === "done" && styles.activeFilterText,
            ]}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <StatusBar style="auto" />
    </View>
  );
}


