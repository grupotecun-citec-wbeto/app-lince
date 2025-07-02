//import { Text } from "@chakra-ui/react";
import ViewLayout from "@/layouts/ViewLayout";
import EquipmentCardGrid from "@/components/equipment/EquipmentCardGrid";
import SearchBar from "@/components/search/SearchBar";


const Equipment = () => {
  

 return (
    <ViewLayout title="Buscar">
      <SearchBar />
      <div style={{ margin: "16px 0" }} />
      <EquipmentCardGrid />
    </ViewLayout>
  );
};

export default Equipment;
