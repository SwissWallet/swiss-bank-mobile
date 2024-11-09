import React, { useEffect, useState } from 'react';
import { Box, HStack, Image, ImageBackground, Input, InputField, KeyboardAvoidingView, Text, View } from '@gluestack-ui/themed';
import { Alert, Keyboard, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import api from '../../services/api';
import Clipboard from '@react-native-clipboard/clipboard';

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

function Pix(): JSX.Element {

    const [hiddenSaldo, setHiddenSaldo] = useState(false);
    const [userInformation, setuserInformation] = useState<userInformations>();
    const [pix, setPix] = useState<string>('');
    Clipboard.getString().then(code => setPix(code));

    async function loadInformationsUser() {
        const response = await api.get('accounts/current')
        .then((json) => {
            setuserInformation(json.data);
        })
        .catch(err => console.log(err));
    }


    async function paymentPix() {

        if (pix === '') return Alert.alert('Informe a chave pix');

        const response = await api.post(`codes/payment?code=${pix}`)
        .then((json) => {
            console.log(json.data);
            Alert.alert("Sucesso", "Compra realizada com sucesso!!!")
        })
        .catch(err => {
            if (err.status === 400) return Alert.alert('Erro', 'Saldo insuficiente para realizar o pix');
            if(err.status === 404) return Alert.alert("Erro", "Código pix inválido")
        });
    }

    useEffect(() => {
        loadInformationsUser(); 
    }, []);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View flex={1} bgColor="#1B1B1B"  >

                <Box m={30}>
                    <Box mt={25}>
                        <Text color='#fff' fontSize={23} fontWeight={'$bold'}>
                            Chave Pix
                        </Text>
                    </Box>

                    <Box mt={30} mb={30}>
                        <Input height={50} borderColor='#fff' borderRadius={5}>
                            <InputField placeholder='Digite a chave Pix' pl={15} placeholderTextColor="#fff" fontSize={17} color='#fff' onChangeText={(text) => setPix(text)} value={pix}/>
                        </Input>
                    </Box>

                    <Box mb={30} justifyContent='center' alignItems='center'>

                        <Box borderBottomColor='#fff' width={250} borderWidth={1} borderTopColor='#1B1B1B' borderLeftColor='#1B1B1B' borderRightColor='#1B1B1B'>

                            <HStack justifyContent='center' alignItems='center'>
                                <Text color='#fff' mb={10} fontSize={17}>
                                    Saldo em conta R$ {hiddenSaldo ? userInformation?.balance : '****'}
                                </Text>

                                <TouchableOpacity onPress={() => setHiddenSaldo(!hiddenSaldo)}>
                                    <Box ml={5} mt={-8}>
                                        {hiddenSaldo ? <Eye size={20} color="#fff" /> : <EyeOff size={20} color="#fff"/>}
                                    </Box>
                                </TouchableOpacity>
                            </HStack>

                        </Box>

                    </Box>

                    <TouchableOpacity onPress={() => paymentPix()}>
                        <Box bgColor='#C50000' height={45} w={'70%'} alignSelf='center' justifyContent='center' alignItems='center' borderRadius={5}>
                            <Text color='#fff' fontSize={18}>
                                Pagar
                            </Text>
                        </Box>
                    </TouchableOpacity>
                    

                    {/* <ImageBackground source={require('../../images/fundoTelaPix.png')} resizeMode='contain' w={'80%'} h={'70%'} ml={-30}> */}
                        <Image source={require('../../images/fundoTelaPix.png')} alt='imagem de fundo tela' h={500} width={250} ml={-30} resizeMode='contain'/>
                    {/* </ImageBackground> */}
                </Box>

            </View>
        </TouchableWithoutFeedback>
    );
}

export default Pix;