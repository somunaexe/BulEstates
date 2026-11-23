import mongoose from "mongoose";

// One row per thing a user did to a listing. This is the recommender's only
// training signal: the equivalent of the steam-200k "purchase"/"play" rows.
export const INTERACTION_TYPES = ["view", "wishlist", "booking"]

const InteractionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
        type: { type: String, enum: INTERACTION_TYPES, required: true },
    },
    { timestamps: true }
)

// Reads are always "all interactions for this user" or "for this listing"
InteractionSchema.index({ user: 1, listing: 1 })
InteractionSchema.index({ listing: 1 })

export default mongoose.model("Interaction", InteractionSchema);
