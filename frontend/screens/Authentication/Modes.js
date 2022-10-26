import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { AuthLayout }from "..";
import { FONTS, SIZES, COLORS, icons } from "../../constants";

import {
    ModesButton
}from "../../components"

const Modes =  ({ navigation }) => {

        return (
            <AuthLayout 
            title="Começando..."
            subtitle="Agora você tera que escolher um modo para usar o aplicativo"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
            >
            <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    alignItems:'center',
                }}
            >
                
                <ModesButton
                    containerStyle={{
                        marginTop: 16,
                        paddingVertical: 14,
                        width: 60,
                        borderWidth: 5,
                        borderColor: "#20232a",
                        borderRadius: 8,
                        backgroundColor: "#000066",
                        color: "#20232a",
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "bold"
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}

                    onPress={() => navigation.replace("Home")}
                />
                <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontSize:23 , lineHeight: 30, color: COLORS.black, fontWeight: 'bold'}}>            Modo Casual</Text>
                    <Text style={{fontSize: 17, lineHeight: 18, color: COLORS.darkGray}}> Ideal para eventos com poucas pessoas.</Text>
                </View>

 </View>
            <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    alignItems:'center'
                }}
            >
                < ModesButton
                    containerStyle={{
                        marginTop: 16,
                        paddingVertical: 14,
                        width: 60,
                        borderWidth: 5,
                        borderColor: "#20232a",
                        borderRadius: 8,
                        backgroundColor: "#ff6600",
                        color: "#20232a",
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "bold",
                        alignItems: 'center',
                    }}
                    icon={icons.google}
                    iconStyle={{
                        tintColor: COLORS.black
                    }}
                    label="Entrar com Google"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                    }}
                     onPress={() => navigation.replace("Home")}
                
                />
                <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontSize:23 , lineHeight: 30, color: COLORS.black, fontWeight: 'bold'}}>            Modo Festa</Text>
                    <Text style={{fontSize: 17, lineHeight: 18, color: COLORS.darkGray}}> Ideal para eventos com muitas pessoas.</Text>
                </View>

        </View>
           
            </AuthLayout>

        )
    }
export default Modes;