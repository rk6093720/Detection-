import React,{useState}from "react";
import {
      Table,
      Thead,
      Tbody,
      Tr,
      Th,
      Td,
      Image,
      TableCaption,
      TableContainer,
      HStack,
      Box,
    } from "@chakra-ui/react";
import image from "../assets/Images/Security.jpg";
import Pagination from "../Component/Pagination";
const Vehicles =()=>{
    const [current,setCurrent]= useState(1);
    const vehiclesData = [
      {
        id: 1,
        status: "Enter",
        number_plate: "ABC123",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P1",
        driver_name: "John Doe",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T08:30:00Z",
      },
      {
        id: 2,
        status: "Exit",
        number_plate: "XYZ789",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P2",
        driver_name: "Jane Smith",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T09:00:00Z",
      },
      {
        id: 3,
        status: "Enter",
        number_plate: "LMN456",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P3",
        driver_name: "Alice Johnson",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T09:15:00Z",
      },
      {
        id: 4,
        status: "Enter",
        number_plate: "QWE123",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P4",
        driver_name: "Bob Brown",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T09:30:00Z",
      },
      {
        id: 5,
        status: "Exit",
        number_plate: "RTY567",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P5",
        driver_name: "Carol White",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T10:00:00Z",
      },
      {
        id: 6,
        status: "Enter",
        number_plate: "UOP098",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P6",
        driver_name: "Dave Green",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T10:15:00Z",
      },
      {
        id: 7,
        status: "Enter",
        number_plate: "ASD234",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P7",
        driver_name: "Eva Black",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T10:30:00Z",
      },
      {
        id: 8,
        status: "Exit",
        number_plate: "ZXC567",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P8",
        driver_name: "Frank Blue",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T11:00:00Z",
      },
      {
        id: 9,
        status: "Enter",
        number_plate: "VBN890",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P9",
        driver_name: "Grace Purple",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T11:15:00Z",
      },
      {
        id: 10,
        status: "Enter",
        number_plate: "HJK345",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P10",
        driver_name: "Henry Gold",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T11:30:00Z",
      },
    ];
    const itemperpage=2;
    const pageCount = Math.ceil(vehiclesData.length / itemperpage);
    return (
      <div>
        <TableContainer
          p={2}
          overflowY={"scroll"}
          width={"85%"}
          height={"490px"}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>status</Th>
                <Th>Number Plate</Th>
                <Th>Image</Th>
                <Th>Parking Spot</Th>
                <Th>Driver Name</Th>
                <Th>Car's Entry Image</Th>
                <Th>CreatedAt</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {vehiclesData.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.status}</Td>
                  <Td>{item.number_plate}</Td>
                  <Td>
                    <Image src={item.image} />
                  </Td>
                  <Td>{item.parking_spot}</Td>
                  <Td>{item.driver_name}</Td>
                  <Td>
                    <Image src={item.car_entry_image} />
                  </Td>
                  <Td>{item.created_at}</Td>
                  <Td>
                    <HStack>
                      <Box>Action</Box>
                      <Box>Reject</Box>
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Pagination
            current={current}
            setCurrent={setCurrent}
            pageCount={pageCount}
          />
        </TableContainer>
      </div>
    );
}
export default Vehicles;