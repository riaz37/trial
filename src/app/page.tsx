/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Play,
  Check,
  ChevronRight,
  Home,
  ChevronDown,
  Star,
  Code,
  Figma,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-gray-600 hover:text-gray-900 px-4 py-2">
    {children}
  </Link>
);

const skills = [
  {
    name: "Front-end Design",
    icon: <Code className="w-4 h-4 text-blue-500" />,
  },
  { name: "Figma", icon: <Figma className="w-4 h-4 text-blue-500" /> },
  { name: "Web Design", icon: <Globe className="w-4 h-4 text-blue-500" /> },
  {
    name: "Mobile App",
    icon: <Smartphone className="w-4 h-4 text-blue-500" />,
  },
];

const reviews = [
  { stars: 5, count: 602, percentage: 80 },
  { stars: 4, count: 125, percentage: 15 },
  { stars: 3, count: 40, percentage: 3 },
  { stars: 2, count: 15, percentage: 1 },
  { stars: 1, count: 10, percentage: 1 },
];

function FreelancerGig() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-black">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full shadow-sm border border-gray-100"
              >
                {skill.icon}
                <span className="text-sm text-blue-500">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Status */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-black">Portfolio</h2>
          <div className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-full text-sm font-medium cursor-pointer hover:bg-red-600 transition">
            <span>See Portfolio</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-12 grid grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm border ">
            <h3 className="text-lg font-bold mb-2 text-black">Product Type</h3>
            <p className="text-gray-600">Mobile App</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm border ">
            <h3 className="text-lg font-semibold mb-2 text-black">Pricing</h3>

            <p className="text-sm text-gray-500">330$ / Hour</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm border ">
            <h3 className="text-sm font-semibold mb-2 text-black">
              Additional
            </h3>

            <p className="text-sm text-gray-500">20$ / Hour</p>
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-black">Reviews</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-black">4.9</div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  902 reviews for this Gig
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {reviews.map(({ stars, count, percentage }) => (
                <div key={stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-24">
                    <Star className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{stars}</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="w-12 text-sm text-gray-500">({count})</div>
                </div>
              ))}
            </div>
            
          </div>
        </section>
        
      </div>
       {/* Search and Sort Section */}
       <div className="mt-10">
        <SearchBar />
        <SortSelect />
      </div>
    </main>
  );
}

const GigDetails = ({ gig }) => {
  const {
    title,
    author,
    rating,
    description,
    skills,
    price,
    additionalPricing,
  } = gig;

  return (
    <div className="space-y-8">
      {/* Gig Title and Author */}
      <div>
        <h1 className="text-2xl font-semibold mb-4 text-black">{title}</h1>
        <div className="flex items-center space-x-4">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="flex items-center">
              <span className="font-medium text-black">{author.name}</span>
              <CheckCircle className="w-4 h-4 ml-2 text-blue-600" />
              <span className="ml-1 text-blue-600 text-sm">Verified</span>
            </div>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-600">
                ({rating.score})
              </span>
              <span className="ml-4 text-sm text-gray-500">
                {rating.orders} Orders in Queue
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="font-medium mb-2 text-gray-600">Description</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      <FreelancerGig />
    </div>
  );
};

//Gig cards

const GigCard = ({
  tabs, // Array of tab labels
  gigTitle,
  profileName,
  profileImage,
  isVerified,
  description,
  rating,
  reviews,
  price,
  portfolioImage,
  portfolioVideo,
}) => {
  return (
    <div className="w-80 border rounded-lg shadow-md overflow-hidden">
      {/* Tabs */}
      <div className="flex bg-gray-100 text-sm font-medium border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className="flex-1 py-2 text-center text-black hover:bg-gray-200 relative"
          >
            {tab}
            {/* Green border on hover */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 scale-x-0 transition-transform transform origin-center hover:scale-x-100"></span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Image Section */}
        <div className="w-full h-44 relative">
          <Image
            src={portfolioImage} // Dynamic portfolio image
            alt="Gig Image"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 mt-4">
          <Image
            src={profileImage} // Dynamic profile image
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-full border border-gray-300"
          />
          <div>
            <h3 className="text-lg font-semibold text-black">{profileName}</h3>
            {isVerified && (
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-blue-600" />{" "}
                <span className="text-xs text-blue-600 font-medium">
                  Verified
                </span>
                {/* Changed to blue */}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-gray-700 text-sm">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
          <span className="text-yellow-500 font-medium">⭐ {rating}</span>
          <span>({reviews})</span>
        </div>

        {/* Price and Button Section */}
        <div className="flex items-center mt-4">
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 rounded-lg transition-colors">
            Add to Cart - ${price}
          </button>
        </div>
      </div>

      {/* Portfolio Video */}
      {portfolioVideo && (
        <div>
          <h2 className="font-bold text-center text-[25px] mb-2 text-black">
            Portfolio Video
          </h2>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <button className="absolute inset-0 flex items-center justify-center">
              <Image
                src={portfolioVideo}
                width={1000}
                height={1000}
                alt="Service preview"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ThumbUpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
  </svg>
);

const ThumbDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5 10v-6a2 2 0 00-2-2h-2.5" />
  </svg>
);



// Components
const SearchBar = () => (
  <div className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Search reviews"
      className="border p-2 flex-grow"
    />
    <button className="bg-gray-800 text-white px-4 py-2">
      <SearchIcon />
    </button>
  </div>
);

const SortSelect = () => (
  <div className="flex items-center text-sm text-gray-600">
    <span>Sort by: </span>
    <select className="ml-2 border-none bg-transparent font-medium">
      <option>Most relevant</option>
    </select>
  </div>
);

const Rating = () => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <StarIcon key={star} />
    ))}
  </div>
);

const HelpfulButtons = () => (
  <div className="flex items-center gap-4">
    <span className="text-sm text-gray-600">Helpful?</span>
    <button className="text-sm text-gray-600 flex items-center gap-1">
      <ThumbUpIcon />
      Yes
    </button>
    <button className="text-sm text-gray-600 flex items-center gap-1">
      <ThumbDownIcon />
      No
    </button>
  </div>
);

const Avatar = ({ initial, size = 'md', gradient = false }) => {
  const sizeClasses = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  const bgClasses = gradient 
    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
    : 'bg-gray-300';

  return (
    <div className={`${sizeClasses} rounded-full ${bgClasses} flex items-center justify-center text-white`}>
      {initial}
    </div>
  );
};

const SellerResponse = ({ content }) => (
  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
    <div className="flex items-center gap-2 mb-2">
      <Avatar initial="S" size="sm" gradient />
      <span className="font-medium">Seller&apos;s Response</span>
    </div>
    <p className="text-gray-800">{content}</p>
  </div>
);

function App() {
  return (
    <div className="max-w-[800px]  mx-auto ">
     

      {/* Review Card */}
      <div className="border-t py-6">
        <div className="flex items-start gap-4">
          <Avatar initial="M" />

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-black">marvinachi</h3>
              <div className="flex items-center gap-1">
                <img 
                  src="https://flagcdn.com/w20/us.png" 
                  alt="US flag" 
                  className="w-4 h-3"
                />
                <span className="text-sm text-gray-600">United States</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Rating />
              <span className="text-sm text-gray-600">2 months ago</span>
            </div>

            <p className="text-gray-800 mb-4">
              Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. highly satisfied. thank you!
            </p>

            <HelpfulButtons />

            <SellerResponse content="Thank you so much 😊" />
          </div>
        </div>
      </div>
    </div>
  );
}



const GigMarketplaceLayout = () => {
  const gigDetails = {
    title: "I will do mobile app UI design professional and creative",
    author: {
      name: "Jahid Hassan",
    },
    rating: {
      score: 4.8,
      orders: 3,
    },
    description:
      "I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD, and Figma.\n\n" +
      "* Website User Experience and Interface (UI/UX) Design for all kinds of Professional and Personal websites.\n" +
      "* Mobile Application User Experience and Interface Design for all kinds of IOS/Android and Hybrid Mobile Applications.\n" +
      "* Wireframe Designs.",
    price: 305,
    additionalPricing: 20,
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const Dropdown = ({ isVisible, items }) => {
    if (!isVisible) return null;
    return (
      <div className="absolute mt-2 bg-white border rounded-lg shadow-lg">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  };

  const dropdownItems = [
    { label: "Overview", href: "/how-it-works/overview" },
    { label: "For Clients", href: "/how-it-works/clients" },
    { label: "For Freelancers", href: "/how-it-works/freelancers" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b py-4">
        <div className="max-w-7xl mx-auto py-5 px-4 h-16 flex items-center justify-between relative">
          {/* Logo */}
          <Image src="/logo.png" alt="Logo" width={100} height={100} />

          {/* Navigation & Buttons */}
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              {/* Dropdown for "How it Works" */}
              <div className="relative" onMouseLeave={closeDropdown}>
                <button
                  onClick={toggleDropdown}
                  className="text-gray-600 hover:text-gray-900 px-4 py-2 flex items-center"
                >
                  How it Works
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <Dropdown isVisible={dropdownVisible} items={dropdownItems} />
              </div>

              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/real-results">Real Results</NavLink>
            </nav>
            <button className="px-4 py-2 font-medium text-white bg-blue-900 rounded-[100px]">
              POST A JOB
            </button>
            <button className="px-4 py-2 font-medium text-white bg-teal-500 rounded-[100px]">
              FIND JOBS
            </button>

            <NavLink href="/login">LOG IN</NavLink>
            <NavLink href="/signup">SIGN UP</NavLink>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-10 flex items-center text-sm text-gray-500">
        <Link href="/" className="flex items-center hover:text-gray-900">
          <Home className="w-4 h-4 mr-2" />
          Gigs Marketplace
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link href="/websites" className="hover:text-gray-900">
          Websites, IT & Software
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span>Mobile & Web Application Design</span>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Left Sidebar - Gig Card */}
          <div className="col-span-1">
            <GigCard
              tabs={["Gig 1", "Gig 2", "Gig 3"]}
              gigTitle="Mobile App UI Design"
              profileName="Jahid Hasan"
              profileImage="/profile.jpeg"
              isVerified={true}
              description="I will do mobile app UI design professional and creative."
              rating={5.0}
              reviews={378}
              price={305}
              portfolioImage="/money.png"
              portfolioVideo="/youtube.png"
            />
          </div>

          {/* Center Column - Gallery & Details */}
          <div className="col-span-3 pl-[60px] ml-[40px]">
            {/* Image Gallery */}
            <div className="relative aspect-video  w-full mb-8 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/new.webp"
                width={1000}
                height={1000}
                alt="Service preview"
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
                <div className="rounded-full mx-auto bg-black/50 p-4 group-hover:scale-110 transition-transform">
                  <Play className="w-12 h-12 text-white" fill="white" />
                </div>
              </button>
            </div>

            {/* Gig Details Component */}
            <GigDetails gig={gigDetails} />
          </div>

          {/* Right Sidebar - Gig Card */}
          <div className="col-span-1">
            <GigCard
              tabs={["Gig 4", "Gig 5", "Gig 6"]}
              gigTitle="Website Design"
              profileName="Jahid Hasan"
              profileImage="/profile.jpeg"
              isVerified={true}
              description="I will design a professional and creative website UI/UX."
              rating={4.9}
              reviews={245}
              price={450}
              portfolioImage="/docker.png"
              portfolioVideo="/youtube.png"
            />

          </div>
           
        </div>
       
      </main>
      <App/>
      <App/>
    </div>
  );
};

export default GigMarketplaceLayout;
