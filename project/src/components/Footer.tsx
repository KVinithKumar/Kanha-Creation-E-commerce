import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-50 border-t">
      {/* Newsletter */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Join Our Newsletter To Receive Updates On Product Announcements And Sales.
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-sky-600 text-white px-6 py-2 rounded-r-md hover:bg-sky-700 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Furniture */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Furniture</h4>
            <ul className="space-y-2">
              <li><Link to="/category/home-furniture" className="text-gray-600 hover:text-sky-600">Home Furniture</Link></li>
              <li><Link to="/category/office-furniture" className="text-gray-600 hover:text-sky-600">Office Furniture</Link></li>
              <li><Link to="/category/mattress" className="text-gray-600 hover:text-sky-600">Mattress</Link></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-sky-600">About Kanha Creation</Link></li>
              <li><Link to="/social-impact" className="text-gray-600 hover:text-sky-600">Social Impact</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-sky-600">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-sky-600">FAQ's</Link></li>
              <li><Link to="/feedback" className="text-gray-600 hover:text-sky-600">Feedback</Link></li>
              <li><Link to="/stores" className="text-gray-600 hover:text-sky-600">Our Store</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-sky-600">Blogs</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-600 hover:text-sky-600">Shipping & Delivery</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-sky-600">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-sky-600">Privacy Policy</Link></li>
              <li><Link to="/franchise" className="text-gray-600 hover:text-sky-600">Franchise Enquiry</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-sky-600">Purchase & Returns</Link></li>
              <li><Link to="/downloads" className="text-gray-600 hover:text-sky-600">Downloads</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-600" />
                <span className="text-gray-600">1800 1219 115</span>
              </div>
              <p className="text-sm text-gray-600">
                You can reach us 7 days a week. Chat with us or call our toll-free number between 10:00 am to 7:00 pm.
              </p>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sky-600" />
                <span className="text-gray-600">support@kanhaacreations.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-sky-600 mt-1" />
                <span className="text-gray-600 text-sm">
                  Kanha Creation House, Premium Furniture Street, Mumbai - 400 093
                </span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Popular Categories</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Cabinets, 
            Book Shelves, TV Unit, Wardrobes, Outdoor Furniture, Mattresses, Study Tables, Dining Room 
            Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas.
          </p>
        </div>

        {/* Cities */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Cities We Deliver To</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolkata, Surat, Pune, Jaipur, 
            Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Pimpri, Patna, Vadodara, 
            Ghaziabad, Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan, Vasai, Varanasi, 
            Srinagar, Aurangabad, Dhanbad, Amritsar, Navi Mumbai, Allahabad, Ranchi, Howrah, Coimbatore, 
            Jabalpur, Gwalior, Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Chandigarh, 
            Solapur, Hubli, Bareilly, Moradabad, Mysore, Gurgaon, Aligarh, Jalandhar, Tiruchirappalli, 
            Bhubaneswar, Salem, Mira, Bhiwandi, Saharanpur, Gorakhpur, Bikaner, Amravati, Noida, 
            Jamshedpur, Bhilai, Cuttack, Firozabad, Kochi, Nellore, Bhavnagar, Dehradun, Durgapur, 
            Asansol, Rourkela, Nanded, Kolhapur, Ajmer, Akola, Gulbarga, Jamnagar, Ujjain, Loni, 
            Siliguri, Jhansi, Ulhasnagar, Jammu, Sangli, Mangalore, Erode, Belgaum, Ambattur, 
            Tirunelveli, Malegaon, Gaya, Jalgaon, Udaipur, Maheshtala, Davanagere, Kozhikode, 
            Kurnool, Rajpur, Rajahmundry, Bokaro, South Dumdum, Bellary, Patiala, Gopalpur, 
            Agartala, Bhagalpur, Muzaffarnagar, Bhatpara, Panihati, Latur, Dhule, Rohtak, 
            Korba, Bhilwara, Berhampur, Muzaffarpur, Ahmednagar, Mathura, Kollam, Avadi, 
            Kadapa, Kamarhati, Sambalpur, Bilaspur, Shahjahanpur, Satara, Bijapur, Rampur, 
            Shivamogga, Chandrapur, Junagadh, Thrissur, Alwar, Bardhaman, Kulti, Kakinada, 
            Nizamabad, Parbhani, Tumkur, Khammam, Ozhukarai, Bihar Sharif, Panipat, Darbhanga, 
            Bally, Aizawl, Dewas, Ichalkaranji, Karnal, Bathinda, Jalna, Eluru, Kirari Suleman Nagar, 
            Barabanki, Purnia, Satna, Mau, Sonipat, Farrukhabad, Sagar, Rourkela, Durg, Imphal, 
            Ratlam, Hapur, Arrah, Karimnagar, Anantapur, Etawah, Ambernath, North Dumdum, 
            Bharatpur, Begusarai, New Delhi, Gandhidham, Baranagar, Tiruvottiyur, Puducherry, 
            Sikar, Thoothukudi, Rewa, Mirzapur, Raichur, Pali, Ramagundam, Haridwar, Vijayanagaram, 
            Katihar, Nagarcoil, Sri Ganganagar, Karawal Nagar, Mango, Thanjavur, Bulandshahr, 
            Uluberia, Murwara, Sambhal, Singrauli, Nadiad, Secunderabad, Naihati, Yamunanagar, 
            Bidhan Nagar, Pallavaram, Bidar, Munger, Panchkula, Burhanpur, Raurkela Industrial Township, 
            Kharagpur, Dindigul, Gandhinagar, Hospet, Nangloi Jat, Malda, Ongole, Deoghar, 
            Chapra, Haldia, Khandwa, Nandyal, Chittoor, Morena, Amroha, Anand, Bhind, Bhalswa Jahangir Pur, 
            Madhyamgram, Bhiwani, Navi Mumbai Panvel Raigad, Baharampur, Ambala, Morvi, Fatehpur, 
            Rae Bareli, Khora, Ghaziabad, Bhusawal, Orai, Bahraich, Vellore, Mahesana, Sambalpur, 
            Raiganj, Sirsa, Danapur, Serampore, Sultan Pur Majra, Guna, Jaunpur, Panvel, Shivpuri, 
            Surendranagar Dudhrej, Unnao, Hugli and Chinsurah, Alappuzha, Kottayam, Machilipatnam, 
            Shimla, Adoni, Tenali, Proddatur, Saharsa, Hindupur, Sasaram, Hajipur, Bhimavaram, 
            Dehri, Madanapalle, Siwan, Bettiah, Guntakal, Srikakulam, Motihari, Dharmavaram, 
            Gudivada, Narasaraopet, Bagaha, Miryalaguda, Tadipatri, Kishanganj, Karaikudi, 
            Suryapet, Jamalpur, Kavali, Tadepalligudem, Amaravati, Buxar, Jehanabad, Aurangabad.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              Copyright © 2025 Kanha Creation. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-600 text-sm">We Accept Secure Payment</span>
              <div className="flex items-center space-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/200px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;