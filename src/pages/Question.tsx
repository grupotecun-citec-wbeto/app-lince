//import { Text } from "@chakra-ui/react";
import ViewLayout from "@/layouts/ViewLayout";
import { Button, HStack } from '@chakra-ui/react'

import InspectionItemCard from "@/components/questionsecctions/InspectionItemCard";


const Question = () => {
  

 return (
    <ViewLayout title="Preparación maquina para inspección">
        
        {/* Aquí puedes agregar más componentes o lógica según sea necesario */}
        
        <InspectionItemCard id="item1" label="1.1 - Chequear con customer para operator complaints" />
        <InspectionItemCard id="item2" label="1.2 - Chequear con customer para operator complaints" />

        <div style={{ margin: "16px 0" }} />
        <HStack justify="space-between" mt={6} px={4}>
            <Button
                variant="outline"
                colorScheme="gray"
                
            >
                ANTERIOR
            </Button>
            <Button
                bg="yellow.400"
                _hover={{ bg: 'yellow.500' }}
                _active={{ bg: 'yellow.600' }}
                color="black"
                
            >
                SIGUIENTE
            </Button>
        </HStack>
    </ViewLayout>
  );
};

export default Question;
