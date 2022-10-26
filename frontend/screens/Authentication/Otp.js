import React from "react";
import {
    View,
    Text,
} from "react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input'

import { FONTS, SIZES, COLORS, } from "../../constants"
import { TextButton } from "../../components"
import { AuthLayout } from "../";

const Otp = ({ navigation }) => {

    const [timer, setTimer] = React.useState(60)

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                } else {
                    return prevTimer
                }
            })
        }, 1000)

        // return a function for react to clean up
        //cleanup the interval
        return () => clearInterval(interval)
    }, [])

    return (
        <AuthLayout
            title="Autenticação"
            subtitle="Um codigo de confirmação foi enviado para seu email"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* OTP */}
                <OTPInputView
                    pinCount={4}
                    style={{
                        width: '100%',
                        height: 50,
                    }}
                    codeInputFieldStyle={{
                        width: 65,
                        height: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => {
                        console.log(code)
                    }}
                />

                {/* Countdown Timer */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Não recebi o codigo.</Text>
                    <TextButton
                        label={`Resend (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => setTimer(60)}
                    />
                </View>
            </View>

            {/* Continue Button */}
            <View>
                <TextButton
                    label="Continuar"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => navigation.replace("Modes")}
                />
                <View style={{ marginTop: SIZES.padding, alignItems: 'center' }}>
                    <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>Ao se inscrever, você concorda com os nossos.</Text>
                    <TextButton
                        label="Termos e Condições"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                        onPress={() => console.log("tnc")}
                    />
                </View>
            </View>
        </AuthLayout>
    )
}

export default Otp