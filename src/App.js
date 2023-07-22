import { Image, ImageBackground, StyleSheet, Text, View ,} from 'react-native'

import React from 'react'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('./Image/bg.jpg')} style={{ flex: 1, alignItems: 'center', }}>
        <View style={{ width: 200, height: 60, backgroundColor: '#004d00', borderRadius: 20, marginVertical: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#019f01' }}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>Stakmus.App</Text>
        </View>
        <Image source={require('./Image/user.jpg')} style={{ width: 90, height: 90, borderRadius: 50, borderWidth: 2, borderColor: 'white', marginTop: 30 }} />
        <View style={{ width: 190, height: 50, backgroundColor: '#004d00', borderRadius: 20, marginVertical: 15,alignItems: 'center',justifyContent:'center', borderWidth: 2, borderColor: 'white' }}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold',}}>Abrori</Text>
        </View>
          
        <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300, marginBottom: 10}}>
          <View style={{ width: 90, height: 90, backgroundColor: '#018e01', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}>SLTP</Text>
          </View>
          <View style={{ width: 90, height: 90, backgroundColor: '#018e01', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}>SLTA</Text>
          </View>
          <View style={{ width: 90, height: 90, backgroundColor: '#018e01', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}>PT</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300, }}>
            <View style={{ width: 90, height: 90, backgroundColor: '#018e01', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}>Date Hafal</Text>
            </View>
            <View style={{ width: 90, height: 90, backgroundColor: '#018e01', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}>Date Tidak Hafal</Text>
            </View>
            <View style={{ width: 90, height: 90, backgroundColor: '#018e01', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}>Sanksi</Text>
            </View>
          </View>
        </View>
        <View style={{width: 100, height: 50, backgroundColor: '#2f4f4f', borderRadius: 10, marginTop: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: 'green'}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}>Login</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})