//import { Text } from "@chakra-ui/react";
import ViewLayout from "@/layouts/ViewLayout";
import EquipoInfoTable from "@/components/client/EquipoInfoTable";
import { Button } from "@chakra-ui/react";
import InspectionGroupGrid from "@/components/questionsecctions/InspectionGroupGrid";


const QuestionSections = () => {
  

 return (
    <ViewLayout title="CASE CX22O">
        <EquipoInfoTable />
        {/* Aquí puedes agregar más componentes o lógica según sea necesario */}
        
        <InspectionGroupGrid />

        <div style={{ margin: "16px 0" }} />
        <Button 
            colorScheme="blue"
            as="a"
            href="/searchequipment"
        >
            Enviar
        </Button>
    </ViewLayout>
  );
};

export default QuestionSections;
