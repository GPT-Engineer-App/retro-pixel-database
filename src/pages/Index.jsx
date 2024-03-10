import { Box, Button, ChakraProvider, Container, Flex, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, theme } from "@chakra-ui/react";
import { FaBaseballBall, FaGamepad, FaPlus, FaUserFriends } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.800" minH="100vh" color="white">
        <Container maxW="container.xl" py={10}>
          <Heading as="h1" size="2xl" textAlign="center" mb={6}>
            Retro DB Platform
          </Heading>
          <Tabs variant="enclosed" colorScheme="orange" isFitted>
            <TabList mb="1em">
              <Tab>
                <FaGamepad />
                <Text ml={2}>Video Games</Text>
              </Tab>
              <Tab>
                <FaBaseballBall />
                <Text ml={2}>League Drafts</Text>
              </Tab>
              <Tab>
                <FaUserFriends />
                <Text ml={2}>Card Trading</Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex direction="column" align="center">
                  <Image src="https://images.unsplash.com/photo-1509281373149-e957c6296406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHBpeGVsLXN0eWxlJTIwdmlkZW8lMjBnYW1lc3xlbnwwfHx8fDE3MTAwNDE3Nzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Retro Video Games" borderRadius="lg" mb={4} />
                  <Heading as="h3" size="lg">
                    Explore Retro Games
                  </Heading>
                  <Text mt={2}>Dive into the pixelated world of nostalgia. Play, review, and discuss your favorite classics!</Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex direction="column" align="center">
                  <Image src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBsZWFndWUlMjBkcmFmdHxlbnwwfHx8fDE3MTAwNDE3Nzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="League Drafts" borderRadius="lg" mb={4} />
                  <Heading as="h3" size="lg">
                    League Draft Simulations
                  </Heading>
                  <Text mt={2}>Build your dream team with our custom draft simulation tailored for different sports.</Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex direction="column" align="center">
                  <Image src="https://images.unsplash.com/photo-1582650448861-bd3339f97601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGNhcmR8ZW58MHx8fHwxNzEwMDQxNzc3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Baseball Card Trading" borderRadius="lg" mb={4} />
                  <Heading as="h3" size="lg">
                    Baseball Card Trading
                  </Heading>
                  <Text mt={2}>Rediscover the joy of baseball card trading with a modern twist. Trade, collect, and showcase your cards.</Text>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Stack direction="row" spacing={4} justifyContent="center" mt={10}>
            <Button leftIcon={<FaPlus />} colorScheme="orange">
              Add New Item
            </Button>
            <Button leftIcon={<FaUserFriends />} colorScheme="orange">
              Join Community
            </Button>
          </Stack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
