"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function ListingsPage() {
  const [showMap, setShowMap] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Map configuration
  const mapCenter = { lat: 44.8378, lng: -0.5792 }; // Bordeaux coordinates
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const listings = [
    {
      id: 1,
      title: "Bordeaux Getaway",
      type: "Entire home in Bordeaux",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      baths: 2,
      amenities: ["WiFi", "Kitchen", "Free Parking"],
      rating: 5.0,
      reviews: 318,
      price: 325,
      lat: 44.8378,
      lng: -0.5792,
      image: "/images/listing1.jpg"
    },
    {
      id: 2,
      title: "Charming Waterfront Condo",
      type: "Entire home in Bordeaux",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      baths: 2,
      amenities: ["WiFi", "Kitchen", "Free Parking"],
      rating: 5.0,
      reviews: 318,
      price: 200,
      lat: 44.8410,
      lng: -0.5700,
      image: "/images/listing2.jpg"
    },
    {
      id: 3,
      title: "Historic City Center Home",
      type: "Entire home in Bordeaux",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      baths: 2,
      amenities: ["WiFi", "Kitchen", "Free Parking"],
      rating: 2.0,
      reviews: 318,
      price: 125,
      lat: 44.8300,
      lng: -0.5650,
      image: "/images/listing3.jpg"
    },
    {
      id: 4,
      title: "Bordeaux Getaway",
      type: "Entire home in Bordeaux",
      guests: 6,
      bedrooms: 3,
      beds: 3,
      baths: 2,
      amenities: ["WiFi", "Kitchen", "Free Parking"],
      rating: 5.0,
      reviews: 318,
      price: 325,
      lat: 44.8450,
      lng: -0.5850,
      image: "/images/listing1.jpg"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Price Filter */}
            <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:border-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18m-9 5h9" />
              </svg>
              <span className="text-sm">Price</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Type of Place */}
            <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:border-gray-400">
              <span className="text-sm">Type of place</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Free Cancellation */}
            <button className="px-4 py-2 border rounded-full hover:border-gray-400 text-sm">
              Free cancellation
            </button>

            {/* WiFi */}
            <button className="px-4 py-2 border rounded-full hover:border-gray-400 text-sm">
              WiFi
            </button>

            {/* Kitchen */}
            <button className="px-4 py-2 border rounded-full hover:border-gray-400 text-sm">
              Kitchen
            </button>

            {/* Air Conditioning */}
            <button className="px-4 py-2 border rounded-full hover:border-gray-400 text-sm">
              Air conditioning
            </button>

            {/* Washer */}
            <button className="px-4 py-2 border rounded-full hover:border-gray-400 text-sm">
              Washer
            </button>

            {/* Iron */}
            <button className="px-4 py-2 border rounded-full hover:border-gray-400 text-sm">
              Iron
            </button>

            {/* Dedicated Workspace */}
            <button className="px-4 py-2 border rounded-full hover:border-gray-400 text-sm">
              Dedicated workspace
            </button>

            {/* Free Parking */}
            <button className="px-4 py-2 border rounded-full hover:border-gray-400 text-sm">
              Free parking
            </button>

            {/* Dryer */}
            <button className="px-4 py-2 border rounded-full hover:border-gray-400 text-sm">
              Dryer
            </button>

            {/* Filters Button */}
            <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:border-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="text-sm">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-6 py-4">
        <p className="text-sm text-gray-600">{listings.length * 50}+ stays in Bordeaux</p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-12">
        <div className="flex gap-6">
          {/* Listings Grid */}
          <div className={`${showMap ? 'w-1/2' : 'w-full'} transition-all`}>
            <div className="grid grid-cols-1 gap-6">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex gap-4">
                    {/* Image */}
                    <div className="relative w-64 h-52 shrink-0">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Image</span>
                      </div>
                      <button 
                        onClick={() => toggleFavorite(listing.id)}
                        className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <svg 
                          className={`w-5 h-5 ${favorites.includes(listing.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                          fill={favorites.includes(listing.id) ? 'currentColor' : 'none'} 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">{listing.type}</p>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{listing.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.baths} bath
                        </p>
                        <div className="flex gap-2 mb-3">
                          {listing.amenities.map((amenity, index) => (
                            <span key={index} className="text-xs text-gray-600">{amenity}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span className="text-sm font-semibold">{listing.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">({listing.reviews} reviews)</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-end">
                        <div className="text-right">
                          <p className="text-xl font-bold text-gray-900">${listing.price} <span className="text-sm font-normal text-gray-600">/night</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map View */}
          {showMap && (
            <div className="w-1/2 sticky top-24 h-[calc(100vh-8rem)]">
              <div className="rounded-lg w-full h-full overflow-hidden shadow-lg">
                <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={mapCenter}
                    zoom={13}
                    options={{
                      zoomControl: true,
                      streetViewControl: false,
                      mapTypeControl: false,
                      fullscreenControl: true,
                    }}
                  >
                    {listings.map((listing) => (
                      <Marker
                        key={listing.id}
                        position={{ lat: listing.lat, lng: listing.lng }}
                        label={{
                          text: `$${listing.price}`,
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                        icon={{
                          path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
                          fillColor: '#B71C1C',
                          fillOpacity: 1,
                          strokeColor: '#ffffff',
                          strokeWeight: 2,
                          scale: 1,
                        }}
                      />
                    ))}
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Show Map Toggle Button */}
      <button
        onClick={() => setShowMap(!showMap)}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg flex items-center gap-2 z-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        <span>{showMap ? 'Hide map' : 'Show map'}</span>
      </button>
    </div>
  );
}
