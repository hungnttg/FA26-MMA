
import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SLot11() {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState(null);
    const [search, setSearch] = useState('');

    const load = async () => {
        const d = await AsyncStorage.getItem('lands');
        setData(d ? JSON.parse(d) : []);
    };

    useFocusEffect(useCallback(() => { load(); }, []));

    const save = async () => {
        let arr = [...data];
        const item = { id: id || Date.now().toString(), name, location, price };

        if (id) arr = arr.map(x => x.id === id ? item : x);
        else arr.push(item);

        await AsyncStorage.setItem('lands', JSON.stringify(arr));
        setData(arr);
        setId(null);
        setName('');
        setLocation('');
        setPrice('');
    };

    const edit = x => {
        setId(x.id);
        setName(x.name);
        setLocation(x.location);
        setPrice(x.price);
    };

    const del = async id => {
        const arr = data.filter(x => x.id !== id);
        await AsyncStorage.setItem('lands', JSON.stringify(arr));
        setData(arr);
    };

    return (
        <View style={{ padding: 15, flex: 1 }}>
            <Text style={{ fontSize: 22 }}>Quản lý đất</Text>

            <TextInput placeholder="Tên" value={name}
                onChangeText={setName} />
            <TextInput placeholder="Vị trí" value={location}
                onChangeText={setLocation} />
            <TextInput placeholder="Giá" value={price}
                onChangeText={setPrice} />

            <Button title="Lưu" onPress={save} />

            <TextInput placeholder="Tìm kiếm" value={search}
                onChangeText={setSearch} />

            <FlatList
                data={data.filter(x =>
                    x.name.toLowerCase().includes(search.toLowerCase()) ||
                    x.location.toLowerCase().includes(search.toLowerCase())
                )}
                keyExtractor={x => x.id}
                renderItem={({ item }) => (
                    <View style={{ padding: 10 }}>
                        <Text>{item.name} - {item.location} - {item.price}</Text>
                        <Button title="Sửa" onPress={() => edit(item)} />
                        <Button title="Xóa" onPress={() => del(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}
