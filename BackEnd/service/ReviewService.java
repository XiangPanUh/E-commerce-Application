package com.mercury.service;

import com.mercury.bean.Review;
import com.mercury.dao.ReviewDao;
import com.mercury.dao.UserDao;
import com.mercury.http.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReviewService {
    @Autowired
    private ReviewDao reviewDao;
    @Autowired
    private UserDao userDao;


    // get all review
    public List<Review> getAll() {
        return reviewDao.findAll();
    }

    //get a review by userID
    public List<Review> getByUserId(Integer id) {
        List<Review> newR = reviewDao.findAll();
        return newR.stream().filter(c->c.getUser().getUserId() == id).collect(Collectors.toList());
    }

    // post a new review
    public Response addNewReview(Review review) {
        reviewDao.save(review);
        return new Response(true);
    }

    // delete review
    public Response deleteReview (Integer id, Authentication authentication) {
        if (reviewDao.findById(id) != null) {
            reviewDao.deleteById(id);
        } else {
            return new Response(false, "The review is not found");
        }
        return new Response(true);
    }

    // edit review
    public Response updateReview(Review review, Authentication authentication) {
        try {
            Review r = (Review) reviewDao.findById(review.getReviewId()).get();
            if (review.equals(r)) {
                return new Response(false, "You don't need to update");
            } else {
                reviewDao.save(review);
            }
            return new Response(true);
        } catch (Exception e) {
            return new Response(false);
        }
    }
}
