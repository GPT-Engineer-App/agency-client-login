import { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, List, ListItem, Text } from "@chakra-ui/react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <Heading mb={6}>Dashboard</Heading>
      <Box width="100%" mb={4}>
        <Flex>
          <Input
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            mr={2}
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </Flex>
      </Box>
      <Box width="100%">
        <List spacing={3}>
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              <Text>{task}</Text>
              <Button size="sm" colorScheme="red" onClick={() => deleteTask(index)}>Delete</Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Dashboard;