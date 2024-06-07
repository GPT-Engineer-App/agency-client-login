import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleLogin = () => {
    if (email === "test@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">{isLogin ? "Login" : "Sign Up"}</Text>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        {!isLogin && (
          <FormControl id="confirm-password">
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </FormControl>
        )}
        {error && <Text color="red.500">{error}</Text>}
        <Button colorScheme="teal" onClick={isLogin ? handleLogin : handleSignUp}>
          {isLogin ? "Login" : "Sign Up"}
        </Button>
        <Button variant="link" onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;