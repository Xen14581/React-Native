import React from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { Link } from 'react-router-native';

const Register = () => {
    return (
        <View>
            <ScrollView>
                <Text>Register</Text>
                <Link
                    to='/'
                >
                    <Text>Already have an account? Login</Text>
                </Link>
            </ScrollView>
        </View>
    );
};

export default Register;