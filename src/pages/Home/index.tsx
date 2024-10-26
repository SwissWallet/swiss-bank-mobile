import React, { useEffect, useState } from "react";
import { Box, Text, View, Image, HStack, ActionsheetBackdrop, ActionsheetContent, Actionsheet, FlatList, MenuItem } from "@gluestack-ui/themed";
import { BellRing, HandCoins, User } from "lucide-react-native";
import { Alert, TouchableOpacity } from "react-native";
import Movimentations from "../../components/Movimentations";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import api from "../../services/api";

interface cardInformations {
    cardLimit: string,
    cvv: string,
    cardNumber: string
    validity: string
}

interface userInformations {
    accountNumber: string,
    balance: number
    name: string
    user: userObject
}

interface userObject {
    name: string,
    cpf: string
}

function Home(): JSX.Element {

    const navigation = useNavigation();
    const user = useSelector((state:any) => state.user.value);
    const [card, setCard] = useState<cardInformations>();
    const [extract, setExtract] = useState([]);
    const [userInformation, setuserInformation] = useState<userInformations>();
    const [frontCard, setFrontCard] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    async function loadInformationsAboutCard() {
        const response = await api.get('cards/current')
        .then((json) => {
            setCard(json.data);
        }).catch(err => {
            if (err.status) return Alert.alert('Erro', 'Erro ao carregar as informações');
        });
    }

    async function loadInformationsUser() {
        const response = await api.get('accounts/current')
        .then((json) => {
            setuserInformation(json.data);
        })
        .catch(err => console.log(err));
    }

    async function loadExtract(){
        const response = await api.get('extracts/current')
        .then((json) => {
            setExtract(json.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        loadInformationsAboutCard();
        loadInformationsUser();
        loadExtract();
    }, []);

    return (
        <View bgColor="#1B1B1B" flex={1}>

            <View m={30}>

                <Box borderColor="#A7A7A7" borderWidth={1} height={75} borderRadius={5}>

                    <Box justifyContent="space-between" flexDirection="row" alignItems="center">
                        <Box flexDirection="row" alignItems="center">
                            
                            <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
                                <Box width={50} height={50} bgColor="#A7A7A7" borderRadius={5} ml={10} mt={11} justifyContent="center" alignItems="center">
                                    <User color="#000" />
                                </Box>
                            </TouchableOpacity>

                            <Box>
                                <Text color="#fff" ml={10} fontSize={14} mt={6}>
                                    Bem Vinda de volta,
                                </Text>
                                <Text color="#fff" ml={10} fontSize={14}>
                                    {user.name}
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
                                R$ {userInformation?.balance}
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

                <TouchableOpacity onPress={() => setFrontCard(!frontCard)}>
                    {frontCard ? (
                        <Box mt={30}>
                            <Image source={require('../../images/cartao-fundo.png')} alt="logo" w={'$full'} height={170} />
                            <Text position="absolute" top={15} left={15} color="#A7A7A7" fontSize={17}>
                                Numero do cartão
                            </Text>
                            <Text position="absolute" top={44} left={15} fontSize={36} color="#fff">
                                {card?.cardNumber}
                            </Text>
                            <HStack position="absolute" top={125} left={15} justifyContent="center" alignItems="center" space="sm">
                                <Text color="#000" fontSize={18} fontWeight={'$semibold'}> 
                                    Cvv
                                </Text>
                                <Text  fontSize={25} color="#000" fontWeight={'bold'}>
                                    {card?.cvv}
                                </Text>
                            </HStack>
                        </Box>
                    ) : (

                        <Box mt={30}>
                            <Image source={require('../../images/cartao-fundo.png')} alt="logo" w={'$full'} height={170} />
                            <Text position="absolute" top={15} left={15} color="#A7A7A7" fontSize={17}>
                                Limite disponível
                            </Text>
                            <Text position="absolute" top={44} left={15} fontSize={36} color="#fff">
                                R$ {card?.cardLimit}
                            </Text>
                            <Text position="absolute" top={125} left={15} fontSize={25} color="#000" fontWeight={'bold'}>
                                {card?.cardNumber.replace(card.cardNumber.slice(0, 5), '****')}
                            </Text>
                        </Box>
                    )}
                </TouchableOpacity>

                <Box borderColor="#A7A7A7" borderWidth={1} borderRadius={5} mt={30} h={300} mb={20}>
                    <Text ml={15} mt={15} color="#dcdada" mb={15} fontSize={18}>
                        Movimentações
                    </Text>
                    

                    <FlatList   
                    data={extract}
                    keyExtractor={(item: any) => item.id}
                    renderItem={(item: any) => <Movimentations value={item.item.value} cardNumber={card?.cardNumber.replace(card.cardNumber.slice(0, 5), '****')}/>}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                    />
                    
                    
                </Box>
                
            </View>
            <Actionsheet isOpen={openModal} onClose={() => setOpenModal(!openModal)}>
                <ActionsheetBackdrop />
                <ActionsheetContent bgColor="#ffffff" >
                    <Box width={'$full'} gap={15}>
                        <Text alignSelf="center" fontWeight={'$bold'} fontSize={26} color="#000">
                            Informações
                        </Text>
                        <Text fontWeight={'$semibold'} color="#000" fontSize={18}>
                            Validade do cartão: {card?.validity}
                        </Text>
                        <Text fontWeight={'$semibold'} color="#000" fontSize={18}>
                            Numero da conta: {userInformation?.accountNumber}
                        </Text>
                        <Text fontWeight={'$semibold'} color="#000" fontSize={18}>
                            Nome: {userInformation?.user.name}
                        </Text>
                        <Text fontWeight={'$semibold'} color="#000" fontSize={18} mb={10}>
                            CPF: {userInformation?.user.cpf}
                        </Text>
                    </Box>
                </ActionsheetContent>
            </Actionsheet>


        </View>
    );
}

export default Home;