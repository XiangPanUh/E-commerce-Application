package com.mercury.controller;

import com.mercury.bean.Review;
import com.mercury.http.Response;
import com.mercury.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @GetMapping
    public List<Review> getAll() {
        return reviewService.getAll();
    }

    @GetMapping("/userReview/{id}")
    public List<Review> getByUserId(@PathVariable Integer id) {
        return reviewService.getByUserId(id);
    }

    @PostMapping
    public Response addReview(@RequestBody Review review) {
        reviewService.addNewReview(review);
        return new Response(true);
    }

    @PutMapping
    public Response updateReview(Review review, Authentication authentication) {
        return reviewService.updateReview(review,authentication);
    }

    @DeleteMapping
    public Response deleteReview(Integer id, Authentication authentication) {
        return reviewService.deleteReview(id, authentication);
    }
}
