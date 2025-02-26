# Virtual Labs UI Redesign

## Introduction
Virtual Labs is an initiative under the Ministry of Education (NMEICT) that provides free remote laboratory learning experiences for engineering students. Despite serving over 17 million users, the platform's UI has become outdated, leading to lower user engagement. This project aims to redesign the user interface to improve accessibility, engagement, and usability while leveraging modern web technologies.

## Problem Statement
The current Virtual Labs platform lacks modern design aesthetics, is not optimized for mobile usage, and has complex navigation. This project seeks to:
- Implement a minimalistic and modern UI.
- Improve mobile responsiveness and accessibility.
- Simplify navigation and introduce intuitive interactions.
- Integrate advanced browser and mobile OS features.

## Tech Stack
### Frontend: React.js
- React with functional components & hooks
- React Router for navigation

### Backend: Django
- Django Rest Framework (DRF) for API development
- SQLite for database management

## Features
- **Modern UI/UX:** Aesthetic redesign using modern styling frameworks.
- **Responsive Design:** Adaptive layout for mobile, tablet, and desktop.
- **Enhanced Navigation:** Intuitive menu structures for seamless browsing.
- **Mobile Sensor Integration:** Use of device gyroscope, accelerometer, or geolocation (optional for advanced engagement).
- **Accessibility Improvements:** WCAG-compliant design to ensure usability for all users.
- **Personalization Without Authentication:** User preferences stored in local storage.

## Project Structure
```

```

## Installation & Setup
### Backend Setup (Django)
1. Clone the repository:
   ```bash
   git clone https://github.com/Prince16203/Hackathon_Felicity_IIITH.git
   ```
2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```
3. Run migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend Setup (React)
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```


