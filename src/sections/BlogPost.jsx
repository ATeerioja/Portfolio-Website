/**
 * sections/BlogPost.jsx
 * Single post view. Renders the pre-parsed HTML from the markdown file.
 * Props: slug
 */
import { useLayoutEffect } from 'react'
import { getPost } from '../posts/loadPosts.js'
import { navigate } from '../hooks/useHashRoute.js'

export default function BlogPost({ slug }) {
  const post = getPost(slug)

  // Jump to the top of the post before the browser paints — runs after the
  // post DOM is committed, so the home page / Hero never flashes.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!post) {
    return (
      <div className="section-inner post-view">
        <button className="post-back" onClick={() => navigate(null)}>← back</button>
        <p className="projects-error">post not found: {slug}</p>
      </div>
    )
  }

  return (
    <article className="section-inner post-view">
      <button className="post-back" onClick={() => navigate(null, 'blog')}>← back to writing</button>
      <p className="post-date">{post.date}</p>
      <h1 className="post-title">{post.title}</h1>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
