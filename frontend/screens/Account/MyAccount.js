import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import {
    Header,
    IconButton,
    TextButton,
    InfoItem
} from "../../components"
import { COLORS, SIZES, icons } from "../../constants"

const MyAccount = ({ navigation }) => {

    function renderHeader() {
        return (
            <Header
                title="MINHA CONTA"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <TextButton
                        label="Editar"
                        labelStyle={{
                            color: COLORS.primary
                        }}
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        onPress={() => navigation.navigate("MyAccountEdit")}
                    />
                }
            />
        )
    }

    function renderSectionOne() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <InfoItem
                    label="Nome Completo"
                    value="XXXXXXXXXX"
                />

                <InfoItem
                    label="Número para contato"
                    value="xxxxxxxxx"
                />

                <InfoItem
                    label="ID do Usuário"
                    value="XXXX XXXXX"
                    withDivider={false}
                />
            </View>
        )
    }

    function renderSectionTwo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <InfoItem
                    label="Id do cartão"
                    value="Não atualizado"
                />

                <InfoItem
                    label="Data de aniversário"
                    value="XX/XX/XXXX"
                />

                <InfoItem
                    label="Gênero"
                    value="Não informado"
                />

                <InfoItem
                    label="Entrou em"
                    value="Março de 2022"
                />

                <InfoItem
                    label="Email"
                    value="xxxxxxxx@xxx.xxx"
                />

                <InfoItem
                    label="Endereço"
                    value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    withDivider={false}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeader()}

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding
                }}
            >
                {renderSectionOne()}
                {renderSectionTwo()}
            </ScrollView>
        </View>
    )
}

export default MyAccount;