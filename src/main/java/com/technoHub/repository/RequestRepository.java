package com.technoHub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.technoHub.model.Request;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {

	List<Request> findAllByOrderByDateDesc();

	List<Request> findAllByOrderByDateAsc();

	List<Request> findFirst10ByOrderByDateDesc();

	List<Request> findFirst20ByOrderByDateDesc();

	List<Request> findFirst30ByOrderByDateDesc();

	List<Request> findFirst50ByOrderByDateDesc();

	List<Request> findFirst10ByOrderByDateAsc();

	List<Request> findFirst20ByOrderByDateAsc();

	List<Request> findFirst30ByOrderByDateAsc();

	List<Request> findFirst50ByOrderByDateAsc();

	List<Request> findByCategoryOrderByDateDesc(String category);

	List<Request> findByCategoryOrderByDateAsc(String category);

	List<Request> findFirst10ByCategoryOrderByDateDesc(String category);

	List<Request> findFirst20ByCategoryOrderByDateDesc(String category);

	List<Request> findFirst30ByCategoryOrderByDateDesc(String category);

	List<Request> findFirst50ByCategoryOrderByDateDesc(String category);

	List<Request> findFirst10ByCategoryOrderByDateAsc(String category);

	List<Request> findFirst20ByCategoryOrderByDateAsc(String category);

	List<Request> findFirst30ByCategoryOrderByDateAsc(String category);

	List<Request> findFirst50ByCategoryOrderByDateAsc(String category);
}
