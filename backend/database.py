import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Render or local-la irundhalum simple SQLite file use panrathu
DATABASE_URL = "sqlite:///./sql_app.db"

engine = create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)
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
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        from models import Course
        count = db.query(Course).count()
        if count == 0:
            print("Database empty-ah irukku. Auto-seed run aagudhu...")
            from seed_data import seed_database
            seed_database(db)
    except Exception as e:
        print(f"Auto-seed error: {e}")
    finally:
        db.close()