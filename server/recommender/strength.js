import { INTERACTION_TYPES } from "../models/Interaction.js"

// TODO (yours): turn a user's interactions with one listing into a single
// "how much did they like it" number. The recommender will use it the way the
// notebook used log1p(hours).
//
// Inputs:  counts = { view: <int>, wishlist: <int>, booking: <int> }
//          for ONE (user, listing) pair.
// Output:  a number >= 0. 0 means "no signal".
//
// Things to decide: how much more is a booking worth than a view? Should
// 20 views be worth 20x one view, or less? (Hint: the notebook's answer to
// "a few players have thousands of hours" applies here.)
export function interactionStrength(counts) {
    throw new Error("interactionStrength not implemented yet")
}

export { INTERACTION_TYPES }
