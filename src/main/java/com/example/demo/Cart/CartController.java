package com.example.demo.Cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @PostMapping("/add")
    public Cart addCart(@RequestBody Cart cart){
        return cartService.addCart(cart);
    }
}
