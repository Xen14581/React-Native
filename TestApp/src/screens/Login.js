import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity, 
    ImageBackground,
    Image
} from 'react-native';
import { Link, Redirect } from 'react-router-native';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    H3,
    H1,
    H2,
    Footer,
    FooterTab
} from 'native-base';

import { BlurView, CustomChip } from "@react-native-community/blur";

const window = Dimensions.get('window')

const Login = () => {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const handleInputEmail = (e) => {
        setInputs((state) => {
            return {
                ...state, email: e
            };
        });
    };

    const handleInputPassword = (e) => {
        setInputs((state) => {
            return {
                ...state, password: e
            };
        });
    };

    const redirect = () => {
        return <Redirect to='/register'/>
    }

    return (
        <Container>
            <ImageBackground source={{uri: 'https://i.pinimg.com/originals/66/04/ce/6604ced9cea177a7bdfa710c11521d49.gif'}}
            style = {{
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
            }}>
                <Content
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                    <View style={{
                        flex: 1,
                        // backgroundColor: 'yellow',
                        width: window.width,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <H1 style={{
                            fontSize: 40,
                            // backgroundColor: 'grey',
                            padding: 40,
                            marginBottom: 120,
                            color: 'white',
                            fontWeight: 'bold'
                        }}>Login</H1>
                    </View>
                    <View style={{
                        // backgroundColor: 'white',
                        flex: 1,
                        // padding: 20,
                        // margin: 20
                    }}>
                        <View style={{
                            // backgroundColor: 'black',
                            margin: 20,
                            width: 5*window.width/6,
                            flex: 1,
                            position: 'relative',
                            overflow: 'hidden'
                            // opacity: 0.5,
                            // borderRadius: 18,
                        }}>
                            <BlurView
                            // style={{position: "absolute",
                            // top: 0,
                            // left: 0,
                            // bottom: 0,
                            // right: 0,
                            // flex: 1}}
                            reducedTransparencyFallbackColor="gray"
                            blurType="dark"
                            blurAmount={3}
                            />
                            <Form
                            style={{
                                // margin: 20,
                                padding: 30,
                                // width: window.width,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1,
                                // marginTop: 120,
                                // backgroundColor: 'green'
                            }}>
                                <Item floatingLabel
                                style={{
                                    padding: 2
                                }}>
                                    <Label
                                    style={{
                                        color: 'white',
                                        fontSize: 19
                                    }}>
                                        Email
                                    </Label>
                                    <Input
                                    value={inputs.email}
                                    onChangeText={handleInputEmail}
                                    style={{
                                        color: 'white'
                                    }}/>
                                </Item>
                                <Item floatingLabel
                                style={{
                                    padding: 2
                                }}>
                                    <Label
                                    style={{
                                        color: 'white',
                                        fontSize: 19
                                    }}>Password</Label>
                                    <Input
                                    secureTextEntry={true}
                                    value={inputs.password}
                                    onChangeText={handleInputPassword}
                                    style={{
                                        color: 'white'
                                    }}/>
                                </Item>
                                <Button rounded
                                style={{
                                    alignSelf: 'center',
                                    margin: 30
                                }} >
                                    <Text
                                    style={{
                                        paddingLeft: 60,
                                        paddingRight: 60,
                                        color: 'white'
                                    }}>Login</Text>
                                </Button>
                            </Form>
                            <View
                            style={{
                                flex: 1,
                                flexGrow: 0.2,
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                // backgroundColor: 'blue',
                                padding: 10
                            }}>
                                {/* <Link
                                to='/register'> */}
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'white'
                                    }}>
                                        Register
                                    </Text>
                                {/* </Link> */}
                                <Text style={{
                                    fontSize: 20,
                                    color: 'white'
                                }}>
                                    Forgot Password
                                </Text>
                            </View>
                        </View>
                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
};

export default Login;