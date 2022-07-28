import { StyleSheet, Text, View, Image, FlatList, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../ProductContext';

const Product = (props) => {
    const { navigation } = props;
    const { products, onGetProducts } = useContext(ProductContext);
    useEffect(async () => {
        await onGetProducts();
        return () => { };
    }, []);
    const renderItem = ({ item }) => {
        const { _id, name, price, image, description } = item;
        return (
            <ScrollView>
                <View style={styles.viewList}>
                    <TouchableOpacity style={styles.viewProduct} onPress={() => navigation.navigate('Detail', { _id: _id })} >

                        <View style={styles.viewImage}>
                            <Image style={styles.imageProduct} source={{ uri: image }}></Image>
                        </View>
                        <View style={styles.viewText}>
                            <Text style={styles.textName}>{name}</Text>
                            <Text style={styles.textPrice}>$ {price}</Text>
                            <Text style={styles.text}>{description}</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>

        )
    }

    return (

        <View>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={() => Math.random()}
            >
            </FlatList>
        </View>


    )
}

export default Product

const styles = StyleSheet.create({

    viewBody: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EDEDED'
    },

    viewBanner: {
        width: '100%',
        height: 10,
    },

    viewList: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20
    },

    viewProduct: {
        width: '100%',
        height: 190,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#FEFEFE',
        borderRadius: 10,
        marginTop: 30,
    },

    viewImage: {
        width: 150,
        height: "100%",
        alignItems: 'center'
    },

    imageProduct: {
        width: 150,
        height: 150,
        borderRadius: 10
    },

    viewText: {
        width: '45%',
        marginLeft: 20
    },

    textName: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    textPrice: {
        fontWeight: '500'
    },

    text: {
        marginTop: 10,
        fontSize: 12
    },




})