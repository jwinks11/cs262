import React, { useState } from 'react';
import {
	StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

// import Icons
import Icon from 'react-native-vector-icons/Feather';

import TodoList from './todoList';

export default function App() {
  // constants hold the state value and a function to change the value (same for todos)
  // initialize the local state for the App component with hooks
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState([]);

  // function for adding todo, original value as empty string
	addTodo = () => {
		if (value.length > 0) {
			setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
			setValue('');
		}
	};

  // function for checking the box of the todo on touch
	checkTodo = id => {
		setTodos(
			todos.map(todo => {
				if (todo.key === id) todo.checked = !todo.checked;
				return todo;
			})
		);
	};

  // function for deleting a todo on touch of the trash button
	deleteTodo = id => {
		setTodos(
			todos.filter(todo => {
				if (todo.key !== id) return true;
			})
		);
	};

	return (
    // display single line with prompt, add lines when plus icon is touched, use state changing functions to update
    // the states
		<View style={styles.container}>
			<Text style={styles.header}>Todo List</Text>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					multiline={true}
					placeholder="What do you want to do today?"
					placeholderTextColor="#abbabb"
					value={value}
					onChangeText={value => setValue(value)}
				/>
				<TouchableOpacity onPress={() => addTodo()}>
					<Icon name="plus" size={30} color="blue" style={{ marginLeft: 15 }} />
				</TouchableOpacity>
			</View>
			<ScrollView style={{ width: '100%' }}>
				{todos.map(item => (
					<TodoList
						text={item.text}
						key={item.key}
						checked={item.checked}
						setChecked={() => checkTodo(item.key)}
						deleteTodo={() => deleteTodo(item.key)}
					/>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	header: {
		marginTop: '15%',
		fontSize: 20,
		color: 'red',
		paddingBottom: 10
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		borderColor: 'black',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingBottom: 10
	},
	textInput: {
		flex: 1,
		height: 20,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		paddingLeft: 10,
		minHeight: '3%'
	}
});