import sys
import os
from pathlib import Path

# Add backend directory to sys.path so imports work both locally and in production (Render)
backend_dir = Path(__file__).resolve().parent
if str(backend_dir) not in sys.path:
    sys.path.insert(0, str(backend_dir))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import courses, instructors, milestones, collaborations, testimonials, gallery, events, bookings
from database import init_db  # <--- 1. Ingae import pannikonga

app = FastAPI(title="7 Dance Company API")

# Server start aagum pothu automatically database tables & courses seed data-va load pannum
@app.on_event("startup")
def on_startup():
    init_db()  # <--- 2. Ingae startup-la call pannikonga

# Allow local dev + all production frontend origins (Vercel)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(courses.router)
app.include_router(instructors.router)
app.include_router(milestones.router)
app.include_router(collaborations.router)
app.include_router(testimonials.router)
app.include_router(gallery.router)
app.include_router(events.router)
app.include_router(bookings.router)

@app.get("/")
def read_root():
    return {"message": "7 Dance Company API is running 🕺💃"}

@app.get("/health")
def health_check():
    return {"status": "ok"}