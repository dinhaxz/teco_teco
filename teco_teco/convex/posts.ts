import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getPosts = query({
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});

export const addPost = mutation({
  args: {
    text: v.string(),
    img: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("posts", {
      text: args.text,
      img: args.img,
    });
  },
});