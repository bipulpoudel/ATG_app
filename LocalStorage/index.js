import { AsyncStorage } from 'react-native';

export const storeId = async (id) => {
    try {
        await AsyncStorage.setItem('post_id', id);
      } catch (error) {
        console.log(error);
      }
}


export const loadId = async() =>{
    try {
    id = await AsyncStorage.getItem('post_id');
    return id;
    } catch (error) {
    console.log(error);
    }
}