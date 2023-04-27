import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions, SafeAreaView } from 'react-native';
import Navibar from '../Components/Navibar';
import Carrossel from '../Components/Carrossel';

const INGRESSO_WIDTH = (Dimensions.get('window').width / 2) - (15 * 2.2);

export default function Home({ navigation }) {
    const lista = [
        { id: 1, nome: "0-12 anos", preco: "R$ 12,90", imagem: "https://img.freepik.com/fotos-gratis/criancas-sorridentes-de-tiro-medio-posando-juntas_23-2149073581.jpg?w=2000" },
        { id: 2, nome: "13-18 anos", preco: "R$ 16,90", imagem: "https://www.pfizer.com.br/images/custom/meningite-em-adolescentes.jpg" },
        { id: 3, nome: "19-59 anos", preco: "R$ 24,90", imagem: "https://www.churchofjesuschrist.org/bc/content/church/news/single-adults-leaders-see-benefits-of-ysa-ward-reorganization/images/YSA-299.jpg" },
        { id: 4, nome: "+60 anos", preco: "R$ 6,50", imagem: "https://fbh.com.br/wp-content/uploads/2020/12/idosos.jpg" },
    ]

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro', { ingresso: item })}>
                <View style={[styles.ingressoContainer, { width: INGRESSO_WIDTH }]}>
                    <Image source={{ uri: item.imagem }} style={styles.ingressoImagem} />
                    <Text style={styles.ingressoNome}>{item.nome}</Text>
                    <Text style={styles.ingressoPreco}>{item.preco}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <Navibar />
            <Carrossel />
            <Text style={styles.titulo}>VALORES DOS INGRESSOS</Text>
            <FlatList
                data={lista}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    ingressoContainer: {
        flex: 1,
        margin: 10,
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 1,
        height: 350,
        overflow: 'hidden',
        backgroundColor: '#efefef'
    },
    ingressoImagem: {
        width: '100%',
        height: '70%'
    },
    ingressoNome: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    ingressoPreco: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5
    },
    flatListContainer: {
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    titulo: {
        color: '#000',
        fontSize: 25,
        marginVertical: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})