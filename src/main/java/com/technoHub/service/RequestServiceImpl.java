package com.technoHub.service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.technoHub.model.Request;
import com.technoHub.repository.RequestRepository;

@Service
public class RequestServiceImpl implements RequestServices {

	@Autowired
	RequestRepository requestRepository;

	@Override
	public Request addRequest(Request request) {
		return requestRepository.save(request);
//		try {
//			ObjectMapper mapper = new ObjectMapper();
//			JsonNode jsonNode = mapper.readTree(request);
//			jsonNode.
//		} catch (Exception e) {
//			System.out.println(e);
//			return null;
//		}
	}

	@Override
	public List<Request> getData(Map<String, String> data) {
		String category[] = data.get("category").split(" ");
		int count = Integer.parseInt(data.get("count"));
		String sort = data.get("sort");
		
		System.out.println(data);
		System.out.println(Arrays.toString(category));

		if (category.length > 1) {
			if (sort.equals("desc")) {
				if (count < 0)
					return requestRepository.findAllByOrderByDateDesc();
				if (count == 10)
					return requestRepository.findFirst10ByOrderByDateDesc();
				if (count == 20)
					return requestRepository.findFirst20ByOrderByDateDesc();
				if (count == 30)
					return requestRepository.findFirst30ByOrderByDateDesc();
				if (count == 50)
					return requestRepository.findFirst50ByOrderByDateDesc();
			} else {
				if (count < 0)
					return requestRepository.findAllByOrderByDateAsc();
				if (count == 10)
					return requestRepository.findFirst10ByOrderByDateAsc();
				if (count == 20)
					return requestRepository.findAllByOrderByDateAsc();
				if (count == 30)
					return requestRepository.findFirst30ByOrderByDateAsc();
				if (count == 50)
					return requestRepository.findFirst50ByOrderByDateAsc();
			}
		} else {
			if (sort.equals("desc")) {
				if (count < 0)
					return requestRepository.findByCategoryOrderByDateDesc(category[0]);
				if (count == 10)
					return requestRepository.findFirst10ByCategoryOrderByDateDesc(category[0]);
				if (count == 20)
					return requestRepository.findFirst20ByCategoryOrderByDateDesc(category[0]);
				if (count == 30)
					return requestRepository.findFirst30ByCategoryOrderByDateDesc(category[0]);
				if (count == 50)
					return requestRepository.findFirst50ByCategoryOrderByDateDesc(category[0]);
			} else {
				if (count < 0)
					return requestRepository.findByCategoryOrderByDateAsc(category[0]);
				if (count == 10)
					return requestRepository.findFirst10ByCategoryOrderByDateAsc(category[0]);
				if (count == 20)
					return requestRepository.findFirst20ByCategoryOrderByDateAsc(category[0]);
				if (count == 30)
					return requestRepository.findFirst30ByCategoryOrderByDateAsc(category[0]);
				if (count == 50)
					return requestRepository.findFirst50ByCategoryOrderByDateAsc(category[0]);
			}
		}
		return null;
	}

}
