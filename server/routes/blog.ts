import { Router } from "express";
import multer from "multer";
import path from "path";
import { storage } from "../storage";
import { insertBlogPostSchema } from "@shared/schema";
import { z } from "zod";

const router = Router();

// Configure multer for image uploads
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'attached_assets/blog-images');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'blog-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storageConfig,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// Upload image endpoint
router.post("/upload-image", upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No file uploaded" });
    }

    const imageUrl = `/attached_assets/blog-images/${req.file.filename}`;
    res.json({ success: true, imageUrl });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, error: "Failed to upload image" });
  }
});

// Create a new blog post
router.post("/posts", async (req, res) => {
  try {
    const postData = insertBlogPostSchema.parse(req.body);
    const newPost = await storage.createBlogPost(postData);
    res.json({ success: true, post: newPost });
  } catch (error) {
    console.error("Error creating blog post:", error);
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: error.errors });
    } else {
      res.status(500).json({ success: false, error: "Failed to create blog post" });
    }
  }
});

// Get all blog posts (admin)
router.get("/posts", async (req, res) => {
  try {
    const posts = await storage.getAllBlogPosts();
    res.json({ success: true, posts });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ success: false, error: "Failed to fetch blog posts" });
  }
});

// Get published blog posts (public)
router.get("/posts/published", async (req, res) => {
  try {
    const posts = await storage.getPublishedBlogPosts();
    res.json({ success: true, posts });
  } catch (error) {
    console.error("Error fetching published blog posts:", error);
    res.status(500).json({ success: false, error: "Failed to fetch blog posts" });
  }
});

// Get a specific blog post by ID
router.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await storage.getBlogPost(id);

    if (!post) {
      return res.status(404).json({ success: false, error: "Blog post not found" });
    }

    res.json({ success: true, post });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ success: false, error: "Failed to fetch blog post" });
  }
});

// Get a blog post by slug
router.get("/posts/slug/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await storage.getBlogPostBySlug(slug);

    if (!post) {
      return res.status(404).json({ success: false, error: "Blog post not found" });
    }

    res.json({ success: true, post });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ success: false, error: "Failed to fetch blog post" });
  }
});

// Update a blog post
router.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = insertBlogPostSchema.partial().parse(req.body);
    const updatedPost = await storage.updateBlogPost(id, updates);
    res.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error("Error updating blog post:", error);
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: error.errors });
    } else {
      res.status(500).json({ success: false, error: "Failed to update blog post" });
    }
  }
});

// Delete a blog post
router.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await storage.deleteBlogPost(id);

    if (!deleted) {
      return res.status(404).json({ success: false, error: "Blog post not found" });
    }

    res.json({ success: true, message: "Blog post deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(500).json({ success: false, error: "Failed to delete blog post" });
  }
});

export default router;
