# **Meeting Room Booking**

A web application for managing room bookings in co-working spaces, featuring user and slot management. This application allows administrators to create and manage meeting rooms and available time slots, while users can easily book rooms based on their preferred times and receive real-time availability updates. The system also includes robust validation and error handling to ensure smooth interactions throughout the booking process.

## **Live Demo**

[Live Lin](https://meeting-room-booking-server-zeta.vercel.app/)

## **Table of Contents**

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## **Project Overview**

This project is a web application that allows users to book meeting rooms system with specific time slots. Admins can manage room availability, view bookings, and handle cancellations. The app provides a smooth and user-friendly experience for booking and managing meeting spaces.

## **Features**

- **Admin Dashboard:**

  - Create, update, and delete meeting rooms.
  - Manage room details such as name, room number, floor number, capacity, price per slot, and available amenities.
  - Create and manage time slots for each room with date, start time, and end time.

- **User Booking:**

  - Browse available meeting rooms and time slots.
  - Create bookings by selecting preferred rooms and time slots.
  - Automatically calculated total amount based on selected slots and pricing.
  - Real-time feedback on room and slot availability.

- **Robust Validation:**
  - Informative error messages for booking conflicts and validation errors.

## Technology Stack

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose

## **Installation**

### **Prerequisites**

Ensure you have the following installed:

- Node.js (v20.17.0)
- MongoDB

### **Steps**

1. Clone the repository:

   ```bash
   git clone https://github.com/Sumon-DevCoder/meeting-room-booking-server.git
   cd meeting-room-booking-system

   ```

2. Install dependencies:

   ```bash
    npm install

   ```

3. Set up environment variables: Create a .env file in the root directory and add the following variables:

   ```bash
   MONGODB_URI=[Your MongoDB connection string]
   PORT=[Your desired port number]

   ```

4. Run the application:

   ```bash
   npm run dev
   ```
