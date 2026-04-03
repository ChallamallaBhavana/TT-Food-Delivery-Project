package com.example.demo.Cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    public Cart addCart(Cart cart){
        return cartRepository.save(cart);
    }
}
