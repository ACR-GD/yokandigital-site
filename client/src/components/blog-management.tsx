import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Plus, Upload, Save, Edit, Trash2, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  featuredImage?: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  author: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogManagement() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    featuredImage: "",
    readTime: "",
    tags: "",
    author: "Yokan Digital Team",
    isPublished: false
  });

  const [imageUploading, setImageUploading] = useState(false);

  // Fetch blog posts
  const { data: postsData, isLoading: postsLoading } = useQuery<{ success: boolean; posts: BlogPost[] }>({
    queryKey: ['/api/blog/posts']
  });

  // Create blog post mutation
  const createPostMutation = useMutation({
    mutationFn: (postData: any) => apiRequest('POST', '/api/blog/posts', postData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blog/posts'] });
      setNewPost({
        title: "",
        excerpt: "",
        content: "",
        category: "",
        featuredImage: "",
        readTime: "",
        tags: "",
        author: "Yokan Digital Team",
        isPublished: false
      });
      toast({
        title: "Success",
        description: "Blog post created successfully!",
      });
    },
    onError: (error: any) => {
      console.error('Error creating blog post:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create blog post",
        variant: "destructive",
      });
    }
  });

  // Delete blog post mutation
  const deletePostMutation = useMutation({
    mutationFn: (postId: string) => apiRequest('DELETE', `/api/blog/posts/${postId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blog/posts'] });
      toast({
        title: "Success",
        description: "Blog post deleted successfully!",
      });
    },
    onError: (error: any) => {
      console.error('Error deleting blog post:', error);
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive",
      });
    }
  });

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Handle image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/blog/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (data.success) {
        setNewPost(prev => ({ ...prev, featuredImage: data.imageUrl }));
        toast({
          title: "Success",
          description: "Image uploaded successfully!",
        });
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (error: any) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setImageUploading(false);
    }
  };

  // Handle form submission
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!newPost.title || !newPost.content || !newPost.category) {
      toast({
        title: "Validation Error",
        description: "Please fill in title, content, and category",
        variant: "destructive",
      });
      return;
    }

    const slug = generateSlug(newPost.title);
    const tagsArray = newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const publishDate = new Date().toISOString();

    createPostMutation.mutate({
      ...newPost,
      slug,
      tags: tagsArray,
      publishDate
    });
  };

  const handleDeletePost = (postId: string, postTitle: string) => {
    if (confirm(`Are you sure you want to delete "${postTitle}"?`)) {
      deletePostMutation.mutate(postId);
    }
  };

  const posts = postsData?.posts || [];

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Create New Blog Post */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create New Blog Post
            </CardTitle>
            <CardDescription>
              Write and publish a new blog post
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Post title"
                  value={newPost.title}
                  onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                  data-testid="input-blog-title"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt/Summary</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief summary of the post"
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost(prev => ({ ...prev, excerpt: e.target.value }))}
                  rows={2}
                  data-testid="textarea-blog-excerpt"
                />
              </div>

              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Full blog post content (HTML or Markdown)"
                  value={newPost.content}
                  onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                  rows={10}
                  className="font-mono text-sm"
                  data-testid="textarea-blog-content"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    placeholder="e.g., SEO, Web Design"
                    value={newPost.category}
                    onChange={(e) => setNewPost(prev => ({ ...prev, category: e.target.value }))}
                    data-testid="input-blog-category"
                  />
                </div>

                <div>
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    placeholder="e.g., 5 min read"
                    value={newPost.readTime}
                    onChange={(e) => setNewPost(prev => ({ ...prev, readTime: e.target.value }))}
                    data-testid="input-blog-read-time"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  placeholder="SEO, Malaysia, Google"
                  value={newPost.tags}
                  onChange={(e) => setNewPost(prev => ({ ...prev, tags: e.target.value }))}
                  data-testid="input-blog-tags"
                />
              </div>

              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  placeholder="Author name"
                  value={newPost.author}
                  onChange={(e) => setNewPost(prev => ({ ...prev, author: e.target.value }))}
                  data-testid="input-blog-author"
                />
              </div>

              <div>
                <Label htmlFor="featuredImage">Featured Image</Label>
                <div className="flex gap-2">
                  <Input
                    id="featuredImage"
                    placeholder="Image URL"
                    value={newPost.featuredImage}
                    onChange={(e) => setNewPost(prev => ({ ...prev, featuredImage: e.target.value }))}
                    data-testid="input-blog-image-url"
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={imageUploading}
                    data-testid="button-upload-image"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {imageUploading ? 'Uploading...' : 'Upload'}
                  </Button>
                </div>
                {newPost.featuredImage && (
                  <img 
                    src={newPost.featuredImage} 
                    alt="Preview" 
                    className="mt-2 w-full h-32 object-cover rounded"
                  />
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isPublished"
                  checked={newPost.isPublished}
                  onChange={(e) => setNewPost(prev => ({ ...prev, isPublished: e.target.checked }))}
                  className="w-4 h-4"
                  data-testid="checkbox-is-published"
                />
                <Label htmlFor="isPublished">Publish immediately</Label>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={createPostMutation.isPending}
                data-testid="button-create-post"
              >
                <Save className="w-4 h-4 mr-2" />
                {createPostMutation.isPending ? 'Creating...' : 'Create Post'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Existing Blog Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Existing Blog Posts</CardTitle>
            <CardDescription>
              Manage your published and draft posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            {postsLoading ? (
              <p className="text-muted-foreground">Loading posts...</p>
            ) : posts.length === 0 ? (
              <p className="text-muted-foreground">No blog posts yet. Create your first post!</p>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 border rounded-lg space-y-2"
                    data-testid={`card-blog-post-${post.id}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold">{post.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      <Badge variant={post.isPublished ? "default" : "secondary"}>
                        {post.isPublished ? "Published" : "Draft"}
                      </Badge>
                    </div>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                        data-testid={`button-view-post-${post.id}`}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600"
                        onClick={() => handleDeletePost(post.id, post.title)}
                        data-testid={`button-delete-post-${post.id}`}
                      >
                        <Trash2 className="w-3 h-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
