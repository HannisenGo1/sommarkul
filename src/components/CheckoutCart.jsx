import React, { useEffect, useState } from "react";
import saveInCartStore from '../data/cartStore'
import { useNavigate } from 'react-router-dom';
import FormPayment from "./FormPayment";

const CheckoutCart = () => {
    const { items, totalPrice, updateItemQuantity } = saveInCartStore();
    const navigate = useNavigate();
    
    const backToMenuBtn = () => {
        navigate('/');
    }
    
    // Deklarera state för grupperade varor och totalt pris
    const [groupedItems, setGroupedItems] = useState([]);
    const [total, setTotal] = useState(0);
    
    // Hämta varor från kundvagnen och beräkna kvantiteter när komponenten monteras
    useEffect(() => {
        const findItems = saveInCartStore.getState().items;
        const groupedItems = findItems.reduce((acc, item) => {
            const existingItem = acc.find(i => i.key === item.key);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                acc.push({ ...item, quantity: 1 });
            }
            return acc;
        }, []);
        setGroupedItems(groupedItems);
        
        // Beräkna det totala priset
        const totalPrice = groupedItems.reduce((total, item) => {
            return total + parseFloat(item.price) * item.quantity;
        }, 0);
        setTotal(totalPrice);
    }, []);
    
    const handleAddToCart = (item) => {
        saveInCartStore.addToCart(item);
        saveInCartStore.calculateTotalPrice();
    };
    
    const handleDecrease = (itemKey) => {
        updateItemQuantity(itemKey, -1);
    };
    
    console.log('Rendering CheckoutCart with items:', groupedItems, 'and totalPrice:', total);
    
    return (
        <>
        <div className="back-btn-cart">
            <button className="back-from-cart" onClick={backToMenuBtn}>Fortsätt handla</button>
        </div>
        <div className="product-in-cart">
            <h2>Kundvagnen</h2>
            <div className="artiklar-in-cart">
                {groupedItems.map((item)=> (
                    <div className="items-div" key={item.key}>
                        <p>{item.name}</p>
                        <img src={item.imgurl} alt={item.name} className="productImage" />
                        <div className="button-container">
                            <button className="btn-in-cart" onClick={() => handleDecrease(item.key)}>-</button>
                            <p>{item.quantity}</p>
                            <button className="btn-in-cart" onClick={() => handleAddToCart(item)}>+</button>
                            <p>{parseFloat(item.price) * item.quantity}</p>
                        </div>
                    </div>
                ))}
                <p>Totalt antal artiklar: {groupedItems.reduce((total, item) => total + item.quantity, 0)}</p>
                <p>Totala priset: {total}</p>
            </div>
        </div>
        <FormPayment />
        </>
    );
};

export default CheckoutCart;



