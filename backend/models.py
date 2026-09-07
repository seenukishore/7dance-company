from sqlalchemy import Column, Integer, String, Float, Text, DateTime, Boolean
from sqlalchemy.sql import func
from database import Base


class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)  # e.g. "Hip Hop"
    category = Column(String)  # for filter tabs
    description = Column(Text)
    level = Column(String)  # Beginner / Intermediate / Advanced / All Levels
    duration = Column(String)  # "3 Months"
    frequency = Column(String)  # "4 days/week"
    features = Column(Text)  # pipe-separated bullet points
    price_range = Column(String)  # "₹1,200 - ₹2,000/month"
    image_url = Column(String)
    is_popular = Column(Boolean, default=False)
    tag = Column(String)  # "Most Popular", "Trending" etc
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Instructor(Base):
    __tablename__ = "instructors"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    role = Column(String)  # "Lead Choreographer & Founder"
    bio = Column(Text)
    specialties = Column(String)  # comma-separated
    image_url = Column(String)
    instagram_url = Column(String)
    display_order = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class Milestone(Base):
    __tablename__ = "milestones"

    id = Column(Integer, primary_key=True, index=True)
    year = Column(String, nullable=False)
    title = Column(String, nullable=False)
    description = Column(Text)
    display_order = Column(Integer, default=0)


class Collaboration(Base):
    __tablename__ = "collaborations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)  # "Sandy Master & Think Music"
    display_order = Column(Integer, default=0)


class Testimonial(Base):
    __tablename__ = "testimonials"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    role = Column(String)  # "Student" / "Parent"
    review = Column(Text, nullable=False)
    rating = Column(Integer, default=5)
    program = Column(String)  # optional, for courses page style tags
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class GalleryItem(Base):
    __tablename__ = "gallery_items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    category = Column(String)  # for filter tabs: Hip-Hop, Performances, etc.
    media_type = Column(String, nullable=False)  # "photo" or "video"
    media_url = Column(String, nullable=False)  # image URL or YouTube URL
    thumbnail_url = Column(String)  # for videos, thumbnail image
    display_order = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class EventShowcase(Base):
    __tablename__ = "event_showcases"

    id = Column(Integer, primary_key=True, index=True)
    year = Column(String, nullable=False)
    title = Column(String, nullable=False)
    venue = Column(String)
    display_order = Column(Integer, default=0)


class EventEnquiry(Base):
    __tablename__ = "event_enquiries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    event_type = Column(String)
    event_date = Column(String)
    venue_city = Column(String)
    additional_requirements = Column(Text)
    status = Column(String, default="pending")
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class TrialBooking(Base):
    __tablename__ = "trial_bookings"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    subject = Column(String)
    message = Column(Text)
    status = Column(String, default="pending")
    created_at = Column(DateTime(timezone=True), server_default=func.now())