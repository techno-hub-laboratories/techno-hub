package com.technoHub.resource;

import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.technoHub.mailservice.Mailservice;
import com.technoHub.model.Request;
import com.technoHub.model.User;
import com.technoHub.repository.RequestRepository;
import com.technoHub.repository.UserRepository;
import com.technoHub.service.RequestServices;
import com.technoHub.service.UserServices;

@Controller
public class WebController {

	@Autowired
	RequestServices requestService;

	@Autowired
	UserServices userService;

	@Autowired
	RequestRepository requestRepository;

	@Autowired
	UserRepository UserRepository;

	@Autowired
	private Mailservice service;

	@GetMapping("/login")
	public String registration(Model model) {
		return "registration";
	}

	@GetMapping("/")
	public String Home() {
		return "homepage";
	}

	@GetMapping("/services")
	public String counseling() {
		return "services";
	}

	@GetMapping("/user/counseling-form")
	public String counselingForm() {
		return "counselingForm";
	}

	@GetMapping("/dashboard")
	public String admin() {
		return "adminDashboard";
	}

	// getmapping for the profile
	@GetMapping("/user/profile")
	public String profile(@ModelAttribute("Email") String username, Model model) {
		User user = UserRepository.findById(username).get();
		System.out.println(user);
		model.addAttribute("fullname", user.getFirstName() + " " + user.getLastName());
		model.addAttribute("name", user.getFirstName());
		model.addAttribute("lastname", user.getLastName());
		model.addAttribute("phone", user.getMobileNumber());
		model.addAttribute("address", user.getAddress());
		model.addAttribute("email", user.getEmail());
		model.addAttribute("gender", user.getGender());
		return "profile page";
	}
	
	@PostMapping("/user/profile")
	public String Profile(@RequestParam Map<String,String> data, Model model) {
		System.out.println("hello "+data.get("Email"));
		User user = UserRepository.findById(data.get("Email")).get();
		System.out.println(user);
		model.addAttribute("fullname", user.getFirstName() + " " + user.getLastName());
		model.addAttribute("name", user.getFirstName());
		model.addAttribute("lastname", user.getLastName());
		model.addAttribute("phone", user.getMobileNumber());
		model.addAttribute("address", user.getAddress());
		model.addAttribute("email", user.getEmail());
		model.addAttribute("gender", user.getGender());
		return "profile page";
	}

	// change profile details
	@PostMapping("/user/changeprofiledetails")
	public RedirectView changeprofile(@RequestParam Map<String, String> data, RedirectAttributes redirectAttributes) {
		User user = UserRepository.findById(data.get("email").toString()).get();
		user.setAddress(data.get("address"));
		user.setMobileNumber(data.get("mobileNumber"));
		user.setFirstName(data.get("firstName"));
		user.setLastName(data.get("lastName"));

		userService.editProfile(user);
		RedirectView redirectView = new RedirectView();
		redirectView.setUrl("/user/profile");
		redirectAttributes.addFlashAttribute("Email", data.get("email"));
		return redirectView;
	}

	// signup form submission
	@PostMapping("/signup")
	public String signUp(@RequestParam Map<String, String> data) {
		User user = new User(data.get("firstName"), data.get("lastName"), data.get("mobileNumber"), data.get("address"),
				data.get("email"), data.get("password"), data.get("gender"));

//		Request request = new Request(user.getEmail(), "", "", data.get("description"));

		userService.signUp(user);
//		request = requestService.addRequest(request);
//		user.getRequests().add(request);

		String msgForAdmin = "Name : " + user.getFirstName() + " " + user.getLastName() + "\n" + "E-Mail : "
				+ user.getEmail() + "\n" + "Mobile Number : " + user.getMobileNumber() + "\n";

		String msgForClient = "Hello " + user.getFirstName()
				+ ",\n \t Congratulations on Registering. We will contact you at the earliest.\n\n Warm Regards\nTechno-Hub Team";

//		service.simplemail("negikingston@gmail.com", msgForAdmin, "Counseling Request");
//		service.simplemail(user.getEmail(), msgForClient, "Registration Successful");

		return "redirect:/login";
	}

	// ajax call to check if user already exists
	@PostMapping("/authenticate-email")
	@ResponseBody
	public boolean isValidEmail(@RequestBody Map<String, String> data) {
		System.out.println(data.get("email"));
		return userService.isValidEmail(data.get("email"));
	}

	// ajax call for creating order while registering
	@PostMapping("/create-order-sign-in")
	@ResponseBody
	public String createOrderSignIn(@RequestBody Map<String, Object> data) throws RazorpayException {
		RazorpayClient razorpayClient = new RazorpayClient("rzp_test_fS3k81U9Notfcz", "OsoJQTEFAseTv5hDJ67eNoYn");

		JSONObject options = new JSONObject();
		options.put("amount", 50000);
		options.put("currency", "INR");
		options.put("receipt", "txn_123456");

		Order order = razorpayClient.Orders.create(options);

		return order.toString();
	}

	// ajax call for creating order while counseling
	@PostMapping("/create-order-starter")
	@ResponseBody
	public String createOrderStarter(@RequestBody Map<String, Object> data) throws RazorpayException {
		RazorpayClient razorpayClient = new RazorpayClient("rzp_test_fS3k81U9Notfcz", "OsoJQTEFAseTv5hDJ67eNoYn");

		JSONObject options = new JSONObject();
		options.put("amount", 250000);
		options.put("currency", "INR");
		options.put("receipt", "txn_123456");

		Order order = razorpayClient.Orders.create(options);

		return order.toString();
	}

	// counseling form submission
	@PostMapping("/save-request")
	public String saveRequest(@RequestParam Map<String, String> data) {
		System.out.println(data);
		Request request = new Request(data.get("email"), data.get("mobileNumber"), data.get("firstName"),
				data.get("lastName"),
				data.get("category"), data.getOrDefault("subject", ""),
				data.get("description"));

		request = requestService.addRequest(request);

		User user = UserRepository.findById(data.get("email")).get();

		return "redirect:/";
	}

	@PostMapping("/get-data")
	@ResponseBody
	public List<Request> getData(@RequestBody Map<String, String> data) {
		List<Request> temp = requestService.getData(data);
		System.out.println(temp);
		return temp;
	}

}
//{
//	"email" : "amit@gmail.com",
//	"firstName" : "amit",
//	"lastName" : "negi", 
//	"gender" : "male", 
//	"highestQualification" : "Bachelor",
//	"mobileNumber" : 1111111111,
//	"address" : "rishikesh",
//	"password" : "amit"
//}

//payment button

//<div class="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_HULWk4AmVoQtJK/view" data-text="Pay Now" data-color="#528FF0" data-size="large">
//<script>
//  (function(){
//    var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
//    if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
//    s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
//    rzp && rzp.init && rzp.init()}})();
//</script>
//</div>
