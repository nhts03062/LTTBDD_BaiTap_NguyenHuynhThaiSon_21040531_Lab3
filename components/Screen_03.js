import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, SafeAreaView, StyleSheet, Text, TextInput, View, StatusBar } from "react-native";
import { useAccount } from "../Context/AccountContext";
import { useState } from "react";

export default function Screen_03() {
    const navigation = useNavigation();
    const { accounts, checkAccount } = useAccount();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar hidden='true'/>
            <TouchableOpacity
                onPress={() => navigation.navigate('Screen_02')}
                style={{paddingLeft: 20}}
            >
                <Image source={require('../assets/Data/Image_183.png')}/>
            </TouchableOpacity>
            <View>
                <Image 
                    style={{ width: '100%' }} 
                    source={require('../assets/Data/Image_20.png')} 
                />
                
                <View style={styles.container}>
                    <Text style={styles.welcomeText}>Welcome!</Text>

                    <View style={styles.inputContainer}>
                        {/* Email Input */}
                        <View>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputWrapper}>
                                <Image style={styles.icon} source={require('../assets/Data/Vector.png')} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter email"
                                    onChangeText={setEmail}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputWrapper}>
                                <Image style={styles.icon} source={require('../assets/Data/lock.png')} />
                                <TextInput
                                    secureTextEntry={hidePassword}
                                    style={styles.input}
                                    placeholder="Enter password"
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                                    <Image
                                        style={styles.icon}
                                        source={hidePassword ? require('../assets/Data/eyeLock.png') : require('../assets/Data/eye.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('Screen_04')}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9FAFC',
        height: '100%',
        borderRadius: 7,
        marginTop: -7,
        padding: 20,
    },
    welcomeText: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 20,
    },
    inputContainer: {
        gap: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
    inputWrapper: {
        flexDirection: 'row',
        backgroundColor: '#F0F1F5',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
    },
    input: {
        height: 45,
        flex: 1,
    },
    loginButton: {
        backgroundColor: '#25C3D9',
        alignItems: 'center',
        borderRadius: 30,
        marginVertical: 60,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 15,
        padding: 15,
    },
});
