import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Line, Bar } from "react-chartjs-2";
import {
  // FaArrowDown,
  // FaArrowUp,
  FaEllipsisV,
  // FaUser,
  // FaDollarSign,
  // FaPercentage,
  // FaChartLine,
} from "react-icons/fa";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const WidgetsDropdown = ({ className }) => {
  const widgetChartRef1 = useRef(null);
  const widgetChartRef2 = useRef(null);

  useEffect(() => {
    const updateChartColors = () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor =
            "#3182ce"; // Chakra UI's primary color
          widgetChartRef1.current.update();
        });
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor =
            "#63b3ed"; // Chakra UI's info color
          widgetChartRef2.current.update();
        });
      }
    };

    window.addEventListener("ColorSchemeChange", updateChartColors);
    return () =>
      window.removeEventListener("ColorSchemeChange", updateChartColors);
  }, []);

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };

  const widgetData = [
    {
      color: "blue.500",
      value: (
        <>
          26K{" "}
          <Text as="span" fontSize="sm" fontWeight="normal">
            (No of People in the Event)
             {/* <FaArrowDown /> */}
          </Text>
        </>
      ),
      // title: "Users",
      // icon: FaUser,
      // chartData: [65, 59, 84, 84, 51, 55, 40],
      // ref: widgetChartRef1,
    },
    {
      color: "cyan.500",
      value: (
        <>
          $6.200{" "}
          <Text as="span" fontSize="sm" fontWeight="normal">
            (Parking Spots)
            {/* <FaArrowUp /> */}
          </Text>
        </>
      ),
      // title: "Income",
      // icon: FaDollarSign,
      // chartData: [1, 18, 9, 17, 34, 22, 11],
      // ref: widgetChartRef2,
    },
    {
      color: "yellow.500",
      value: (
        <>
          2.49%{" "}
          <Text as="span" fontSize="sm" fontWeight="normal">
            (Guard)online 
            {/* <FaArrowUp /> */}
          </Text>
        </>
      ),
      // title: "Conversion Rate",
      // icon: FaPercentage,
      // chartData: [78, 81, 80, 45, 34, 12, 40],
    },
    // {
    //   color: "red.500",
    //   value: (
    //     <>
    //       44K{" "}
    //       <Text as="span" fontSize="sm" fontWeight="normal">
    //         (-23.6% <FaArrowDown />)
    //       </Text>
    //     </>
    //   ),
    //   title: "Sessions",
    //   icon: FaChartLine,
    //   chartData: [
    //     78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82,
    //   ],
    //   isBar: true,
    // },
  ];

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      gap={4}
      className={className}
    >
      {widgetData.map((widget, index) => (
        <GridItem
          key={index}
          bg={widget.color}
          p={5}
          borderRadius="md"
          color="white"
          position="relative"
          height={"150px"}
          alignContent={"center"}
          border={"1px solid blue"}
        >
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                {widget.value}
              </Text>
              <Text>{widget.title}</Text>
            </Box>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<FaEllipsisV />}
                variant="ghost"
                colorScheme="whiteAlpha"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another action</MenuItem>
                <MenuItem>Something else here...</MenuItem>
                <MenuItem isDisabled>Disabled action</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Box position="absolute" bottom={0} left={0} right={0} height="70px">
            {widget.isBar ? (
              <Bar
                ref={widget.ref}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                    "January",
                    "February",
                    "March",
                    "April",
                  ],
                  datasets: [
                    {
                      label: "Dataset",
                      backgroundColor: "rgba(255,255,255,.2)",
                      borderColor: "rgba(255,255,255,.55)",
                      data: widget.chartData,
                      barPercentage: 0.6,
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                        drawTicks: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            ) : (
              <Line
                ref={widget.ref}
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "Dataset",
                      backgroundColor: "transparent",
                      borderColor: "rgba(255,255,255,.55)",
                      pointBackgroundColor: widget.color,
                      data: widget.chartData,
                    },
                  ],
                }}
                options={chartOptions}
              />
            )}
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
};

export default WidgetsDropdown;
