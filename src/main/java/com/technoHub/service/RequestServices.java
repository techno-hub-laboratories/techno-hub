package com.technoHub.service;

import java.util.List;
import java.util.Map;

import com.technoHub.model.Request;

public interface RequestServices {
	Request addRequest(Request request);

	List<Request> getData(Map<String, String> data);

}
