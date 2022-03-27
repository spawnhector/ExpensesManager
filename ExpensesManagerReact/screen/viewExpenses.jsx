
import { View, TouchableOpacity, StyleSheet,SafeAreaView, ScrollView, } from 'react-native';
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import ContentHead from "../components/contentHead";
const ViewExpenses = ({route,navigation}) => {
    const {item} = route.params;
    console.log(item)
    const styles = StyleSheet.create({

    });
    const Card = () => {
        return <Box alignItems="center">
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                        }} alt="image" />
                    </AspectRatio>
                    <Center bg="violet.500" _dark={{
                        bg: "violet.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "20",
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        Expenses Id: {item.id}
                    </Center>
                </Box>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            {item.name}
                        </Heading>
                        <Text fontSize="15" _light={{
                            color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            The Silicon Valley of India.
                        </Text>
                    </Stack>
                    <Text fontWeight="400" fontSize="20">
                        {item.description}
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                6 mins ago
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box>;
    };
    return(
        <NativeBaseProvider>
            <ContentHead title='Your Expenses' navigation={navigation} h={50}/>
            <Center flex={1} px="3">
                <Card />
            </Center>
        </NativeBaseProvider>
    );
}
export default ViewExpenses;