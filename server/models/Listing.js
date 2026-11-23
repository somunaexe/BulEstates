import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
    {
        creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        title: { type: String, required: true },
        description: { type: String, default: "" },
        // Matches the `label` values in client/src/assets/data.jsx (categories / types)
        category: { type: String, required: true },
        type: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
        bedrooms: { type: Number, default: 1 },
        bathrooms: { type: Number, default: 1 },
        amenities: { type: [String], default: [] },
        photoPaths: { type: [String], default: [] },
    },
    { timestamps: true }
)

ListingSchema.index({ category: 1, city: 1 })

export default mongoose.model("Listing", ListingSchema);
