import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default function Ingresso({ item }) {
    return (
        <View style={{ width: 200, marginBottom: 5, marginLeft: 25 }}>
            <View style={{ height: 220, flex: 1, margin: 10 }}>
                <Image source={{ uri: item.imagem }} style={{ flex: 1, borderRadius: 15 }} />
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000' }}>{item.nome}</Text>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000' }}>{item.preco}</Text>
            </View>
        </View>
    )
}

