import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { FONTS, SIZES, COLORS, icons, } from "../../constants"
import { AuthLayout } from "../";
import {
    CustomSwitch,
    FormInput,
    TextButton,
    TextIconButton
} from "../../components"
import { utils } from "../../utils";

const SignIn = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == ""
    }

    return (
        <AuthLayout
            title="Faça seu login"
            subtitle="Boa noite! Que tal uma breja?"
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.height > 800 ? SIZES.padding * 2 : SIZES.radius
                }}
            >
                {/* Form Inputs */}
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={(email == "") || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: (email == "") ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInput
                    label="Senha"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    value={password}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* Save me & Forgot pass */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CustomSwitch
                            label="Lembrar"
                            value={saveMe}
                            onChange={(value) => setSaveMe(value)}
                        />
                    </View>
                    <TextButton
                        label="Esqueceu a senha?"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />
                </View>

                {/* Sign In & Sign Up */}
                <TextButton
                    label="Entrar"
                    disabled={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary,
                    }}
                    onPress={() => navigation.replace("Modes")}
                />

                {/* Sign Up */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Não tem conta? </Text>
                    <TextButton
                        label="Cadastre-se Já"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.replace("SignUp")}
                    />
                </View>
            </View>

            {/* Footer */}
            <View>
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue,
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Entrar com Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => navigation.replace("Modes")}
                />

                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                    }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: null
                    }}
                    label="Entrar com Google"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                    }}
                    onPress={() => navigation.replace("Modes")}
                />
            </View>
        </AuthLayout>
    )
}

export default SignIn;