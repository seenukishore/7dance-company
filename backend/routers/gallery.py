from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List, Optional
from database import get_db
import models, schemas

router = APIRouter(prefix="/api/gallery", tags=["gallery"])

@router.get("/", response_model=List[schemas.GalleryItemOut])
def get_gallery(category: Optional[str] = None, media_type: Optional[str] = None, db: Session = Depends(get_db)):
    query = db.query(models.GalleryItem)
    if category and category != "All":
        query = query.filter(models.GalleryItem.category == category)
    if media_type:
        query = query.filter(models.GalleryItem.media_type == media_type)
    return query.order_by(models.GalleryItem.display_order).all()