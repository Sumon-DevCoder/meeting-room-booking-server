# **Meeting Room Booking - Backend**

A web application for managing room bookings in co-working spaces, featuring user and slot management. This application allows administrators to create and manage meeting rooms and available time slots, while users can easily book rooms based on their preferred times and receive real-time availability updates. The system also includes robust validation and error handling to ensure smooth interactions throughout the booking process.

## **Live Demo**

[Live Link](https://meeting-room-booking-server-zeta.vercel.app/)

## **Table of Contents**

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)

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

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sumon-DevCoder/meeting-room-booking-server.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd Meeting Room Booking - Backend

   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory and add your environment variables**:

   ```bash
   DB_URL=mongodb+srv://<username>:<password>@cluster0.0i0xa.mongodb.net/meetingRoomDB?retryWrites=true&w=majority&appName=Cluster0
   PORT=5000
   BCRYPT_SALT_ROUND=12
   NODE_ENV=development
   # payment credential (REDACTED)
   STORE_ID="aamarpaytest"
   SIGNETURE_KEY="dbb74894e82415a2f7ff0ec3a97e4183"
   PAYMENT_URL="https://sandbox.aamarpay.com/jsonpost.php"
   PAYMENT_VERIFY_URL="https://sandbox.aamarpay.com/api/v1/trxcheck/request.php"
   # admin credentials (REDACTED)
   admin_email=****\*\*\*****
   admin_password=****\*\*\*****
   admin_mobile_number=****\*\*\*****
   admin_image=****\*\*\*****
   # jwt credentials (REDACTED)
   JWT_ACCESS_SECRET=secret
   JWT_ACCESS_EXPIRES_iN=365d
   JWT_REFRESH_SECRET=refreshscret
   JWT_REFRESH_EXPIRES_IN=365d

 
   BACKEND_LIVE_URL=https://meeting-room-booking-server-zeta.vercel.app/
   ```

## Usage

- **For Admins:**

  - Access the admin dashboard to manage rooms and time slots.
  - Create, update, or delete rooms and their respective slots.

- **For Users:**
  - Browse the available meeting rooms and select desired time slots for booking.
  - Fill in the booking form and receive confirmation of your reservation.
