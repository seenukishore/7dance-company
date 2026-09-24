from database import SessionLocal
import models

db = SessionLocal()

# ============================================================
# COURSES (verbatim descriptions from client)
# ============================================================
courses = [
    {
        "name": "Western Dance",
        "category": "Western",
        "description": "Learn energetic Western dance styles with a focus on choreography, musicality, coordination, flexibility, and stage performance.",
        "level": "All Levels",
        "duration": "3 Months",
        "frequency": "3 days/week",
        "features": "Choreography|Musicality|Coordination|Flexibility",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": True,
        "tag": "Most Popular",
    },
    {
        "name": "Hip Hop",
        "category": "Western",
        "description": "A high-energy program focusing on rhythm, grooves, foundations, musicality, and powerful choreography inspired by Hip Hop culture.",
        "level": "Intermediate",
        "duration": "2 Months",
        "frequency": "3 days/week",
        "features": "Rhythm & Grooves|Foundations|Musicality|Powerful Choreography",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "Trending",
    },
    {
        "name": "Locking & Popping",
        "category": "Western",
        "description": "Learn the foundations of these iconic street dance styles, including sharp movements, grooves, isolations, hits, and musical expression.",
        "level": "Intermediate",
        "duration": "2 Months",
        "frequency": "3 days/week",
        "features": "Sharp Movements|Isolations|Hits|Musical Expression",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "",
    },
    {
        "name": "Breaking",
        "category": "Western",
        "description": "Master the athletic, high-impact world of breaking — footwork, power moves, freezes, and floor work, built on strength and control.",
        "level": "Intermediate",
        "duration": "3 Months",
        "frequency": "3 days/week",
        "features": "Footwork|Power Moves|Freezes|Floor Work",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "",
    },
    {
        "name": "Bollywood",
        "category": "Western",
        "description": "Experience the vibrant world of Bollywood dance through expressive choreography, energetic movements, Indian cinematic music, and performance techniques.",
        "level": "Beginner",
        "duration": "3 Months",
        "frequency": "2 days/week",
        "features": "Expressive Choreography|Cinematic Music|Performance Techniques|Group Routines",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "",
    },
    {
        "name": "Freestyle",
        "category": "Western",
        "description": "Explore your individuality through movement. Freestyle training helps dancers develop musicality, creativity, improvisation, and confidence.",
        "level": "All Levels",
        "duration": "3 Months",
        "frequency": "3 days/week",
        "features": "Musicality|Creativity|Improvisation|Confidence Building",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "",
    },
    {
        "name": "Zumba",
        "category": "Zumba",
        "description": "A fun and energetic fitness program combining dance and workout movements with upbeat music. Perfect for improving stamina, coordination, and overall fitness.",
        "level": "All Levels",
        "duration": "Ongoing",
        "frequency": "3 days/week",
        "features": "Stamina Building|Coordination|Fitness Focus|Upbeat Music",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "",
    },
    {
        "name": "Yoga",
        "category": "Yoga",
        "description": "A calming, disciplined practice focused on flexibility, breath control, posture, and mental clarity — a strong complement to any dance training.",
        "level": "All Levels",
        "duration": "Ongoing",
        "frequency": "2 days/week",
        "features": "Flexibility|Breath Control|Posture|Mindfulness",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "",
    },
    {
        "name": "Bharatanatyam",
        "category": "Classical",
        "description": "Train in one of India's oldest classical dance forms, focusing on precise footwork, expressive storytelling (abhinaya), and traditional technique.",
        "level": "Beginner to Advanced",
        "duration": "6 Months",
        "frequency": "2 days/week",
        "features": "Footwork (Adavus)|Abhinaya (Expression)|Traditional Technique|Storytelling",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "Traditional",
    },
    {
        "name": "Competition Training",
        "category": "Professional",
        "description": "Specialized training for dancers who want to participate in competitions, with a focus on choreography, synchronization, technique, stage presence, and performance quality.",
        "level": "Advanced",
        "duration": "6 Months",
        "frequency": "4 days/week",
        "features": "Synchronization|Advanced Technique|Stage Presence|Competition Prep",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "",
    },
    {
        "name": "Performance & Choreography",
        "category": "Professional",
        "description": "Training designed to prepare dancers for stage performances, events, shows, and special occasions, with emphasis on expression, confidence, and presentation.",
        "level": "All Levels",
        "duration": "Ongoing",
        "frequency": "2 days/week",
        "features": "Stage Preparation|Expression|Confidence|Presentation",
        "price_range": "₹1,200 - ₹2,000/month",
        "image_url": "",
        "is_popular": False,
        "tag": "",
    },
]

for c in courses:
    db.add(models.Course(**c))

# ============================================================
# INSTRUCTORS
# ============================================================
instructors = [
    {
        "name": "Seven Sir",
        "role": "Lead Choreographer & Founder",
        "bio": "Founder of 7 Dance Company, leading choreographer with collaborations across film and television, including work with Sandy Master, Raghava Lawrence Master, and choreography for Kanchana 4.",
        "specialties": "Choreography,Competition Training,Performance Direction",
        "image_url": "",
        "instagram_url": "https://www.instagram.com/__7dc__?igsi=MXB6bHp6aWd6amg2MQ==",
        "display_order": 1,
    },
    {
        "name": "Shreya Mam",
        "role": "Instructor & Choreographer",
        "bio": "Dedicated instructor and choreographer at 7 Dance Company, known for a supportive teaching style and strong technical foundation training.",
        "specialties": "Bollywood,Freestyle,Student Training",
        "image_url": "",
        "instagram_url": "",
        "display_order": 2,
    },
]

for i in instructors:
    db.add(models.Instructor(**i))

# ============================================================
# MILESTONES (2016-2026, verbatim)
# ============================================================
milestones = [
    {"year": "2016", "title": "The Beginning", "description": "7 Dance Company was founded with a passion for dance and a vision to create a space where dancers could learn, grow, and express themselves.", "display_order": 1},
    {"year": "2017", "title": "Growing Our Community", "description": "Expanded our training and welcomed more passionate dancers into the 7 Dance Company family.", "display_order": 2},
    {"year": "2018", "title": "More Performances", "description": "Created more opportunities for students to perform, gain stage experience, and build confidence.", "display_order": 3},
    {"year": "2019", "title": "Building Stronger Talent", "description": "Focused on structured training, choreography, technique, and developing dancers across different levels.", "display_order": 4},
    {"year": "2020", "title": "Adapting & Staying Connected", "description": "Despite challenges, we continued to keep our dance community connected and motivated.", "display_order": 5},
    {"year": "2021", "title": "A Fresh Start", "description": "Returned with renewed energy and continued developing dancers through dedicated training and performance opportunities.", "display_order": 6},
    {"year": "2022", "title": "Expanding Opportunities", "description": "Strengthened our programs and encouraged students to participate in more performances, events, and competitions.", "display_order": 7},
    {"year": "2023", "title": "Rising Together", "description": "Continued to grow our community while focusing on performance quality, discipline, and artistic expression.", "display_order": 8},
    {"year": "2024", "title": "Bigger Goals, Bigger Dreams", "description": "Expanded our focus on competitive training, stage performances, and creating new opportunities for dancers.", "display_order": 9},
    {"year": "2025", "title": "Stronger Than Ever", "description": "Continued our journey with a growing community of dancers, new experiences, and a commitment to excellence.", "display_order": 10},
    {"year": "2026", "title": "The Journey Continues", "description": "Celebrating years of passion, dedication, and countless dance journeys — while looking forward to an even bigger future.", "display_order": 11},
]

for m in milestones:
    db.add(models.Milestone(**m))

# ============================================================
# COLLABORATIONS
# ============================================================
collaborations = [
    "Sandy Master & Think Music",
    "Kanchana - 4 (Lead dance training)",
    "Raghava Lawrence Master",
    "Ritika Singh",
    "Aishwarya Arjun",
    "Assistant Choreographer for advertisements",
    "Yuvina and Naren",
    "Gurulakshmanan",
    "Aryan (Bigg Boss)",
]

for idx, name in enumerate(collaborations, start=1):
    db.add(models.Collaboration(name=name, display_order=idx))

# ============================================================
# TESTIMONIALS (verbatim, all 8)
# ============================================================
testimonials = [
    {"name": "Annapoorani G.", "role": "Student", "review": "Seven Sir and Sherya Mam are one of the best dance instructors I've ever had. They create a supportive and inclusive environment that makes learning enjoyable, no matter your skill level. Their attention to detail, commitment to technique, and encouragement really stand out. Their passion for dance is truly inspiring.", "rating": 5, "program": ""},
    {"name": "Devi Dhanalakshmi M.", "role": "Parent", "review": "My daughter has been attending this dance class for almost three years, and the experience has been absolutely wonderful. The masters are caring, skilled, and always encourage children to participate in various events. My daughter has taken part in many stage events and consistently won prizes. The classes have improved not only her dance skills but also her confidence and creativity. Highly recommended!", "rating": 5, "program": ""},
    {"name": "Sathish Sb.", "role": "Student", "review": "It's a wonderful place to begin your dance journey. Every dance move I learn here builds my confidence and makes me feel happier.", "rating": 5, "program": ""},
    {"name": "Sharmila", "role": "Student", "review": "Superb dance company with friendly guidance. Well-maintained place with a neat ambience. Highly recommended!", "rating": 5, "program": ""},
    {"name": "Dennis Deccon", "role": "Student", "review": "Had a very good experience with Seven and Shreya. Enjoyed dancing in the well-maintained dance floor. You are young and very dedicated instructors. All the best for your upcoming journey!", "rating": 5, "program": ""},
    {"name": "Geethanjali Jayakumar", "role": "Parent", "review": "Our kids enjoy the classes conducted here. The studio has good, clean and comfortable flooring for practice.", "rating": 5, "program": ""},
    {"name": "Sasi Rekha", "role": "Student", "review": "Very good place for beginners to learn and explore new steps.", "rating": 5, "program": ""},
    {"name": "Chris Alma", "role": "Student", "review": "The experience at 7 Dance Company is wonderful and exciting. The teachers are the best!", "rating": 5, "program": ""},
]

for t in testimonials:
    db.add(models.Testimonial(**t))

# ============================================================
# GALLERY (placeholders — client will send real photos/videos)
# ============================================================
gallery_items = [
    {"title": "Studio Practice", "category": "Performances", "media_type": "photo", "media_url": "PLACEHOLDER_PHOTO_1", "thumbnail_url": "", "display_order": 1},
    {"title": "Competition Highlight", "category": "Competitions", "media_type": "video", "media_url": "PLACEHOLDER_YOUTUBE_URL_1", "thumbnail_url": "PLACEHOLDER_THUMB_1", "display_order": 2},
    {"title": "Hip Hop Session", "category": "Hip Hop", "media_type": "photo", "media_url": "PLACEHOLDER_PHOTO_2", "thumbnail_url": "", "display_order": 3},
]

for g in gallery_items:
    db.add(models.GalleryItem(**g))

# ============================================================
# EVENT SHOWCASES (derived from collaborations)
# ============================================================
event_showcases = [
    {"year": "2024", "title": "Dance Training for \"Kanchana 4\" Lead Cast", "venue": "Film Production", "display_order": 1},
    {"year": "2023", "title": "Choreography Collaboration with Sandy Master & Think Music", "venue": "Chennai", "display_order": 2},
    {"year": "2023", "title": "Performance Choreography for Aishwarya Arjun", "venue": "Chennai", "display_order": 3},
    {"year": "2022", "title": "Assistant Choreography for Television Advertisements", "venue": "Chennai", "display_order": 4},
    {"year": "2022", "title": "Choreography Session with Ritika Singh", "venue": "Chennai", "display_order": 5},
    {"year": "2021", "title": "Worked Alongside Raghava Lawrence Master", "venue": "Chennai", "display_order": 6},
]

for e in event_showcases:
    db.add(models.EventShowcase(**e))

db.commit()
db.close()
print("✅ 7 Dance Company data seeded successfully!")