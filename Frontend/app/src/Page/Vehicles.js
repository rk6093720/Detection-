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
  useBreakpointValue,
} from "@chakra-ui/react";
import image from "../assets/Images/Security.jpg";
import Pagination from "../Component/Pagination";
import {useSelector} from "react-redux";
const Vehicles =()=>{
    const sidebarShow = useSelector((state) => state.store.sidebarShow);
    const [current,setCurrent]= useState(1);
    const [changeFlag,setCurrentFlag]=useState(false);
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
      {
        id: 11,
        status: "Enter",
        number_plate: "JKL678",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P11",
        driver_name: "Ivy Red",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T11:45:00Z",
      },
      {
        id: 12,
        status: "Exit",
        number_plate: "MNO901",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P12",
        driver_name: "Jack Brown",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T12:00:00Z",
      },
      {
        id: 13,
        status: "Enter",
        number_plate: "QRS234",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P13",
        driver_name: "Karen Green",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T12:15:00Z",
      },
      {
        id: 14,
        status: "Enter",
        number_plate: "TUV567",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P14",
        driver_name: "Larry Orange",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T12:30:00Z",
      },
      {
        id: 15,
        status: "Exit",
        number_plate: "WXY890",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P15",
        driver_name: "Mona Violet",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T12:45:00Z",
      },
      {
        id: 16,
        status: "Enter",
        number_plate: "ZAB123",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P16",
        driver_name: "Nate Indigo",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T13:00:00Z",
      },
      {
        id: 17,
        status: "Enter",
        number_plate: "CDE456",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P17",
        driver_name: "Oscar Silver",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T13:15:00Z",
      },
      {
        id: 18,
        status: "Exit",
        number_plate: "FGH789",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P18",
        driver_name: "Paul Gray",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T13:30:00Z",
      },
      {
        id: 19,
        status: "Enter",
        number_plate: "IJK012",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P19",
        driver_name: "Quinn White",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T13:45:00Z",
      },
      {
        id: 20,
        status: "Enter",
        number_plate: "LMN345",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P20",
        driver_name: "Rachel Blue",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T14:00:00Z",
      },
      {
        id: 21,
        status: "Exit",
        number_plate: "OPQ678",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P21",
        driver_name: "Steve Black",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T14:15:00Z",
      },
      {
        id: 22,
        status: "Enter",
        number_plate: "RST901",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P22",
        driver_name: "Tina Yellow",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T14:30:00Z",
      },
      {
        id: 23,
        status: "Enter",
        number_plate: "UVW234",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P23",
        driver_name: "Uma Pink",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T14:45:00Z",
      },
      {
        id: 24,
        status: "Exit",
        number_plate: "XYZ567",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P24",
        driver_name: "Victor Brown",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T15:00:00Z",
      },
      {
        id: 25,
        status: "Enter",
        number_plate: "ABC890",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P25",
        driver_name: "Willie Orange",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T15:15:00Z",
      },
      {
        id: 26,
        status: "Enter",
        number_plate: "DEF123",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P26",
        driver_name: "Xena Red",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T15:30:00Z",
      },
      {
        id: 27,
        status: "Exit",
        number_plate: "GHI456",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P27",
        driver_name: "Yuri Silver",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T15:45:00Z",
      },
      {
        id: 28,
        status: "Enter",
        number_plate: "JKL789",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P28",
        driver_name: "Zara Gold",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T16:00:00Z",
      },
      {
        id: 29,
        status: "Enter",
        number_plate: "MNO012",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P29",
        driver_name: "Ava White",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T16:15:00Z",
      },
      {
        id: 30,
        status: "Exit",
        number_plate: "PQR345",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P30",
        driver_name: "Blake Blue",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T16:30:00Z",
      },
      {
        id: 31,
        status: "Enter",
        number_plate: "STU678",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P31",
        driver_name: "Chloe Black",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T16:45:00Z",
      },
      {
        id: 32,
        status: "Enter",
        number_plate: "VWX901",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P32",
        driver_name: "Dylan Yellow",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T17:00:00Z",
      },
      {
        id: 33,
        status: "Exit",
        number_plate: "YZA234",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P33",
        driver_name: "Elena Pink",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T17:15:00Z",
      },
      {
        id: 34,
        status: "Enter",
        number_plate: "BCD567",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P34",
        driver_name: "Finn Brown",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T17:30:00Z",
      },
      {
        id: 35,
        status: "Enter",
        number_plate: "EFG890",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P35",
        driver_name: "Gina Orange",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T17:45:00Z",
      },
      {
        id: 36,
        status: "Exit",
        number_plate: "HIJ123",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P36",
        driver_name: "Hank Red",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T18:00:00Z",
      },
      {
        id: 37,
        status: "Enter",
        number_plate: "KLM456",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P37",
        driver_name: "Ivy Green",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T18:15:00Z",
      },
      {
        id: 38,
        status: "Enter",
        number_plate: "NOP789",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P38",
        driver_name: "Jake Silver",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T18:30:00Z",
      },
      {
        id: 39,
        status: "Exit",
        number_plate: "QRS012",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P39",
        driver_name: "Laura Gray",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T18:45:00Z",
      },
      {
        id: 40,
        status: "Enter",
        number_plate: "TUV345",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P40",
        driver_name: "Mark White",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T19:00:00Z",
      },
      {
        id: 41,
        status: "Enter",
        number_plate: "WXY678",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P41",
        driver_name: "Nina Blue",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T19:15:00Z",
      },
      {
        id: 42,
        status: "Exit",
        number_plate: "ZAB901",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P42",
        driver_name: "Owen Black",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T19:30:00Z",
      },
      {
        id: 43,
        status: "Enter",
        number_plate: "CDE234",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P43",
        driver_name: "Pia Yellow",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T19:45:00Z",
      },
      {
        id: 44,
        status: "Enter",
        number_plate: "FGH567",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P44",
        driver_name: "Quincy Pink",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T20:00:00Z",
      },
      {
        id: 45,
        status: "Exit",
        number_plate: "IJK890",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P45",
        driver_name: "Rachel Brown",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T20:15:00Z",
      },
      {
        id: 46,
        status: "Enter",
        number_plate: "LMN123",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P46",
        driver_name: "Sam Orange",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T20:30:00Z",
      },
      {
        id: 47,
        status: "Enter",
        number_plate: "OPQ456",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P47",
        driver_name: "Tina Red",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T20:45:00Z",
      },
      {
        id: 48,
        status: "Exit",
        number_plate: "RST789",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P48",
        driver_name: "Uma Green",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T21:00:00Z",
      },
      {
        id: 49,
        status: "Enter",
        number_plate: "UVW012",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P49",
        driver_name: "Victor Silver",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T21:15:00Z",
      },
      {
        id: 50,
        status: "Enter",
        number_plate: "XYZ345",
        image:
          "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2019/01/IMG_20190105_174511.jpg",
        parking_spot: "P50",
        driver_name: "Wendy Gray",
        car_entry_image: `${image}`,
        created_at: "2024-06-24T21:30:00Z",
      },
    ];
    const itemperpage=5;
    const pageCount = Math.ceil(vehiclesData.length / itemperpage);
     const boxwidth = useBreakpointValue({
       base: "100%",
       md: "100%",
       lg: !sidebarShow ? "calc(100% - 0.5%)" : "100%",
     });
     const end = current *  itemperpage;
     const start = end - itemperpage;
     const data = vehiclesData.slice(start, end);
      const [change, setChange] = useState(itemperpage);
    //  const handleChange =(e)=>{
    //   setChange(e.target.value);
    //   setCurrent(Number(pageCount))
    //  }
     console.log(data,change,current)
    return (
      <React.Fragment>
        <Box
          id="vehicles"
          overflow={"scroll"}
          position={"absolute"}
          width={boxwidth}
          height={"490px"}
        >
          <Box width={"100%"} height={"100%"}>
            <TableContainer
              p={2}
              overflowY={"scroll"}
              width={"100%"}
              height={"100%"}
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
                  {data.map((item) => (
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
                // handleChange={handleChange}
                // change={change}
                // dropdownChange={dropdownChange}
              />
            </TableContainer>
          </Box>
        </Box>
      </React.Fragment>
    );
}
export default Vehicles;