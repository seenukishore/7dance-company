from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/collaborations", tags=["collaborations"])

@router.get("/", response_model=List[schemas.CollaborationOut])
def get_collaborations(db: Session = Depends(get_db)):
    return db.query(models.Collaboration).order_by(models.Collaboration.display_order).all()