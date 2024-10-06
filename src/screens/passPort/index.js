import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Share, Alert } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import QRCode from 'react-native-qrcode-svg';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";


const PassPortScreen = () => {
  const viewRef = useRef(); // Reference to the view you want to capture
  const [qrValue, setQrValue] = useState('');
  const [imageURL , setImageURL] = useState('')
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
      console.log('Screenshot saved at:', uri);
    //   saveImage(uri);
      setImageURL(uri)
    } catch (error) {
      console.error('Failed to capture screenshot', error);
    }
  };

  const saveImage = async (uri) => {
    try {
      await CameraRoll.save(uri, { type: 'photo' });
      Alert.alert('Success', 'Screenshot saved to gallery!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save screenshot: ' + error.message);
    }
  };

  const uploadImageAndGenerateQRCode = async () => {
    await captureScreen();

    if (imageURL) {
        const localFilePath = await saveImage(imageURL);
        if (localFilePath) {
          setQrValue(localFilePath);  // Store the local file path for QR code
          Alert.alert('Success', `Image saved! Path: ${localFilePath}`);
        }
      }
  };

  useEffect(() => {
    requestSavePermission()
    uploadImageAndGenerateQRCode()
  }, []);

  return (
    <View style={styles.container}>
      {/* View to capture */}
      <View style={styles.passportContainer} ref={viewRef}>
        <Text style={styles.headerText}>VACCINATION PASSPORT</Text>
        <Text style={styles.subHeaderText}>PAPER FORMAT</Text>
        <Text style={styles.subHeaderText}>COVID-19 CERTIFICATE</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>GEORGE DAVIS</Text>
          <Text style={styles.countryText}>Country</Text>

          <View style={styles.doseContainer}>
            <Text style={styles.doseText}>DOSE 1/2</Text>
            <Text style={styles.vaccineText}>Vaccine Name</Text>
            <Text style={styles.dateText}>Day / Month / Year</Text>
          </View>

          <View style={styles.doseContainer}>
            <Text style={styles.doseText}>DOSE 2/2</Text>
            <Text style={styles.vaccineText}>Vaccine Name</Text>
            <Text style={styles.dateText}>Day / Month / Year</Text>
          </View>
        </View>

        {/* QR Code */}
        {/* <View style={styles.qrCodeContainer}>
          <QRCode value="https://example.com" size={100} />
        </View> */}
        {qrValue ? (
        <View style={styles.qrCodeContainer}>
          <QRCode value={qrValue} size={65} />
        </View>
      ) : null}
        <Text style={styles.validText}>VALID IN ALL COUNTRIES</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
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
    padding: 20,
    marginBottom: 20,
    width: '100%',
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
  },
  validText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default PassPortScreen;
