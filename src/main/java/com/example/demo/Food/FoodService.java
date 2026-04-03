package com.example.demo.Food;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class FoodService {

    @Autowired
    FoodRepository foodRepository;

    public Food addFood(Food food){
        return foodRepository.save(food);
    }

    public List<Food> getAllFood(){
        return foodRepository.findAll();
    }
}
