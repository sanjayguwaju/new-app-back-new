// generateSlug.ts

export const generateSlug = (title: string): string => {
    if (!title) {
      throw new Error('Title cannot be empty')
    }
  
    // Convert to lowercase
    let slug = title.toLowerCase()
  
    // Remove non-alphanumeric characters (except spaces)
    slug = slug.replace(/[^a-z0-9\s]/g, '')
  
    // Replace spaces with hyphens
    slug = slug.replace(/\s+/g, '-')
  
    // Trim leading and trailing hyphens
    slug = slug.replace(/^-+|-+$/g, '')
  
    return slug
  }