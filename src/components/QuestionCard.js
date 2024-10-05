import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { questions } from '../helper/dummyData';
import colors from '../utils/colors';
import { OptionButton } from './OptionButton';
import Container from './common/Container';
import imageConstants from '../utils/imageConstants';
import FastImage from 'react-native-fast-image';

export const QuestionCard = ({question, onSelectOption, score}) => {
  const screenDimensions = Dimensions.get('screen');
  const styles = getStyles(screenDimensions);
  return (
    <Container >
      <View style={styles.container}>
        <View style={styles.gameContainer}>
      <ImageBackground  source={imageConstants.blurCapsul} style = {styles.imageback} resizeMode='contain'>
        {question?.id ? (
<>
<FastImage
  source={{uri : 'https://life-like-earth-server.vercel.app/assets/exoplanetImages/5a24d3c0-4348-4b82-b75c-e6a604157bac.png'}} 
  style={{height : 200, width : 200 , borderRadius : 100 , overflow : 'hidden' , alignSelf : 'center' ,  marginTop : 20 , marginBottom : 40}}
/>
            <Text style={styles.question}>{question?.question}</Text>
            <View style={styles.buttonContainer}>
              <FlatList
                data={question.options}
                renderItem={({item, index}) => (
                  <OptionButton
                    buttonText={item}
                    key={`${item}-${index}`}
                    onPress={() => onSelectOption(item)}
                    type="primary"
                    fullWidth
                  />
                )}
              />
          </View>
          </>


        ) : (
          <Text>
            Quiz complete! Your score is {score}/{questions.length}
          </Text>
        )}
      </ImageBackground>
      </View>
      </View>
    </Container>
  );
};

const getStyles = screenDimensions => {
  const isTablet = screenDimensions.width > 1000;

  const styles = StyleSheet.create({
    container : {
flex : 1,
justifyContent : 'center'
    },
    imageback : {
      width : '100%',
      height : '100%',
      overflow : 'hidden',
      justifyContent: 'center',
      alignSelf : 'center',
      alignContent : 'center',
    },
    gameContainer: {
      width: '90%',
      justifyContent: 'space-evenly',
      alignSelf : 'center',
      alignContent : 'center',
      height :'81%',

    },
    title: {
      fontWeight: 'bold',
      fontSize: isTablet ? 50 : 24,
      color: colors.blue,
      alignSelf : 'center',
      alignContent : 'center',
      alignItems: 'center',
      
    },
    subtitle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: colors.blue,
      marginBottom: 5,
    },
    endTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: colors.blue,
    },
    scoreAnnouncement: {
      fontWeight: 'bold',
      fontSize: 30,
      color: colors.blue,
    },
    awardImg: {
      width: 200,
      height: 250,
      resizeMode: 'contain',
    },
    bold: {
      fontWeight: 'bold',
    },
    resultContainer: {
      flex: 1,
      marginTop: 20,
      alignItems: 'center',
      width: '100%',
    },
    listContainer: {
      flex: 1,
      marginTop: 10,
      color: colors.white,
      width: '100%',
      padding: 20,
      marginBottom: -40,
    },
    reviewAnswer: {
      marginVertical: 5,
    },
    question: {
      fontSize:  20,
      color: colors.white,
      textAlign : 'center',
      paddingHorizontal : 20
    },
    buttonContainer: {
      padding : 20,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  });
  return styles;
};
