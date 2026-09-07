from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List, Optional
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/courses", tags=["courses"])

@router.get("/", response_model=List[schemas.CourseOut])
def get_courses(category: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(models.Course)
    if category and category != "All":
        query = query.filter(models.Course.category == category)
    return query.all()