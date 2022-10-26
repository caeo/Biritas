import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import { FONTS, COLORS } from '../constants';

const ModesButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress
}) => {
    return (
        
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
            onPress={onPress}
        >
            
                <Image
                    source={icon}
                    style={{
                        ...styles.image,
                        ...iconStyle
                    }}
                />
            
        </TouchableOpacity>
    )
}

ModesButton.propTypes = {
    iconPosition: PropTypes.oneOf(['LEFT', 'RIGHT']),
};

const styles = StyleSheet.create({
    image: {
        //marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: null,
    }
})

export default ModesButton;