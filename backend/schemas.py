from pydantic import BaseModel
from typing import Optional
from datetime import datetime


# ---- Course ----
class CourseOut(BaseModel):
    id: int
    name: str
    category: Optional[str] = None
    description: Optional[str] = None
    level: Optional[str] = None
    duration: Optional[str] = None
    frequency: Optional[str] = None
    features: Optional[str] = None
    price_range: Optional[str] = None
    image_url: Optional[str] = None
    is_popular: bool = False
    tag: Optional[str] = None

    class Config:
        from_attributes = True


# ---- Instructor ----
class InstructorOut(BaseModel):
    id: int
    name: str
    role: Optional[str] = None
    bio: Optional[str] = None
    specialties: Optional[str] = None
    image_url: Optional[str] = None
    instagram_url: Optional[str] = None

    class Config:
        from_attributes = True


# ---- Milestone ----
class MilestoneOut(BaseModel):
    id: int
    year: str
    title: str
    description: Optional[str] = None

    class Config:
        from_attributes = True


# ---- Collaboration ----
class CollaborationOut(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True


# ---- Testimonial ----
class TestimonialOut(BaseModel):
    id: int
    name: str
    role: Optional[str] = None
    review: str
    rating: int
    program: Optional[str] = None

    class Config:
        from_attributes = True


# ---- Gallery ----
class GalleryItemOut(BaseModel):
    id: int
    title: Optional[str] = None
    category: Optional[str] = None
    media_type: str
    media_url: str
    thumbnail_url: Optional[str] = None

    class Config:
        from_attributes = True


# ---- Event Showcase ----
class EventShowcaseOut(BaseModel):
    id: int
    year: str
    title: str
    venue: Optional[str] = None

    class Config:
        from_attributes = True


# ---- Event Enquiry ----
class EventEnquiryCreate(BaseModel):
    name: str
    email: str
    phone: str
    event_type: Optional[str] = None
    event_date: Optional[str] = None
    venue_city: Optional[str] = None
    additional_requirements: Optional[str] = None

class EventEnquiryOut(BaseModel):
    id: int
    name: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True


# ---- Trial Booking ----
class TrialBookingCreate(BaseModel):
    name: str
    email: str
    phone: str
    subject: Optional[str] = None
    message: Optional[str] = None

class TrialBookingOut(BaseModel):
    id: int
    name: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True