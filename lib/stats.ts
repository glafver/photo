export const stats = {
    years: 6,
    totalBookings: 1055,
    totalImages: 18586,
    brokers: 191,
    areas: 38,

    // Bookings per year (2026 is partial, through July)
    bookingsByYear: [
        { label: "2021", value: 143, color: "bg-pastel-peach" },
        { label: "2022", value: 185, color: "bg-pastel-peach" },
        { label: "2023", value: 118, color: "bg-pastel-peach" },
        { label: "2024", value: 217, color: "bg-pastel-peach" },
        { label: "2025", value: 273, color: "bg-pastel-peach" },
        { label: "2026", value: 119, note: "in progress", color: "bg-pastel-cream" },
    ],

    // Bookings per calendar month, tinted by season
    bookingsByMonth: [
        { label: "Jan", value: 49, color: "bg-pastel-sky" },
        { label: "Feb", value: 45, color: "bg-pastel-sky" },
        { label: "Mar", value: 38, color: "bg-pastel-sage" },
        { label: "Apr", value: 83, color: "bg-pastel-sage" },
        { label: "May", value: 139, color: "bg-pastel-sage" },
        { label: "Jun", value: 160, color: "bg-pastel-peach" },
        { label: "Jul", value: 93, color: "bg-pastel-peach" },
        { label: "Aug", value: 144, color: "bg-pastel-peach" },
        { label: "Sep", value: 173, color: "bg-pastel-blush" },
        { label: "Oct", value: 69, color: "bg-pastel-blush" },
        { label: "Nov", value: 39, color: "bg-pastel-blush" },
        { label: "Dec", value: 23, color: "bg-pastel-sky" },
    ],

    propertyTypes: [
        { type: "Apartments", count: 799, percentage: 76, color: "bg-pastel-peach" },
        { type: "Houses", count: 241, percentage: 23, color: "bg-pastel-sage" },
        { type: "Summer houses & other", count: 15, percentage: 1, color: "bg-pastel-sky" },
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
