# website

This is my personal website. I like the look of older things and I've done my best to replicate that here.

## Writing a Blog Post

How to add a new blog post:

1. Create a file: src/data/blog/{folder}/{date}.md (e.g., thesis/2026-02-17.md)
2. Start with # Title on line 1
3. Optionally add Date: and Author: lines
4. Write your markdown content
5. It's automatically included on next build/dev refresh

### Pins

To pin a post, add Pinned: true near the top of any markdown file:

```markdown
# My Post Title

Pinned: true

Content here...
```
