//import { Text } from "@chakra-ui/react";
import ViewLayout from "@/layouts/ViewLayout";
import EquipoInfoTable from "@/components/client/EquipoInfoTable";
import { Button } from "@chakra-ui/react";
import Form from "@/components/client/Form";

const Equipment = () => {
  

 return (
    <ViewLayout title="Información del cliente">
        <EquipoInfoTable />
        {/* Aquí puedes agregar más componentes o lógica según sea necesario */}
        <Form />
        <div style={{ margin: "16px 0" }} />
        <Button 
            colorScheme="blue"
            as="a"
            href="/questionsections"
        >
            Siguiente
        </Button>
    </ViewLayout>
  );
};

export default Equipment;
