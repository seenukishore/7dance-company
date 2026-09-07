from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/bookings", tags=["bookings"])

@router.post("/trial", response_model=schemas.TrialBookingOut)
def create_trial_booking(booking: schemas.TrialBookingCreate, db: Session = Depends(get_db)):
    db_booking = models.TrialBooking(**booking.dict())
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking