/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  ChevronRight,
  Home,
  ChevronDown,
  Star,
  ThumbsUp,
  ThumbsDown,
  Monitor,
  PenTool,
  Figma,
  Layout,
  Smartphone,
  Search,
} from "lucide-react";

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium"
  >
    {children}
  </Link>
);

const VideoSection = ({ title, thumbnailSrc, duration }) => (
  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
    <Image src={thumbnailSrc} alt={title} fill className="object-cover" />
    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30">
      <button className="rounded-full bg-black/50 p-4 hover:scale-110 transition-transform">
        <Play className="w-8 h-8 text-white" fill="white" />
      </button>
    </div>
    <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
      {duration}
    </div>
  </div>
);

const GigCard = ({
  gigNumber,
  profileImage,
  title,
  authorName,
  isVerified,
  rating,
  price,
}) => {
  return (
    <div className="w-full border rounded-lg shadow-sm overflow-hidden bg-white">
      <div className="flex bg-gray-50 border-b">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`flex-1 py-2 text-sm font-medium text-center border-r last:border-r-0 
              ${
                gigNumber === num
                  ? "bg-white text-black"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
          >
            Gig {num}
          </button>
        ))}
      </div>

      <div className="p-4">
        <VideoSection
          title="Gigs Video"
          thumbnailSrc="/gig1.png"
          duration="1:23"
        />

        <div className="flex items-center gap-3 mb-4">
          <Image
            src={profileImage}
            alt={authorName}
            width={38}
            height={38}
            className="rounded-full"
          />
          <div>
            <h3 className="font-medium text-black mb-1">{authorName}</h3>
            {isVerified && (
              <div className="flex items-center gap-1">
                <Image src="/tick.svg" alt="Verified" width={16} height={16} />
                <span className="text-xs text-[#3897F0]">Verified</span>
              </div>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-700 mb-4">{title}</p>

        <div className="flex justify-between items-end mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-500">{rating}</span>
            <span className="text-xs text-gray-400">({378})</span>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">STARTING AT</p>
            <p className="text-lg font-semibold text-gray-900">${price}</p>
          </div>
        </div>

        <button className="w-full bg-[#009C9A] hover:bg-teal-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
          <Image src="/cart.svg" alt="Cart" width={16} height={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

{
  /* Search Bar */
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeliveryImages, setShowDeliveryImages] = useState(false);
  const [sortBy, setSortBy] = useState("most_relevant");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    console.log("Show delivery images:", showDeliveryImages);
    console.log("Sort by:", sortBy);
  };

  return (
    <div className="space-y-4 w-[300px] max-w-md">
      <form onSubmit={handleSearch} className="flex w-full">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reviews"
            className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-800 text-white rounded-r hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      <div className="space-y-3">
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 text-[#404145] rounded px-3 py-1 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="most_relevant">Most relevant</option>
              <option value="newest">Newest</option>
              <option value="highest_rated">Highest rated</option>
              <option value="lowest_rated">Lowest rated</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showDeliveryImages}
            onChange={(e) => setShowDeliveryImages(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-600">Delivery images (558)</span>
        </label>
      </div>
    </div>
  );
};

const ReviewStar = ({ filled = true }) => (
  <Star
    className={`w-4 h-4 ${
      filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
    }`}
  />
);
const GigDetails = () => {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1">
          <h1 className="text-2xl mb-4 font-semibold text-black">
            I will do mobile app UI design professional and creative
          </h1>
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/profile.jpeg"
              alt="Jahid Hassan"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-black">Jahid Hassan</span>
            <Image src="/tick.svg" alt="Verified" width={16} height={16} />
            <span className="text-xs text-[#3897F0]">Verified</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-500">4.9 (718)</span>
            </div>
            <span className="text-gray-500 text-sm">3 Orders in Queue</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          App development expert about UI/UX/Prototype design with 5+ years
          experience. I have an early start with a keen interest in Website and
          Mobile Application User Interface. I can create high-quality and
          exceptionally pleasing designs in a user-humanized view. Check out the
          portfolio section of my profile to see samples of my work and feel
          free to discuss your designing needs. I mostly use Adobe Photoshop,
          Illustrator, XD, and Figma.
        </p>
      </div>

      <div className="space-y-8 mb-8">
        {/* Skills Section */}
        <div>
          <h2 className="text-[30px] font-semibold mb-4 text-black">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center px-3 py-1 bg-gray-100 text-[#578CDA] rounded-full text-sm">
              <Monitor className="w-4 h-4 mr-2" />
              User Interface Design
            </span>
            <span className="flex items-center px-3 py-1 bg-gray-100 text-[#578CDA] rounded-full text-sm">
              <PenTool className="w-4 h-4 mr-2" />
              UI
            </span>
            <span className="flex items-center px-3 py-1 bg-gray-100 text-[#578CDA] rounded-full text-sm">
              <Figma className="w-4 h-4 mr-2" />
              Figma
            </span>
            <span className="flex items-center px-3 py-1 bg-gray-100 text-[#578CDA] rounded-full text-sm">
              <Layout className="w-4 h-4 mr-2" />
              Web Design
            </span>
            <span className="flex items-center px-3 py-1 bg-gray-100 text-[#578CDA] rounded-full text-sm">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile App
            </span>
          </div>
        </div>

        {/* Portfolio Section */}
        <div>
          <h2 className="text-[30px] font-semibold mb-4 text-black">
            Portfolio
          </h2>
          <button className="px-6 py-2 bg-red-600 text-white rounded-[40px] font-medium flex justify-between items-center">
            View Portfolio
            <Image
              className="ml-2"
              src="/arrow.svg"
              height={16}
              width={16}
              alt="Arrow Right"
            />
          </button>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-4 items-start">
            {/* Product Type */}
            <div className="text-center">
              <h2 className="text-[30px] font-semibold mb-2 text-black">
                Product Type
              </h2>
              <p className="text-lg text-[#000000]">Mobile App</p>
            </div>

            {/* Pricing */}
            <div className="text-center">
              <h2 className="text-[30px] font-semibold mb-2 text-black">
                Pricing
              </h2>
              <p className="text-lg text-[#000000]">$330</p>
            </div>

            {/* Additional */}
            <div className="text-center">
              <h2 className="text-[20px] font-semibold mb-2 text-black">
                Additional
              </h2>
              <p className="text-lg text-[#000000]">20$ / Hour</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mb-6">
          <h2 className="text-[30px] font-semibold text-[#404145]">Reviews</h2>
          <div className="flex items-center justify-between mt-1">
            <h3 className="text-medium text-[#404145]">
              902 Reviews for this Gig
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <ReviewStar key={i} />
                  ))}
              </div>
              <span className="text-sm font-medium text-[#FFB33E]">4.9</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Review Ratings */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="w-16 text-sm text-[#446EE7]">
                  {rating} Stars
                </span>
                <div className="flex-1 bg-gray-200 h-2 rounded-full">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{
                      width: rating === 5 ? "92%" : rating === 4 ? "6%" : "2%",
                    }}
                  />
                </div>
                <span className="w-12 text-sm text-[#446EE7] text-right">
                  {rating === 5 ? "92%" : rating === 4 ? "6%" : "2%"}
                </span>
              </div>
            ))}
          </div>

          {/* Review Details */}
          <div className="space-y-4">
            <p className="text-medium font-semibold text-black">
              Rating Breakdown
            </p>
            <div>
              <div className="flex items-center justify-between ">
                <span className="text-sm text-gray-600">Communication</span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-[]" />
                  <span className="font-medium text-[#FFB33E]">4.9</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">
                  Service as Described
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-[]" />
                  <span className="font-medium text-[#FFB33E]">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SearchBar />

        <hr className="my-10 border-gray-300" />

        {/* Review Content */}
        <div className="space-y-6 mt-10">
          <div className="border-b pb-6">
            <div className="flex gap-4">
              <Image
                src="/user.png"
                alt="User"
                width={40}
                height={40}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black font-semibold"
              />
              <div className="flex-1">
                <div className="flex flex-col mb-2">
                  <h3 className="font-medium text-black">marvinachi</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Image
                        src="/flag.svg"
                        alt="BD"
                        width={16}
                        height={16}
                        className="rounded-sm"
                      />
                      Bangladesh
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-black">5</span>
                    </div>
                    <span>2 months ago</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Great work! I wanted a video to showcase my fitness app and
                  the designer delivered an excellent job and on time. Highly
                  satisfied. Thank you!
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <span className="text-sm">Helpful?</span>
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">Yes</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm">No</span>
                  </button>
                </div>
                {/* Seller's Response */}
                <div className="mt-4 bg-gray-50 p-4 rounded-lg flex items-start gap-4">
                  {/* Seller's Image */}
                  <Image
                    src="/profile.jpeg" // Replace with the actual image URL
                    alt="Seller's Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />

                  {/* Seller's Response Text */}
                  <div>
                    <h4 className="font-medium mb-2 text-black">
                      Seller&apos;s Response
                    </h4>
                    <p className="text-gray-700">Thank you so much! 😊</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Content */}
        <div className="space-y-6 mt-6">
          <div className="border-b pb-6">
            <div className="flex gap-4">
              <Image
                src="/user.png"
                alt="User"
                width={40}
                height={40}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black font-semibold"
              />
              <div className="flex-1">
                <div className="flex flex-col mb-2">
                  <h3 className="font-medium text-black">marvinachi</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Image
                        src="/flag.svg"
                        alt="BD"
                        width={16}
                        height={16}
                        className="rounded-sm"
                      />
                      Bangladesh
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-black">5</span>
                    </div>
                    <span>2 months ago</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Great work! I wanted a video to showcase my fitness app and
                  the designer delivered an excellent job and on time. Highly
                  satisfied. Thank you!
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-500  hover:text-gray-700">
                    <span className="text-sm">Helpful?</span>
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">Yes</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <ThumbsDown className="w-4 h-4" />
                    <span className="text-sm">No</span>
                  </button>
                </div>
                {/* Seller's Response */}
                <div className="mt-4 bg-gray-50 p-4 rounded-lg flex items-start gap-4">
                  {/* Seller's Image */}
                  <Image
                    src="/profile.jpeg" // Replace with the actual image URL
                    alt="Seller's Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />

                  {/* Seller's Response Text */}
                  <div>
                    <h4 className="font-medium mb-2 text-black">
                      Seller&apos;s Response
                    </h4>
                    <p className="text-gray-700">Thank you so much! 😊</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GigMarketplace = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Image src="/logo.png" alt="Logo" width={100} height={40} />

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
                >
                  How it Works
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/results">Real Results</NavLink>
            </nav>

            <div className="flex items-center gap-3">
              <button className="px-6 py-2 bg-[#024570] text-white rounded-full font-medium">
                POST A JOB
              </button>
              <button className="px-6 py-2 bg-[#009C9A] text-white rounded-full font-medium">
                FIND JOBS
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">
                LOG IN
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm  text-[#87878A] mb-8">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-gray-900 "
          >
            <Image src="/home.svg" alt="Logo" width={20} height={20} />
            <span className="ml-1 text-[18px]">Gigs Marketplace</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/web" className="hover:text-gray-900 text-[18px]">
            Websites, IT & Software
          </Link>
          <ChevronRight className="w-4 h-4 " />
          <span className="text-[18px]">Mobile & Web Application Design</span>
        </div>

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-1">
            <GigCard
              gigNumber={1}
              profileImage="/profile.jpeg"
              title="I will do mobile app UI design professional and creative"
              authorName="Jahid Hassan"
              isVerified={true}
              rating={4.9}
              price={305}
            />
            <div>
              <h3 className="font-bold text-lg mt-2 mb-2 text-center text-black">
                Portfolio Video
              </h3>
              <VideoSection
                title="Gigs Video"
                thumbnailSrc="/money.png"
                duration="1:45"
              />
            </div>
          </div>

          <div className="col-span-3">
            <div className="aspect-video relative rounded-lg overflow-hidden mb-8 bg-gray-100">
              <Image
                src="/new.webp"
                alt="Main preview"
                fill
                className="object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 group">
                <div className="rounded-full bg-black/50 p-4 group-hover:scale-110 transition-transform">
                  <Play className="w-12 h-12 text-white" fill="white" />
                </div>
              </button>
            </div>

            <GigDetails />
          </div>

          <div className="col-span-1">
            <div className="top-6">
              <GigCard
                gigNumber={2}
                profileImage="/profile.jpeg"
                title="I will design professional website UI/UX"
                authorName="Jahid Hassan"
                isVerified={true}
                rating={4.8}
                price={450}
              />
              <div>
                <h3 className="font-bold text-lg mt-2 mb-2 text-center text-black">
                  Gigs Video
                </h3>
                <VideoSection
                  title="Gigs Video"
                  thumbnailSrc="/new.webp"
                  duration="1:45"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-black">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Graphics & Design</li>
                <li>Digital Marketing</li>
                <li>Writing & Translation</li>
                <li>Video & Animation</li>
                <li>Music & Audio</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-black">About</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Careers</li>
                <li>Press & News</li>
                <li>Partnerships</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-black">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Help & Support</li>
                <li>Trust & Safety</li>
                <li>Selling on Platform</li>
                <li>Buying on Platform</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-black">Community</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Events</li>
                <li>Blog</li>
                <li>Forum</li>
                <li>Community Standards</li>
                <li>Podcast</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 All rights reserved</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Terms
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Privacy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GigMarketplace;
