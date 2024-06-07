import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Heading } from "@chakra-ui/react";

import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <Box width="100%" mb={4}>
        <Heading mb={6}>Welcome to the App</Heading>
        {session ? (
          <Button colorScheme="teal" onClick={logout}>Logout</Button>
        ) : (
          <Button colorScheme="teal" onClick={() => navigate("/login")}>Login</Button>
        )}
      </Box>
    </Container>
  );
};

export default Index;