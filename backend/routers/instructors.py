from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/instructors", tags=["instructors"])

@router.get("/", response_model=List[schemas.InstructorOut])
def get_instructors(db: Session = Depends(get_db)):
    return db.query(models.Instructor).order_by(models.Instructor.display_order).all()