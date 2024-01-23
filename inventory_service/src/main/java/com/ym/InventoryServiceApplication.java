package com.ym;

import com.ym.model.Product;
import com.ym.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class InventoryServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(InventoryServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner CommandLineRunner(
            ProductRepository productRepository
    ){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                for (int i=1;i<=10;i++){
                    Product product = Product.builder()
                            .name("product" + i)
                            .price(i * 1000)
                            .quantity(i * 10)
                            .build();
                    productRepository.save(product);
                }
            }
        };
    }
}
