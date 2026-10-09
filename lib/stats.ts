export const stats = {
    years: 6,
    totalBookings: 1055,
    totalImages: 18586,
    brokers: 191,
    areas: 38,

    // Bookings per year (2026 is partial, through July)
    bookingsByYear: [
        { label: "2021", value: 143 },
        { label: "2022", value: 185 },
        { label: "2023", value: 118 },
        { label: "2024", value: 217 },
        { label: "2025", value: 273 },
        { label: "2026", value: 119, note: "in progress" },
    ],

    // Bookings per calendar month
    bookingsByMonth: [
        { label: "Jan", value: 49 },
        { label: "Feb", value: 45 },
        { label: "Mar", value: 38 },
        { label: "Apr", value: 83 },
        { label: "May", value: 139 },
        { label: "Jun", value: 160 },
        { label: "Jul", value: 93 },
        { label: "Aug", value: 144 },
        { label: "Sep", value: 173 },
        { label: "Oct", value: 69 },
        { label: "Nov", value: 39 },
        { label: "Dec", value: 23 },
    ],

    propertyTypes: [
        { type: "Apartments", count: 799, percentage: 76 },
        { type: "Houses", count: 241, percentage: 23 },
        { type: "Summer houses & other", count: 15, percentage: 1 },
    ],

    topLocations: [
        { city: "Malmö", bookings: 472 },
        { city: "Lund", bookings: 280 },
        { city: "Lomma", bookings: 61 },
        { city: "Limhamn", bookings: 46 },
        { city: "Oxie", bookings: 30 },
        { city: "Staffanstorp", bookings: 23 },
        { city: "Hjärup", bookings: 15 },
        { city: "Åkarp", bookings: 14 },
    ],
};
