export default function Blog({ config }) {
  return (
    <div className="section-inner">
      <p className="section-label">// blog</p>
      <h2 className="about-heading">writing.</h2>
      <div className="blog-list">
        {config.blogPosts.map(post => (
          <a
            key={post.slug}
            className="blog-card"
            href={post.url}
            {...(post.url.startsWith('http') && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            <span className="blog-date">{post.date}</span>
            <span className="blog-title">{post.title}</span>
            <span className="blog-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  )
}