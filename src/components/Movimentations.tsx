import React from "react";
import { Box, Divider, Image, Text, View } from "@gluestack-ui/themed";

function Movimentations(): JSX.Element {
    return (
        <View flexDirection="row" justifyContent="space-between">
            <Box mb={30} ml={5} mt={-10} flexDirection="row" alignItems="center">
                <Box width={50} height={50} bgColor="#2C2C2C" borderRadius={5} ml={10} mt={11} justifyContent="center" alignItems="center">
                    <Image source={require('../images/SaidaDollar.png')} width={30} height={30} alt="saida" />
                </Box>
                <Box>
                    <Box ml={10}>
                        <Text fontSize={17} color="#dbd9d9" fontWeight={'$medium'}>
                            **** 7836
                        </Text>
                        <Text fontSize={17} color="#dbd9d9" fontWeight={'$medium'}>
                            BRL Conta
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box mr={15}>
                <Text color="#fff" fontWeight={'$medium'} fontSize={17}>
                    - R$ 800,00
                </Text>
            </Box>
        </View>
    );
}

export default Movimentations;