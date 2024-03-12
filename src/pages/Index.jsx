import { useState } from "react";
import { VStack, Input, IconButton, HStack, Text, Box, Heading, useToast, Container } from "@chakra-ui/react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const addTodo = () => {
    if (!inputValue.trim()) {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setTodos([...todos, { id: Date.now(), content: inputValue }]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading>Todo App</Heading>
        <HStack w="full">
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add your new todo" variant="filled" />
          <IconButton colorScheme="blue" aria-label="Add todo" icon={<FaPlus />} onClick={addTodo} />
        </HStack>
        <VStack w="full" spacing={4}>
          {todos.map((todo) => (
            <HStack key={todo.id} w="full" justifyContent="space-between" px={4} py={2} borderWidth="1px" borderRadius="lg">
              <Text>{todo.content}</Text>
              <IconButton aria-label="Delete todo" icon={<FaTrashAlt />} onClick={() => deleteTodo(todo.id)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
