import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function Acesso() {
    
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf')
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
    
        if (email === 'luz@143' && password === '123') {
            navigation.navigate('TelaDeSucesso', { email: email });
        } else {
            
            Alert.alert('Erro alguma informação errada', 'verifique se o email e senha estão correto.');
        }
    };


    if (!fontsLoaded) {
        return null;
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonback}>
                            <Ionicons name="arrow-back" size={44} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.message}>Bem-vindo(a)</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>E-mail</Text>
                        <TextInput
                            placeholder='Seu nome'
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                            value={nome}
                            secureTextEntry
                        />
                        <TextInput
                            placeholder='Digite um email...'
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                            value={email}
                        />
                        <TextInput
                            placeholder='Sua senha'
                            style={styles.input}
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry
                        />
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Acessar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRegister}>
                            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#880000'
    },
    buttonback: {
        bottom: 20,
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontFamily: 'Oswald',
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontFamily: 'Oswald',
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Oswald',
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    }
});