import { Box,useToast, Button,Flex, Checkbox, FormControl, FormLabel, Input,Heading, Text } from '@chakra-ui/react';
import React,{useState,useEffect} from 'react';
import backgroundimage from '../assets/Images/background.jpg';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LoginUser} from "../Redux/Auth/action";
import {LOGIN_SUCCESS} from "../Redux/Auth/actionTypes";
const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [flag, setFlag] = useState(false);
   const [isCheck,setIsCheck]=useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const toast = useToast();
   const handleForm = (e) => {
     e.preventDefault();
     const form = e.currentTarget;
     console.log(form)
     if (form.checkValidity() === false) {
       e.stopPropagation();
       setFlag(true);
       return;
     }
     const payload = {
       email,
       password,
     };
     dispatch(LoginUser(payload))
       .then((r) => {
         if (r.type === LOGIN_SUCCESS) {
           navigate("/dashboard");
           localStorage.setItem("rememberedEmail", email);
           localStorage.setItem("rememberedPassword", password);
           toast({
             title: "Login Successfully.",
             description: "Account Created",
             status: "success",
             duration: 2000,
             isClosable: true,
             position: "top",
           });
         } else if (r.payload.response.status === 401) {
           toast({
             title: "check email or Password is wrong",
             description: "write correct password",
             status: "error",
             duration: 2000,
             isClosable: true,
             position: "top",
           });
         }
       })
       .catch((e) => {
         toast({
           title: "Login unsuccessfully.",
           description: "We've created your account for you.",
           status: "error",
           duration: 2000,
           isClosable: true,
           position: "top",
         });
       });
   };
   useEffect(() => {
     const storedEmail = localStorage.getItem("rememberedEmail");
     const storedPassword = localStorage.getItem("rememberedPassword");

     if (storedEmail && storedPassword) {
       setEmail(storedEmail);
       setPassword(storedPassword);
     }
   }, []);
  return (
    <Box
      width={{ base: "325px", md: "780px", lg: "1024px" }}
      height={{ base: "580px", md: "1080px", lg: "580px" }}
      margin={"auto"}
      padding={"4px"}
      marginTop={"2px"}
      backgroundImage={`url(${backgroundimage})`}
      backgroundSize={"cover"}
      backgroundPosition={"fixed"}
      backgroundRepeat={"no-repeat"}
      imageRendering={"-webkit-optimize-contrast"}
      opactiy={"0.5"}
      overflow={"hidden"}
    >
      <Box
        width={{ base: "100%", md: "780px", lg: "30%" }}
        height={{ base: "100%", md: "100%", lg: "100%" }}
        margin={{ base: "auto", lg: "auto" }}
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <Heading
          color={"white"}
          padding={{ base: 4, md: 6, lg: 4 }}
          fontSize={{ base: "15px", md: "35px", lg: "20px" }}
          textAlign={"center"}
        >
          Welcome to Security Application For Login
        </Heading>
        <Box
          width={{
            base: "100%",
            md: "100%",
            lg: "100%",
          }}
          heigth={{ md: "500px" }}
          padding={{ base: 4, md: 3, lg: 3 }}
        >
          <form onSubmit={handleForm} noValidate validate={flag}>
            <FormControl isRequired>
              <FormLabel fontSize={{ md: "30px", lg: "18px" }} color={"white"}>
                Email
              </FormLabel>
              <Input
                type="email"
                placeholder="email"
                fontSize={{ md: "30px", lg: "18px" }}
                autoComplete="email"
                value={email}
                width={{
                  base: "100%",
                  md: "100%",
                  lg: "100%",
                }}
                height={{ base: "40px", md: "80px", lg: "35px" }}
                onChange={(e) => setEmail(e.target.value)}
                color={"white"}
              />
            </FormControl>
            <br />
            <FormControl isRequired>
              <FormLabel fontSize={{ md: "30px", lg: "18px" }} color={"white"}>
                Password
              </FormLabel>
              <Input
                value={password}
                width={{
                  base: "100%",
                  md: "100%",
                  lg: "100%",
                }}
                height={{ base: "35px", md: "80px", lg: "35px" }}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                fontSize={{ md: "28px" }}
                placeholder="Password"
                autoComplete="current-password"
              />
            </FormControl>
            <br />
            <Flex justifyContent={"space-between"}>
              <Checkbox
                isChecked={isCheck}
                onChange={(e) => setIsCheck(e.target.checked)}
                border={"blue"}
                color={"white"}
                fontWeight={{ md: "bold" }}
              >
                <Text fontSize={{ md: "30px", lg: "18px" }} color={"white"}>
                  {" "}
                  Remember Me{" "}
                </Text>
              </Checkbox>
              <Box>
                <Link to={"/forgetpassword"}>
                  <Text
                    fontSize={{ md: "30px", lg: "18px" }}
                    fontWeight={{ md: "bold" }}
                    color={"white"}
                  >
                    ForgetPassword
                  </Text>
                </Link>
              </Box>
            </Flex>
            <br />
            <Button
              color={"white"}
              type="submit"
              border={"1px solid black"}
              width={{ base: "100%", md: "100%", lg: "100%" }}
              height={{ base: "50px", md: "80px", lg: "45px" }}
              fontSize={{ md: "30px" }}
            >
              Login
            </Button>
          </form>
        </Box>
        <br />
        <Box width={"100%"}>
          <Button
            backgroundColor={"blue"}
            border={"1px solid blue"}
            width={"50%"}
            height={{ base: "50px", md: "80px", lg: "45px" }}
            color={"white"}
            fontSize={{ md: "28px" }}
          >
            Facebook
          </Button>
          <Button
            backgroundColor={"Red"}
            border={"1px solid Red"}
            width={"50%"}
            height={{ base: "50px", md: "80px", lg: "45px" }}
            color={"white"}
            fontSize={{ md: "28px" }}
          >
            Google
          </Button>
        </Box>
        <br />
        <Box
          fontSize={{ base: "12px", md: "40px", lg: "15px" }}
          fontWeight={{ md: "bold" }}
          color={"white"}
        >
          If you don't have account on Security Application then
          <br />
          <Link to="/register">
            <Button
              width={"50%"}
              fontSize={{base:"24px", md: "28px" }}
              color="white"
              background={"teal"}
              height={{ base: "50px", md: "80px", lg: "45px" }}
              active
            >
              Register Now!
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}      

export default Login;
