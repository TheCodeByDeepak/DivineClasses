import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [mapLink, setMapLink] = useState('https://www.google.com/maps?q=19.395585,72.851807'); // fallback location

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const destinationLat = 19.395585; // Divine Classes Lat
        const destinationLng = 72.851807; // Divine Classes Lng

        const url = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;

        setMapLink(url);
      });
    }
  }, []);

  return (
    <section id="contact" className="bg-[#F7F9FC] py-16 px-6 md:px-20 text-blue-900">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Section: Contact Info */}
        <div className="space-y-8">
          {/* Team Contacts */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Team Contacts</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center bg-white shadow p-4 rounded">
                <p className="font-semibold text-lg">Linu Mathews</p>
                <p className="text-gray-600 text-sm">C.E.O</p>
              </div>
              <div className="text-center bg-white shadow p-4 rounded">
                <p className="font-semibold text-lg">Anoop Singh</p>
                <p className="text-gray-600 text-sm">Professor</p>
              </div>
              <div className="text-center bg-white shadow p-4 rounded">
                <p className="font-semibold text-lg">Vinayak Kadam</p>
                <p className="text-gray-600 text-sm">Administration</p>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Address</h4>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Shop No. A 02, Meera Avenue, Beside Agarwal Exotica, Yashwant Smart City, Near Vasai IGS School, Vasai (E)
            </a>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Email</h4>
            <a href="mailto:info@divineclasses.org" className="text-blue-600 hover:underline">
              info@divineclasses.org
            </a>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Phone</h4>
            <p>
              <a href="tel:8888444476" className="text-blue-600 hover:underline">88884 44476</a> |{' '}
              <a href="tel:8888444418" className="text-blue-600 hover:underline">88884 44418</a>
            </p>
            <p>
              <a href="tel:8605920081" className="text-blue-600 hover:underline">86059 20081</a> |{' '}
              <a href="tel:9226755438" className="text-blue-600 hover:underline">92267 55438</a>
            </p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h4 className="text-xl font-semibold mb-4">Send Us a Message</h4>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-6 rounded hover:bg-blue-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
