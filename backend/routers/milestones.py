from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/milestones", tags=["milestones"])

@router.get("/", response_model=List[schemas.MilestoneOut])
def get_milestones(db: Session = Depends(get_db)):
    return db.query(models.Milestone).order_by(models.Milestone.display_order).all()