const tourData = [
    {
        "id": "1",
        "name": "Dubai to Skardu Adventure",
        "category": "leisure",
        "cities": ["Skardu", "Kharmang", "Khaplu", "Shigar", "Skardu"],
        "duration": 5,
        "languages": "English, Arabic, Urdu, Persian",
        "rating": 4,
        "introduction": "Embark on an expedition from the bustling city of Dubai to the serene beauty of Skardu. Discover the magic of the mountains and immerse yourself in the rich culture of the region.",
        "description": "Experience the breathtaking landscapes of Skardu and its surrounding areas on this 5-day adventure. From the towering peaks of the Karakoram Range to the serene lakes and valleys, this trip promises an unforgettable journey.",
        "groupCount": 10,
        "img": "http://res.cloudinary.com/dpgelkpd4/image/upload/v1713347821/upload/vnexa3elapob6brqfuzu.webp",
        "price": {
            "singleperPerson": 1500,
            "groupof2-4perPerson": 1200,
            "groupof5-8perPerson": 1000,
            "groupof9-20perPerson": 900,
            "groupof>20perPerson": 800
        },
        "plan": [
            {
                "title": "Day 1: Arrival in Skardu",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Arrival and Check-in",
                        "type": "Accommodation",
                        "description": "Arrive in Skardu and check into your hotel. Relax and unwind after your journey."
                    },
                    {
                        "name": "Local Market Visit",
                        "type": "Sightseeing",
                        "description": "Explore the vibrant local markets of Skardu and immerse yourself in the culture."
                    },
                    {
                        "name": "Welcome Dinner",
                        "type": "Cuisine",
                        "description": "Enjoy a traditional welcome dinner featuring local delicacies."
                    }
                ]
            },
            {
                "title": "Day 2: Khaplu Valley Excursion",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Drive to Khaplu Valley",
                        "type": "Sightseeing",
                        "description": "Embark on a scenic drive to Khaplu Valley, known for its picturesque landscapes."
                    },
                    {
                        "name": "Khaplu Fort Visit",
                        "type": "Sightseeing",
                        "description": "Explore the historic Khaplu Fort and learn about its fascinating history."
                    },
                    {
                        "name": "Local Village Tour",
                        "type": "Sightseeing",
                        "description": "Discover the charm of local villages and interact with the friendly residents."
                    }
                ]
            },
            {
                "title": "Day 3: Shigar Valley Expedition",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Visit Shigar Fort",
                        "type": "Sightseeing",
                        "description": "Discover the ancient architecture of Shigar Fort and admire its majestic beauty."
                    },
                    {
                        "name": "River Rafting",
                        "type": "Adventure",
                        "description": "Experience the thrill of river rafting in the pristine waters of Shigar River."
                    },
                    {
                        "name": "Camping by the River",
                        "type": "Accommodation",
                        "description": "Spend the night camping under the stars by the tranquil Shigar River."
                    }
                ]
            },
            {
                "title": "Day 4: Skardu Lakes Tour",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Visit Upper Kachura Lake",
                        "type": "Sightseeing",
                        "description": "Explore the mesmerizing beauty of Upper Kachura Lake and enjoy boating."
                    },
                    {
                        "name": "Lower Kachura Lake Visit",
                        "type": "Sightseeing",
                        "description": "Discover the serene charm of Lower Kachura Lake and take in the scenic views."
                    },
                    {
                        "name": "Free Time for Relaxation",
                        "type": "Leisure",
                        "description": "Enjoy some free time to relax and soak in the natural beauty of Skardu."
                    }
                ]
            },
            {
                "title": "Day 5: Departure from Skardu",
                "nightStay": "",
                "activities": [
                    {
                        "name": "Check-out and Departure",
                        "type": "Logistics",
                        "description": "Check out from your hotel and transfer to the airport for your departure from Skardu."
                    }
                ]
            }
        ],
        "inclusions": ["Accommodation", "Transportation", "Meals (as per itinerary)", "Guided Tours", "Entrance Fees"],
        "exclusions": ["International Flights", "Personal Expenses", "Travel Insurance"]
    },
    {
        "id": "2",
        "name": "Skardu Wilderness Expedition",
        "category": "experiential",
        "duration": 6,
        "rating": 5,
        "cities": ["Skardu", "Shangrila", "Deosai National Park", "Sadpara Lake", "Skardu"],
        "languages": "English, Urdu",
        "img": "http://res.cloudinary.com/dpgelkpd4/image/upload/v1713347821/upload/vnexa3elapob6brqfuzu.webp",
        "introduction": "Discover the raw beauty of Skardu on this immersive experiential journey. Explore hidden gems, encounter local wildlife, and connect with nature like never before.",
        "groupCount": 8,
        "description": "Embark on an experiential journey through the rugged beauty of Skardu and its surrounding areas. From the mystical landscapes of Deosai National Park to the tranquility of Sadpara Lake, this trip offers a unique adventure.",
        "price": {
            "singleperPerson": 1800,
            "groupof2-4perPerson": 1500,
            "groupof5-8perPerson": 1300,
            "groupof9-20perPerson": 1200,
            "groupof>20perPerson": 1100
        },
        "plan": [
            {
                "title": "Day 1: Arrival in Skardu",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Arrival and Check-in",
                        "type": "Accommodation",
                        "description": "Arrive in Skardu and check into your hotel. Get briefed about the upcoming adventures."
                    },
                    {
                        "name": "Local Market Exploration",
                        "type": "Sightseeing",
                        "description": "Explore the bustling local markets of Skardu and experience the local culture."
                    },
                    {
                        "name": "Welcome Dinner",
                        "type": "Cuisine",
                        "description": "Enjoy a delicious welcome dinner with authentic regional dishes."
                    }
                ]
            },
            {
                "title": "Day 2: Deosai National Park Expedition",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Drive to Deosai National Park",
                        "type": "Sightseeing",
                        "description": "Embark on a scenic drive to Deosai National Park, known as the Land of Giants."
                    },
                    {
                        "name": "Wildlife Safari",
                        "type": "Adventure",
                        "description": "Embark on an exciting wildlife safari and spot rare species like the Himalayan brown bear."
                    },
                    {
                        "name": "Camping under the Stars",
                        "type": "Accommodation",
                        "description": "Set up camp in the heart of Deosai and experience the magic of sleeping under the stars."
                    }
                ]
            },
            {
                "title": "Day 3: Shangrila Resort Visit",
                "nightStay": "Shangrila",
                "activities": [
                    {
                        "name": "Visit Shangrila Resort",
                        "type": "Sightseeing",
                        "description": "Explore the enchanting Shangrila Resort, also known as the 'Heaven on Earth.'"
                    },
                    {
                        "name": "Boat Ride on Lower Kachura Lake",
                        "type": "Sightseeing",
                        "description": "Enjoy a serene boat ride on the crystal-clear waters of Lower Kachura Lake."
                    },
                    {
                        "name": "Relaxation Time at Shangrila",
                        "type": "Leisure",
                        "description": "Spend some leisure time at the resort and soak in the breathtaking views."
                    }
                ]
            },
            {
                "title": "Day 4: Sadpara Lake Exploration",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Visit Sadpara Lake",
                        "type": "Sightseeing",
                        "description": "Explore the picturesque Sadpara Lake and enjoy the tranquility of its surroundings."
                    },
                    {
                        "name": "Hiking Expedition",
                        "type": "Adventure",
                        "description": "Embark on a scenic hike around Sadpara Lake and immerse yourself in nature."
                    },
                    {
                        "name": "Campfire and Stargazing",
                        "type": "Leisure",
                        "description": "Gather around the campfire in the evening and indulge in stargazing."
                    }
                ]
            },
            {
                "title": "Day 5: Skardu City Tour",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Visit Skardu Fort",
                        "type": "Sightseeing",
                        "description": "Explore the historic Skardu Fort and learn about its significance in the region."
                    },
                    {
                        "name": "Local Cultural Performance",
                        "type": "Cultural",
                        "description": "Experience a traditional cultural performance showcasing the vibrant heritage of Skardu."
                    },
                    {
                        "name": "Farewell Dinner",
                        "type": "Cuisine",
                        "description": "Enjoy a farewell dinner with your fellow travelers, celebrating the end of a memorable journey."
                    }
                ]
            },
            {
                "title": "Day 6: Departure from Skardu",
                "nightStay": "",
                "activities": [
                    {
                        "name": "Check-out and Departure",
                        "type": "Logistics",
                        "description": "Check out from your hotel and transfer to the airport for your departure from Skardu."
                    }
                ]
            }
        ],
        "inclusions": ["Accommodation", "Transportation", "Meals (as per itinerary)", "Guided Tours", "Entrance Fees"],
        "exclusions": ["International Flights", "Personal Expenses", "Travel Insurance"]
    },
    {
        "id": "3",
        "name": "5-Day Tour of Baltistan, Pakistan",
        "category": "leisure",
        "cities": ["Skardu", "Kharmang", "Khaplu", "Shigar", "Skardu"],
        "duration": 5,
        "languages": "English, Urdu",
        "rating": 5,
        "introduction": "This 5-day itinerary is designed for travelers seeking a taste of Baltistan's breathtaking scenery, rich history, and unique culture.",
        "description": "Experience the breathtaking landscapes of Skardu and its surrounding areas on this 5-day adventure. From the majestic Upper Kachura Lake to the cascading Manthokha Waterfall and the historic Khaplu Valley, this trip promises an unforgettable journey.",
        "groupCount": 10,
        "img": "https://example.com/baltistan_tour_image.jpg",
        "price": {
            "singleperPerson": 1500,
            "groupof2-4perPerson": 1200,
            "groupof5-8perPerson": 1000,
            "groupof9-20perPerson": 900,
            "groupof>20perPerson": 800
        },
        "plan": [
            {
                "title": "Day 1: Welcome in Skardu Baltistan",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Arrival at Skardu Airport",
                        "type": "Logistics",
                        "description": "Upon arrival at Skardu Airport, you'll be warmly welcomed and transferred to Shangri-La Resort."
                    },
                    {
                        "name": "Exploring Upper Kachura Lake",
                        "type": "Sightseeing",
                        "description": "Explore the breathtaking beauty of Upper Kachura Lake for 2 hours, followed by a short hike to the lake."
                    },
                    {
                        "name": "Dinner and Overnight Stay",
                        "type": "Accommodation",
                        "description": "Return to Shangri-La Resort for a relaxing dinner and overnight stay."
                    }
                ]
            },
            {
                "title": "Day 2: Kachura to Manthokha Waterfall",
                "nightStay": "Khaplu",
                "activities": [
                    {
                        "name": "Scenic Drive to Manthokha Waterfall",
                        "type": "Transportation",
                        "description": "Enjoy a scenic drive from Kachura Valley to Manthokha Waterfall, passing through charming villages along the Skardu-Kharmang Road."
                    },
                    {
                        "name": "Visit to Manthokha Waterfall",
                        "type": "Sightseeing",
                        "description": "Arrive at the majestic Manthokha Waterfall and marvel at its cascading beauty."
                    },
                    {
                        "name": "Overnight Stay in Khaplu",
                        "type": "Accommodation",
                        "description": "Head to Khaplu Valley for an overnight stay."
                    }
                ]
            },
            {
                "title": "Day 3: Exploring Khaplu Valley",
                "nightStay": "Khaplu",
                "activities": [
                    {
                        "name": "Visit to Yabgo Khar",
                        "type": "Sightseeing",
                        "description": "Take a walk through Khaplu's charming streets to Yabgo Khar, the ancient palace, and explore its rich history and traditions."
                    },
                    {
                        "name": "Exploring Chaqchan Mosque",
                        "type": "Sightseeing",
                        "description": "Visit the historic Chaqchan Mosque to immerse yourself in its architecture and cultural significance."
                    },
                    {
                        "name": "Experience at Saling Fish Farm",
                        "type": "Experience",
                        "description": "Head to Saling Fish Farm for a delightful fishing experience and enjoy a delicious lunch."
                    }
                ]
            },
            {
                "title": "Day 4: Shigar Valley",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Exploring Fong Khar (Shigar Serena Palace)",
                        "type": "Sightseeing",
                        "description": "Explore the UNESCO-preserved historical site of Fong Khar, also known as Shigar Serena Palace."
                    },
                    {
                        "name": "Visit to Amburik Mosque",
                        "type": "Sightseeing",
                        "description": "Explore the unique architecture and cultural significance of Amburik Mosque."
                    },
                    {
                        "name": "Exploring Hashupi Bagh",
                        "type": "Sightseeing",
                        "description": "Visit Hashupi Bagh, the country's largest cherry garden, and enjoy the vibrant natural surroundings."
                    },
                    {
                        "name": " Choose Evening Adventure",
                        "type": "Sightseeing",
                        "options": [
                            {
                                "name": "Hot Spring",
                                "desc": "Take a 2-hour drive to the Hot Spring, a natural fountain known for its therapeutic benefits. Relax and unwind before returning to Shigar Center for an overnight stay."
                            },
                            {
                                "name": "Alchuri Village",
                                "desc": "Dedicate 2 hours to exploring Alchuri Village and interacting with the local people, gaining insights into their unique culture. Conclude your day with a scenic drive back to Skardu Valley for an overnight stay."
                            }
                        ],
                        "description": ""
                    }
                ]
            },
            {
                "title": "Day 5: Farewell & Departure",
                "nightStay": "",
                "activities": [
                    {
                        "name": "Transfer to Airport",
                        "type": "Logistics",
                        "description": "Depending on your location on Day 4, transfer to either Shigar Valley or Skardu Valley for your departing flight."
                    }
                ]
            }
        ],
        "inclusions": ["Luxury Stay", "Breakfast", "StoryTelling Session", "Local Experienced Driver cum Guide", "Airport to Airport Pick & Drop", "Traditional Meal at Local Home", "ComfortableTransport (Land Cruiser TZ/TX or Jeep Traditional/Modified or Car Premio/GLI/XLI/G)", "Entry Tickets", "Parking Fee", "All fuel"],
        "exclusions": ["Expenses due to flight cancellation", "Medical Charges", "Airline Ticket", "Lunch and Dinner", "Anything Not Mentioned in the “Inclusions”."]
    },
    {
        "id": "4",
        "name": "5-Day Experiential Tour of Skardu, Pakistan",
        "category": "experiential",
        "cities": ["Skardu", "Khaplu"],
        "duration": 5,
        "languages": "English, Urdu",
        "rating": 5,
        "introduction": "This 5-day itinerary is designed to give you an unforgettable experience of Skardu, Pakistan, focusing on experiential tourism. You'll explore stunning natural beauty by participating in exciting activities and immersing yourself in the local culture.",
        "description": "Experience the breathtaking landscapes and rich culture of Skardu on this 5-day experiential tour. From exploring historic forts and hidden villages to trekking through scenic trails and camping under the starry sky, this trip promises an unforgettable adventure.",
        "groupCount": 8,
        "img": "https://example.com/skardu_experiential_tour_image.jpg",
        "price": {
            "singleperPerson": 1800,
            "groupof2-4perPerson": 1500,
            "groupof5-8perPerson": 1300,
            "groupof9-20perPerson": 1200,
            "groupof>20perPerson": 1100
        },
        "plan": [
            {
                "title": "Day 1: Arrival & Shangri-La Valley",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Arrival at Skardu Airport",
                        "type": "Logistics",
                        "description": "Upon arrival at Skardu Airport, you'll be met and transferred to Shangri-La Resort."
                    },
                    {
                        "name": "Relaxation at Shangri-La Resort",
                        "type": "Leisure",
                        "description": "Enjoy 2 hours of relaxation at the resort, taking in the breathtaking views of Shangri-La Lake."
                    },
                    {
                        "name": "Exploring Upper Kachura Lake",
                        "type": "Sightseeing",
                        "description": "Embark on a short drive to Upper Kachura Lake and spend a few hours exploring the lake by boat, fishing, or simply soaking up the scenery."
                    },
                    {
                        "name": "Dinner and Overnight Stay",
                        "type": "Accommodation",
                        "description": "Return to Shangri-La Resort for dinner and an overnight stay."
                    }
                ]
            },
            {
                "title": "Day 2: Kharfocho Fort & Nangxoq Village",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Visit to Kharfocho Fort",
                        "type": "Sightseeing",
                        "description": "Head out for a trek to Kharfocho Fort, learning about its rich history along the way."
                    },
                    {
                        "name": "Trek to Nangxoq Village",
                        "type": "Adventure",
                        "description": "Start a trek along the Nangxoq Trail to reach the hidden organic valley of Nangxoq Village."
                    },
                    {
                        "name": "Dinner and Overnight Stay",
                        "type": "Accommodation",
                        "description": "Return to Skardu City for dinner and an overnight stay."
                    }
                ]
            },
            {
                "title": "Day 3: Khaplu or Optional Trekking",
                "nightStay": "Kharfaq or Khaplu",
                "activities": [
                    {
                        "name": "Option 1: Kharfaq Lake Trek",
                        "type": "Adventure",
                        "description": "Take a pre-dawn departure for a challenging trek to Kharfaq Lake,Start a challenging 6-hour trek on a semi-marked trail to reach the beautiful Kharfaq Lake. Enjoy lunch amidst the breathtaking scene. Set up camp by the lake and spend the afternoon fishing.  followed by camping under the starry sky."
                    },
                    {
                        "name": "Option 2: Alternative Trekking Routes",
                        "type": "Adventure",
                        "description": "Explore alternative trekking routes for experienced trekkers seeking longer adventures, consider options like the Thaly to Shigar trek (Snowy Mountain), Ghanche Nala to Ghandus Lake, Basho Valley Trek, Shigarthang Valley Trek, Deep-Deosai Trek or other technical routes requiring acclimatization and expertise."
                    }
                ]
            },
            {
                "title": "Day 4: Kharfaq Lake to Skardu: Exploration",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Exploration of Skardu City",
                        "type": "Sightseeing",
                        "description": "Spend the day exploring Skardu City at your leisure, visiting historical sites and shopping for local handicrafts."
                    }
                ]
            },
            {
                "title": "Day 5: Departure",
                "nightStay": "",
                "activities": [
                    {
                        "name": "Transfer to Airport",
                        "type": "Logistics",
                        "description": "Bid farewell to Skardu as you're transferred to the airport for your departing flight."
                    }
                ]
            }
        ],
        "inclusions": ["Luxury Stay", "Breakfast", "StoryTelling Session", "Local Experienced Driver cum Guide", "Airport to Airport Pick & Drop", "Traditional Meal at Local Home", "ComfortableTransport (Land Cruiser TZ/TX or Jeep Traditional/Modified or Car Premio/GLI/XLI/G)", "Entry Tickets", "Parking Fee", "All fuel"],
        "exclusions": ["Expenses due to flight cancellation", "Medical Charges", "Airline Ticket", "Lunch and Dinner", "Anything Not Mentioned in the “Inclusions”."]
    },
    {
        "id": "5",
        "name": "4-Day Cultural Tour of Skardu & Khaplu",
        "category": "cultural",
        "cities": ["Skardu", "Shigar", "Khaplu"],
        "duration": 4,
        "languages": "English, Urdu",
        "rating": 4,
        "introduction": "This 4-day itinerary delves into the rich history, culture, and adventurous landscapes of Skardu, Shigar, and Khaplu in Pakistan. Prepare to be captivated by stunning scenery, unique architecture, and exciting outdoor activities.",
        "description": "Embark on a cultural journey through Skardu and Khaplu, immersing yourself in the region's rich heritage, exploring historic sites, and experiencing traditional artistry. From the majestic Amburik Mosque to the scenic vistas of Sogha Lake and the historical Khaplu Palace, this tour promises an unforgettable cultural experience.",
        "groupCount": 8,
        "img": "https://example.com/cultural_tour_image.jpg",
        "price": {
            "singleperPerson": 2000,
            "groupof2-4perPerson": 1700,
            "groupof5-8perPerson": 1500,
            "groupof9-20perPerson": 1400,
            "groupof>20perPerson": 1300
        },
        "plan": [
            {
                "title": "Day 1: Unveiling History & Culture",
                "nightStay": "Shigar",
                "activities": [
                    {
                        "name": "Arrival at Skardu Airport",
                        "type": "Logistics",
                        "description": "Begin your journey by arriving at Skardu Airport."
                    },
                    {
                        "name": "Cultural Encounter at Amburik Mosque",
                        "type": "Sightseeing",
                        "description": "Embark on a cultural encounter at the Amburik Mosque. Admire its unique architecture, traditional artistry, and historical significance."
                    },
                    {
                        "name": "Dinner and Overnight Stay",
                        "type": "Accommodation",
                        "description": "Spend the night at the atmospheric Fong Khar."
                    }
                ]
            },
            {
                "title": "Day 2: Artisanship, Nature, & Heritage",
                "nightStay": "Khaplu",
                "activities": [
                    {
                        "name": "Visit to Bara Handicraft Center",
                        "type": "Sightseeing",
                        "description": "Discover and purchase exquisite local crafts at the Bara Handicraft Center."
                    },
                    {
                        "name": "Exploring Sogha Lake",
                        "type": "Sightseeing",
                        "description": "Enjoy activities like camping, fishing, and exploring the fish farm & restaurant at Sogha Lake."
                    },
                    {
                        "name": "Exploring Khaplu Palace & Chaqchan Mosque",
                        "type": "Sightseeing",
                        "description": "Immerse yourself in history at Khaplu Palace and admire the unique architectural style of Chaqchan Mosque."
                    },
                    {
                        "name": "Trek to Thoqsi Khar",
                        "type": "Adventure",
                        "description": "Embark on a trek to Thoqsi Khar, a hidden gem showcasing unparalleled architecture."
                    },
                    {
                        "name": "Dinner and Overnight Stay",
                        "type": "Accommodation",
                        "description": "Rest comfortably for the night in Khaplu."
                    }
                ]
            },
            {
                "title": "Day 3: Exploring Diverse Landscapes",
                "nightStay": "Skardu",
                "activities": [
                    {
                        "name": "Journey to Sarfaranga Cold Desert",
                        "type": "Sightseeing",
                        "description": "Prepare for a thrilling day as you journey to the vast Sarfaranga Cold Desert. Enjoy a variety of adrenaline-pumping activities."
                    },
                    {
                        "name": "Exploring Buddha Rock & Kharfocho Fort",
                        "type": "Sightseeing",
                        "description": "Explore the ancient Buddhist scriptures carved into the rock at Buddha Rock and ascend to Kharfocho Fort for its fascinating past."
                    },
                    {
                        "name": "Exploring Nangxoq Village",
                        "type": "Adventure",
                        "description": "Challenge yourself on the narrow walking trails of Nangxoq Village, experience traditional boating, and savor traditional food."
                    },
                    {
                        "name": "Dinner and Overnight Stay",
                        "type": "Accommodation",
                        "description": "Enjoy a comfortable night's stay in Skardu."
                    }
                ]
            },
            {
                "title": "Day 4: Farewell & Departure",
                "nightStay": "",
                "activities": [
                    {
                        "name": "Transfer to Airport",
                        "type": "Logistics",
                        "description": "Bid farewell to Skardu as you enjoy a leisurely breakfast at your hotel and transfer to the airport for your departing flight."
                    }
                ]
            }
        ],
        "inclusions": ["Luxury Stay", "Breakfast", "StoryTelling Session", "Local Experienced Driver cum Guide", "Airport to Airport Pick & Drop", "Traditional Meal at Local Home", "Comfortable Transport (Land Cruiser TZ/TX or Jeep Traditional/Modified or Car Premio/GLI/XLI/G)", "Entry Tickets", "Parking Fee", "All fuel"],
        "exclusions": ["Expenses due to flight cancellation", "Medical Charges", "Airline Ticket", "Lunch and Dinner", "Anything Not Mentioned in the Inclusions"]
    },
    {
        "id": "6",
        "name": "Business Tour to Skardu",
        "category": "business",
        "cities": ["Skardu"],
        "duration": "",
        "languages": "English, Urdu",
        "rating": 0,
        "introduction": "Our comprehensive business tour package provides everything you need for a successful and productive business trip. Whether you're hosting any type of meeting, conference, or business exhibitions, Rinor will take care of all arrangements, allowing you to concentrate on achieving your objectives.",
        "description": "Join our Business Tour to Skardu for a smooth and successful trip. Perfect for meetings, conferences, or exhibitions, we handle all the details so you can focus on your goals. From picking the right venue to comfy accommodations, we've got you covered. Our team will assist you every step of the way, from airport pickups to on-site support. Plus, take a break with optional sightseeing to explore Skardu's beauty and history. Make your business trip hassle-free with us!",
        "groupCount": 0,
        "img": "",
        "price": {},
        "plan": [],
        "inclusions": [
            "Venue Selection",
            "Accommodation",
            "Meeting/Conference Hall",
            "Logistics Support",
            "Catering Services",
            "Supporting Staff",
            "On-site Assistance",
            "Sightseeing and Cultural Experiences"
        ],
        "exclusions": []
    }

]
export { tourData };