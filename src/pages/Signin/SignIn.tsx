import React, { useState } from "react";
import { Box, Heading, Image, Input, InputField, InputSlot, Text, View } from "@gluestack-ui/themed";
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback, TouchableWithoutFeedbackBase } from "react-native";
import { Eye, EyeOff, LockIcon, User } from "lucide-react-native";

function SignIn(): JSX.Element {

    const [hiddenPassword, setHiddenPassword] = useState(true);

    const handleState = () => {
        setHiddenPassword(prevState => !prevState);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
            <View flex={1} bgColor="#1B1B1B">
                <Box ml={30} mr={30}>

                    <Heading mt={70} color="#fff" fontSize={32} mb={27}>
                        Bem Vindo
                    </Heading>

                    <Box gap={27}>
                        <Input height={50} borderColor="#fff">
                            <InputSlot ml={10}>
                                <User color='#fff' />
                            </InputSlot>
                            <InputField placeholder="Digite seu email" placeholderTextColor="#fff" />
                        </Input>

                        <Input height={50} borderColor="#fff">
                            <InputSlot ml={10}>
                                <LockIcon color='#fff' />
                            </InputSlot>

                            <InputField placeholder="Digite sua senha" placeholderTextColor="#fff" type={hiddenPassword ? 'text' : 'password'} color="#fff" />

                            <InputSlot mr={10}>
                                <TouchableOpacity onPress={handleState}>
                                    {hiddenPassword ? <Eye color='#fff' /> : <EyeOff color='#fff' />}
                                </TouchableOpacity>
                            </InputSlot>
                        </Input>
                    </Box>

                    <TouchableOpacity>
                        <Box mt={12} mb={15}>
                            <Text color="#cccccc" alignSelf="flex-end">
                                Esqueci minha senha
                            </Text>
                        </Box>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Box bgColor="#C50000" height={50} borderRadius={5} justifyContent="center" alignItems="center">
                            <Text color="#fff" fontWeight={'$semibold'}>
                                Login
                            </Text>
                        </Box>
                    </TouchableOpacity>

                </Box>
                <Box height={'$full'}>
                    <Image source={require('../../images/logoLogin.png')} alt="logo do login" w={'$full'} height={500} />
                </Box>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default SignIn;