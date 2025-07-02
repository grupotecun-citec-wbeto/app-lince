//import { Button, Text } from "@chakra-ui/react";
import MainLayout from "@layouts/MainLayout";
import { useDisclosure } from '@chakra-ui/react'

import InspectionTabs from "@/components/main/InspectionTabs";
import InspectionSearchBar from "@/components/main/InspectionSearchBar";
import CreateInspectionButton from "@/components/main/CreateInspectionButton";
import SelectInspectionModal from "@/components/main/SelectInspectionModal";

const Home = () => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleCreateInspection = () => {
        // Aquí puedes agregar la lógica para crear una nueva inspección
        onOpen();
    };    
 return (
    <MainLayout title="Inspecciones" onOpenModal={onOpen}>
        <InspectionSearchBar /> 
        <InspectionTabs />
        <CreateInspectionButton onClick={handleCreateInspection} />
        <SelectInspectionModal isOpen={isOpen} onClose={onClose} />
        {/* Aquí puedes agregar más componentes o lógica según sea necesario */}
    </MainLayout>
  );
};

export default Home;
