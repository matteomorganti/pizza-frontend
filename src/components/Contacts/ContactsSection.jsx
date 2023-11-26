import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

const MissionSection = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={14}>
      <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
        <Box mr={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.546309387871!2d13.964483476548557!3d42.75565021001685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331925c00a84141%3A0x2e1e14461395f907!2sPizzeria%20Ristorante%20Rouge%20Noir!5e0!3m2!1sit!2sit!4v1700684573795!5m2!1sit!2sit"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center">
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            Contatti:
          </chakra.h1>
          <Box>
            <Content>Telefono: 085 800 0000</Content>
            <Content mt={4}>Orari: Tutti i giorni 18.30 - 00.00</Content>
            <Content mt={4}>Martedì chiuso.</Content>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

const Content = ({ children, ...props }) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg
        color={useColorModeValue("rgba(55,65,81, 0.1)", "rgba(55,65,81, 0.7)")}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default MissionSection;
