from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    import models
    # Database tables-ah create pannidum
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    try:
        from models import Course
        count = db.query(Course).count()
        # Oruvela courses illena automatic-ah seed data-va run pannum
        if count == 0:
            print("Database empty-ah irukku. Auto-seed run aagudhu...")
            from seed_data import seed_database
            seed_database(db)
    except Exception as e:
        print(f"Auto-seed error: {e}")
    finally:
        db.close()