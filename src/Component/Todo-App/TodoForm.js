
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { TextInput } from "react-native-web";
import { useState } from "react";


function TodoForm({addTodo}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = () =>{
      if (!title) return;
      const newTodo = {
        id: Math.random().toString(),
        title: title,
        description: description,
        complete: false,
      };
      addTodo(newTodo);
      setTitle("");
      setDescription("");
    }
    return (
      <>
        <TextInput style={styles.input} placeholder="Title" value={title} onChange={(val)=> setTitle(val.target.value)} />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChange={(val) => setDescription(val.target.value)}
        />
        <TouchableOpacity
          style={{ ...styles.submitBtn }}
          activeOpacity={0.7}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={{ ...styles.text, color: "white", fontSize: 16 }}>
            Submit
          </Text>
        </TouchableOpacity>
      </>
    );
}

export default TodoForm;



