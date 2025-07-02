import { Button, Text } from "@chakra-ui/react";
import MainLayout from "@layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout title="Página de Inicio">
      <Text fontSize="xl" mb={4}>Página de inicio</Text>
      <Button colorScheme="teal" onClick={() => alert("¡Botón funcionando!")}>
        Probar botón
      </Button>
    </MainLayout>
  );
};

export default Home;
