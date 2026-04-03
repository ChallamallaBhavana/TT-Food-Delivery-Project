package com.example.demo.Food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    FoodService foodService;

    @PostMapping("/add")
    public Food addFood(@RequestBody Food food){
        return foodService.addFood(food);
    }

    @GetMapping("/all")
    public List<Food> getAllFood(){
        return foodService.getAllFood();
    }
}