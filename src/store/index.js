import {createStore} from 'vuex'

import dosa from '../assets/dosa.jpg'
import poori from '../assets/poori.jpg'
import roti from '../assets/roti.jpg'
import chapathi from '../assets/chapathi.jpg'
import idly from '../assets/idly.jpg'
import vegbriyani from '../assets/vegbriyani.jpg'
import chickenbriyani from '../assets/chickenbriyani.jpg'
import muttonbriyani from '../assets/muttonbriyani.jpg'
import curdrice from '../assets/curdrice.jpg'
import tomatorice from '../assets/tomatorice.jpg'
import pongal from '../assets/pongal.jpg'
import kichadi from '../assets/kichadi.jpg'
import oothapam from '../assets/oothapam.jpg'
import masaladosa from '../assets/masaladosa.jpg'
import vada from '../assets/vada.jpg'

export default createStore({
  state: {
    Breakfast : [{id: 1 , name:"Dosa" , url:dosa, price:20,rate:4.1,desc:"Best Food I have ever had"},
    {id: 2 , name:"Idly" , url:idly , price:20,rate:4.3,desc:"Tastiest food ever"},
    {id: 3 , name:"Pongal" , url:pongal  ,price:30,rate:4.6,desc:"Very good taste"},
    {id: 4 , name:"Chapathi" , url:chapathi  ,price:20,rate:4.4,desc:"Tastiest food ever"},
    {id: 5 , name:"Kichadi" , url:kichadi  ,price:35,rate:4.1,desc:"Best Food I have ever had"},
    {id: 6 , name:"Oothapam" , url:oothapam ,price:20,rate:4.6,desc:"Tastiest food ever"},
    {id: 7 , name:"Masala Dosa" , url:masaladosa  ,price:30,rate:4.4,desc:"Very good taste"},
    {id: 8 , name:"Vada" , url:vada  ,price:10,rate:4.1,desc:"Best Food I have ever had"},],

    Lunch : [{id: 9, name:"Veg Briyani" , url:vegbriyani ,price:100,rate:4.4,desc:"Best Food I have ever had"},
    {id: 10 , name:"Chicken Briyani" , url:chickenbriyani ,price:120,rate:4.5,desc:"Tastiest food ever"},
    {id: 11 , name:"Tomato Rice" , url:tomatorice ,price:80,rate:4.6,desc:"Very good taste"},
    {id: 12 , name:"Mutton Briyani" , url:muttonbriyani  ,price:140,rate:4.8,desc:"Best Food I have ever had"},
    {id: 13 , name:"Curd rice" , url:curdrice  ,price:50,rate:4.1,desc:"Very good taste"}],

    Dinner: [{id: 14 , name:"Ghee Dosa" , url:dosa ,price:20,rate:4.3,desc:"Tastiest food ever"},
    {id: 15 , name:"Poori" , url:poori ,price:30,rate:4.2,desc:"Best Food I have ever had"},
    {id: 16 , name:"Egg Chapathi" , url:chapathi ,price:20,rate:4.1,desc:"Very good taste"},
    {id: 17 , name:"Roti" , url:roti  ,price:40,rate:4.9,desc:"Tastiest food ever"},
    {id: 18 , name:"Idly" , url:idly  ,price:20,rate:4.5,desc:"Best Food I have ever had"},
    {id: 19 , name:"Ghee Oothapam" , url:oothapam ,price:20,rate:4.6,},] , 

    cartItemCount : 0 ,
    cartItems: [ ],
  },
    mutations: {
        increment(state) {
            state.count++
        },
        addToCart(state, payload) {
            let item = payload;
            item = { ...item, quantity: 1 };
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(
                    i => i.id == item.id
                );
                if (bool == true) {
                    let itemIndex = state.cartItems.findIndex(
                        el => el.id == item.id
                    );
                    state.cartItems[itemIndex]["quantity"] += 1;
                } else {
                    state.cartItems.push(item);
                }
            } else {
                state.cartItems.push(item);
            }
            state.cartItemCount++
        },
        removeItem(state, payload) {
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(
                    i => i.id == payload.id
                );
                console.log('bool', bool)
                if (bool) {
                    let index = state.cartItems.findIndex(
                        el => el.id == payload.id
                    );
                    //to prevent quantity from being negative
                    state.cartItems[index]["quantity"] === 0
                        ? (state.cartItems[index]["quantity"] = 0)
                        : (state.cartItems[index]["quantity"] -= 1);
                    if (state.cartItems[index]["quantity"] === 0)
                        state.cartItems.splice(index, 1)
                    if (state.cartItemCount !== 0)
                        state.cartItemCount--
                }
            }
        }
    },
    actions: {
        addToCart: (context, payload) => {
            context.commit('addToCart', payload)
        },
        removeItem: (context, payload) => {
            context.commit('removeItem', payload)
        },
      }
    })