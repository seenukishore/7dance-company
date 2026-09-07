from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import courses, instructors, milestones, collaborations, testimonials, gallery, events, bookings

app = FastAPI(title="7 Dance Company API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
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