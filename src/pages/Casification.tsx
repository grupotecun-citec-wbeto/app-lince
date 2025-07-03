//import { Text } from "@chakra-ui/react";
import ViewLayout from "@/layouts/ViewLayout";
import { Button,HStack } from "@chakra-ui/react";
import FormularioClasificacion from "@/components/formularios/FormularioClasificacion";

const Clasification = () => {
  

 return (
    <ViewLayout title="Información General">
        {/* Aquí puedes agregar más componentes o lógica según sea necesario */}
        <FormularioClasificacion />
        <div style={{ margin: "16px 0" }} />
        <div style={{ margin: "16px 0" }} />
        <HStack justify="space-between" mt={6} px={4}>
            <Button
                variant="outline"
                colorScheme="gray"
                
            >
                Anterior
            </Button>
            <Button
                bg="yellow.400"
                _hover={{ bg: 'yellow.500' }}
                _active={{ bg: 'yellow.600' }}
                color="black"
                
            >
                Siguiente
            </Button>
        </HStack>
    </ViewLayout>
  );
};

export default Clasification;
