import BulbIcon from "../assets/bulb_icon.svg";
import ChevronDown from "../assets/chevron_down.svg";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function SuggestionBar() {
  return (
    <Box borderRadius="10" pl="8" pr="4" py="4" bg="brown">
      <Flex alignItems="center" flexWrap="wrap" flexDir="row" gap="4">
        <Flex alignItems="center" gap="5">
          <Image src={BulbIcon} alt="bulb icon" h="6" />
          <Text color="white" fontWeight="bold" fontSize="large">
            6 Suggestions
          </Text>
        </Flex>
        <Flex alignItems="center" gap="3" ml="5" color="white">
          <Text color="light-primary">Sort by :</Text>
          <Flex alignItems="center" gap="2">
            <Text fontWeight="semibold">Most Upvotes</Text>
            <Image src={ChevronDown} h="2.5" w="2.5" alt="dropdown icon" />
          </Flex>
        </Flex>
        <Box ml="auto">
          <Button
            bg="pink-primary"
            color="white"
            _hover={{ bg: "pink-primary" }}
          >
            + Add Feedback
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
