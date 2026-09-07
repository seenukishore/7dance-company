from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/events", tags=["events"])

@router.get("/showcases", response_model=List[schemas.EventShowcaseOut])
def get_event_showcases(db: Session = Depends(get_db)):
    return db.query(models.EventShowcase).order_by(models.EventShowcase.display_order).all()

@router.post("/enquiry", response_model=schemas.EventEnquiryOut)
def create_enquiry(enquiry: schemas.EventEnquiryCreate, db: Session = Depends(get_db)):
    db_enquiry = models.EventEnquiry(**enquiry.dict())
    db.add(db_enquiry)
    db.commit()
    db.refresh(db_enquiry)
    return db_enquiry