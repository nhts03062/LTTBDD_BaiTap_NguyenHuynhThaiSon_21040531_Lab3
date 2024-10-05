import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Text, View, Image, StatusBar } from "react-native";
import imageLogo from '../assets/Data/Image_19.png';
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { useAccount } from "../Context/AccountContext";
import { useNavigation } from "@react-navigation/native";

export default function Screen_02() {
    const [isChecked, setChecked] = useState(false);
    const { addAccount } = useAccount();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar hidden='true'/>
            <TouchableOpacity
                onPress={() => navigation.navigate('Screen_01')}
                style={{paddingLeft: 20}}
            >
                <Image source={require('../assets/Data/Image_183.png')}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={imageLogo} />
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Nice to see you!</Text>
                    <Text style={{ fontSize: 15, color: 'gray' }}>Create your account</Text>
                </View>

                <View style={{ gap: 20, width: '100%', paddingHorizontal: 24 }}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('../assets/Data/codicon_account.png')} />
                        <TextInput
                                    value={userName}
                                    style={styles.input}
                                    placeholder="Enter your user name"
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => setUserName(text)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('../assets/Data/Vector.png')} />
                        <TextInput
                            value={email}
                            style={styles.input}
                            placeholder="Enter your email address"
                            placeholderTextColor={'gray'}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                            
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('../assets/Data/lock.png')} />
                        <TextInput
                            secureTextEntry={hidePassword}
                            value={password}
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor={'gray'}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                            <Image style={styles.inputIcon} source={hidePassword ? require('../assets/Data/eyeLock.png') : require('../assets/Data/eye.png')}/>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Checkbox
                            style={{ marginRight: 5 }}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#197DCA' : undefined}
                        />
                            <Text>I agree with <Text style={{ color: '#197DCA' }}>Terms & Conditions</Text></Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#25C3D9',
                            alignItems: 'center',
                            borderRadius: 10,
                            marginVertical: 10
                        }}
                        onPress={() => {                                   
                            addAccount({ userName, email, password });
                            setEmail('');
                            setUserName('');
                            setPassword('');
                                navigation.navigate('Screen_03');
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 15, padding: 15 }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 50,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray'
    },
    inputIcon: {
        width: 20,
        height: 17,
        marginHorizontal: 10
    },
    input: {
        flex: 1,
        height: 45,
        fontSize: 16,
    }
});
