export interface BlogPost {
  id: number;
  title: string;
  body: string;
}

/**
 * Simple fetch wrapper that applies security headers.
 */
async function apiFetch<T>(url: string, init?: RequestInit): Promise<T> {
  const headers = new Headers(init?.headers);
  headers.set('X-Requested-With', 'XMLHttpRequest');

  const response = await fetch(url, { ...init, headers });
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const data = await apiFetch<BlogPost[]>('/api/blog');
  return data.map(post => ({
    id: post.id,
    title: post.title,
    body: post.body,
  }));
}
