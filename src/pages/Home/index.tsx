import React from "react";
import { Box, Text, View, Image } from "@gluestack-ui/themed";
import { BellRing, HandCoins, User } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import Movimentations from "../../components/Movimentations";
import { useNavigation } from "@react-navigation/native";

function Home(): JSX.Element {

    const navigation = useNavigation();

    return (
        <View bgColor="#1B1B1B" flex={1}>

            <View m={30}>

                <Box borderColor="#A7A7A7" borderWidth={1} height={75} borderRadius={5}>

                    <Box justifyContent="space-between" flexDirection="row" alignItems="center">
                        <Box flexDirection="row" alignItems="center">

                            <Box width={50} height={50} bgColor="#A7A7A7" borderRadius={5} ml={10} mt={11} justifyContent="center" alignItems="center">
                                <User color="#000" />
                            </Box>

                            <Box>
                                <Text color="#fff" ml={10} fontSize={14} mt={6}>
                                    Bem Vinda de volta,
                                </Text>
                                <Text color="#fff" ml={10} fontSize={14}>
                                    Bruna Silva!
                                </Text>
                            </Box>
                        </Box>

                        <Box borderColor="#A7A7A7" borderWidth={1} height={45} width={45} borderRadius={5} mt={11} mr={10} justifyContent="center" alignItems="center">
                            <BellRing color="#fff" />
                        </Box>
                    </Box>

                </Box>

                <Box mt={30} flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Text color="#fff" fontWeight={'$semibold'} fontSize={18}>
                            Valor em conta
                        </Text>

                        <Box width={276} flexDirection="row" justifyContent="space-between">
                            <Text color="#fff" fontWeight={'$semibold'} fontSize={32}>
                                R$ 1700,00
                            </Text>
                            <Text color="#A7A7A7" fontSize={17}>
                                Pix
                            </Text>
                        </Box>
                    </Box>

                    <TouchableOpacity onPress={() => navigation.navigate('Pix' as never)}>
                        <Box height={50} width={50} bgColor="#2C2C2C" borderRadius={5} justifyContent="center" alignItems="center">
                            <HandCoins color="#fff" />
                        </Box>
                    </TouchableOpacity>
                </Box>

                <Box mt={30}>
                    <Image source={require('../../images/cartao-fundo.png')} alt="logo" w={'$full'} height={170} />
                    <Text position="absolute" top={15} left={15} color="#A7A7A7" fontSize={17}>
                        Saldo
                    </Text>
                    <Text position="absolute" top={44} left={15} fontSize={36} color="#fff">
                        R$ 2654.39
                    </Text>
                    <Text position="absolute" top={125} left={15} fontSize={25} color="#000" fontWeight={'bold'}>
                        ****738
                    </Text>
                </Box>

                <Box borderColor="#A7A7A7" borderWidth={1} borderRadius={5} mt={30}>
                    <Text ml={15} mt={15} color="#dcdada" mb={15} fontSize={18}>
                        Movimentações
                    </Text>

                    <Movimentations />
                    
                </Box>
                
            </View>

        </View>
    );
}

export default Home;