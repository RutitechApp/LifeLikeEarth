import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Share, Alert, ImageBackground } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import QRCode from 'react-native-qrcode-svg';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/common/Container';
import imageConstants from '../../utils/imageConstants';
import FastImage from 'react-native-fast-image';
import Button from '../../components/common/Button';
import { userAction } from '../../redux/action/userAction';


const PassPortScreen = () => {
    const viewRef = useRef();
    const dispatch = useDispatch()
    const [qrValue, setQrValue] = useState('');
    const [imageURL, setImageURL] = useState('')
    const uData = useSelector((state) => state?.user?.userData)
    console.log(uData)
    const requestSavePermission = async () => {
        try {
            const permission = Platform.select({
                ios: PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY, // Permission for iOS
                android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, // Permission for Android
            });

            const result = await request(permission);
            return result === RESULTS.GRANTED;
        } catch (error) {
            console.error('Permission error:', error);
            return false;
        }
    };
    const captureScreen = async () => {
        try {
            const uri = await captureRef(viewRef.current, {
                format: 'png',
                quality: 0.8,
            });
            const obj = {
                userName: uData?.userName,
                age:uData?.age,
                passports : [...uData?.passports , uri]
              }
              console.log(uData?.userName)
            dispatch(userAction(obj))
            setImageURL(uri)
        } catch (error) {
            console.error('Failed to capture screenshot', error);
        }
    };

    const saveImage = async (uri) => {
        try {
            await CameraRoll.save(uri, { type: 'photo' });
            Alert.alert('Success', 'Passport saved to gallery!');
            
        } catch (error) {
            console.log(error)
        }
    };

    const uploadImageAndGenerateQRCode = async () => {
        await captureScreen();

        const localFilePath = await saveImage(imageURL);
        if (localFilePath) {
            setQrValue("localFilePath");
            Alert.alert('Success', `Passport saved! Path: ${localFilePath}`);
           
        }
    };

    useEffect(() => {
        requestSavePermission()
    }, []);

    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.passportContainer} ref={viewRef}>
                    <ImageBackground source={imageConstants.galaxy} style={{
                        padding: 20,
                    }}>
                        <Text style={styles.headerText}>SPACE PASSPORT</Text>
                        <Text style={styles.subHeaderText}>E-FORMAT</Text>
                        <Text style={styles.subHeaderText}>Like Life Earth (LLE) CERTIFICATE</Text>

                        <View style={styles.infoContainer}>
                            <Text style={styles.nameText}>{uData.userName}</Text>
                            <Text style={styles.countryText}>{uData.age} years old</Text>

                        </View>

                        <View style={styles.qrCodeContainer}>
                            <QRCode value={'https://exoplanets.nasa.gov/news/1774/discovery-alert-a-super-earth-in-the-habitable-zone/'} size={65} />
                        </View>
                        <Text style={styles.validText}>VALID IN ALL COUNTRIES</Text>
                        <FastImage
                            source={imageConstants.stempSE}
                            style={{
                                height: 70, width: 70,
                                position: 'absolute',
                                bottom: 10, right: 10
                            }}
                        />
                    </ImageBackground>
                </View>

                <Button
          title={ "Download"}
          buttonStyle={{ marginTop: 60 , width : 150, alignSelf : 'center' , position  : 'absolute' , bottom : 150 , right : 100 }}
          onPress={() => {uploadImageAndGenerateQRCode()
          }}
        />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop : '40%',
        padding: 20,
    },
    urlText: {
        marginTop: 10,
        fontSize: 14,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    passportContainer: {
        backgroundColor: '#2C3E50',
        borderRadius: 10,

        width: '100%',
        overflow: 'hidden'
    },
    headerText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subHeaderText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 2,
    },
    infoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    nameText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    countryText: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 10,
    },
    doseContainer: {
        marginVertical: 5,
    },
    doseText: {
        fontSize: 16,
        color: '#fff',
    },
    vaccineText: {
        fontSize: 14,
        color: '#fff',
    },
    dateText: {
        fontSize: 14,
        color: '#fff',
    },
    qrCodeContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: 75,
        height: 75,
        borderRadius: 10,
        alignSelf: 'center'
    },
    validText: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default PassPortScreen;
