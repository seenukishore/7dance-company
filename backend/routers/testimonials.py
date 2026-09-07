from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/testimonials", tags=["testimonials"])

@router.get("/", response_model=List[schemas.TestimonialOut])
def get_testimonials(db: Session = Depends(get_db)):
    return db.query(models.Testimonial).all()