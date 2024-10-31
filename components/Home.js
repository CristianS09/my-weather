import { View, Text, Alert, TouchableOpacity, TextInput, ActivityIndicator, SafeAreaView, Animated } from 'react-native'
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import style from '../styles/style'

const Home = () => {

    //Instanciando os useState
    const [welcome, setWelcome] = useState(true);
    const [temp, setTemp] = useState([]);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [cityName, setCityName] = useState([]);
    const [weather, setWeater] = useState('');
    const [animation] = useState(new Animated.Value(0));

    //Funcão para iniciar a animação
    const startAnimation = () => {
        Animated.spring(
            animation,
            {
                toValue: 5,
                velocity: 10,
                bounciness: 20,
                useNativeDriver: false
            }
        ).start();
    }

    //Funcão que será acionada quando pressionar o butão
    const buttonPress = () => {
        if (city == '') {
            Alert.alert('O campo não foi preenchido');
        } else {
            weatherApi()
                .then(() => setLoading(false))
                .then(() => startAnimation());
        }
    }

    //Funcão para acessar a Api e atualizar os valores do useState
    const weatherApi = async () => {
        try {
            setLoading(true);
            const key = '3d131179ae61890523aa26776453a602';
            const cidade = city.trim();
            const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt`);
            const json = await resultado.json();
            const temperatura = json.main.temp - 272.15;
            //Seta o nome da cidade
            setCityName(json.name);
            //Seta o resultado de temperatura no useState
            setTemp(temperatura.toFixed(0) + ' °C');
            //Seta o resultado do tempo no useState
            const weatherResult = json.weather[0].description;
            setWeater(weatherResult);
            setCity('');
            setWelcome(false);
        } catch (exc) {
            Alert.alert('Erro ao carregar os dados');
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <Ionicons name='rainy' size={150} color={'#fff'} style={{ marginBottom: 5 }} />
            <Text style={style.title}>My Weather</Text>
            <View style={style.card}>
                {welcome ? <Text style={style.welcomeTitle}>Bem vindo(a)!</Text> : null}
                {loading ? <ActivityIndicator color={'#000'} size={50} /> :
                    <Animated.View style={{
                        position: 'absolute',
                        top: 30,
                        transform: [{ translateX: animation }]
                    }}>
                        <Text style={style.cityText}>{cityName}</Text>
                        <Text style={style.weatherText}>{weather}</Text>
                        <Text style={style.text}>{temp}</Text>
                    </Animated.View>
                }
                <TextInput
                    placeholder='Insira o nome da cidade'
                    style={style.input}
                    onChangeText={setCity}
                    placeholderTextColor={'#000'}
                    value={city}
                />
                <TouchableOpacity onPress={buttonPress} style={style.button}>
                    <Text style={style.buttonText}>Procurar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Home;