import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client, urlFor } from '../lib/sanity'

const QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title, publishedAt, mainImage, body,
  "author": author->name,
  "authorImage": author->image,
  "category": category->title,
  "part": partNumber,
  "level": difficultyLevel,
  "readTime": round(length(pt::text(body)) / 5 / 200)
}`

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

  .post-root {
    background: #f5f3ff;
    min-height: 100vh;
    font-family: 'Sora', sans-serif;
  }

  /* ── Top nav bar ── */
  .post-nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(245, 243, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid #ede9fe;
    padding: 0 40px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    color: #7c3aed;
    letter-spacing: -0.01em;
    transition: gap 0.2s ease, opacity 0.2s ease;
  }

  .back-btn:hover { gap: 12px; opacity: 0.75; }

  .back-arrow {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #ede9fe;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.2s ease;
  }

  .back-btn:hover .back-arrow { background: #ddd6fe; }

  .nav-badge {
    display: inline-flex;
    align-items: center;
    background: #7c3aed;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 40px;
  }

  /* ── Hero ── */
  .post-hero {
    max-width: 860px;
    margin: 0 auto;
    padding: 56px 40px 0;
    animation: fadeUp 0.5s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .post-eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .eyebrow-chip {
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 5px 13px;
    border-radius: 40px;
  }

  .chip-part { background: #7c3aed; color: #fff; }
  .chip-level { background: #ede9fe; color: #7c3aed; }

  .post-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #140030;
    letter-spacing: -0.035em;
    line-height: 1.15;
    margin: 0 0 24px;
  }

  /* Author / meta row */
  .post-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
    border-top: 1px solid #ede9fe;
    border-bottom: 1px solid #ede9fe;
    margin-bottom: 40px;
  }

  .author-avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
    background: linear-gradient(135deg, #a78bfa, #7c3aed);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    overflow: hidden;
  }

  .meta-text { flex: 1; }

  .meta-author {
    font-size: 13px;
    font-weight: 600;
    color: #140030;
    display: block;
  }

  .meta-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 11.5px;
    color: #a892cc;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 2px;
  }

  .meta-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #c4aee8;
  }

  /* ── Hero image ── */
  .post-cover {
    max-width: 860px;
    margin: 0 auto 0;
    padding: 0 40px;
    animation: fadeUp 0.5s 0.1s ease both;
  }

  .cover-wrap {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    background: #ede9fe;
  }

  .cover-wrap img {
    width: 100%;
    max-height: 440px;
    object-fit: cover;
    display: block;
  }

  .cover-glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(124, 58, 237, 0.08) 100%);
    pointer-events: none;
  }

  /* ── Body ── */
  .post-body-wrap {
    max-width: 720px;
    margin: 0 auto;
    padding: 52px 40px 100px;
    animation: fadeUp 0.5s 0.2s ease both;
  }

  /* Portable Text / prose styles */
  .post-prose { font-family: 'DM Sans', sans-serif; color: #2d1a4a; }

  .post-prose p {
    font-size: 1.0625rem;
    line-height: 1.8;
    margin: 0 0 1.5em;
    color: #3d2860;
  }

  .post-prose h2 {
    font-family: 'Sora', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: #140030;
    letter-spacing: -0.025em;
    line-height: 1.25;
    margin: 2.5em 0 0.75em;
    padding-left: 16px;
    border-left: 3px solid #7c3aed;
  }

  .post-prose h3 {
    font-family: 'Sora', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #1e0050;
    letter-spacing: -0.02em;
    margin: 2em 0 0.6em;
  }

  .post-prose strong { color: #140030; font-weight: 600; }
  .post-prose em { font-style: italic; color: #5b3e8a; }

  .post-prose a {
    color: #7c3aed;
    text-decoration: underline;
    text-decoration-color: #c4b5fd;
    text-underline-offset: 3px;
    transition: text-decoration-color 0.2s;
  }

  .post-prose a:hover { text-decoration-color: #7c3aed; }

  .post-prose ul, .post-prose ol {
    padding-left: 1.5rem;
    margin: 0 0 1.5em;
  }

  .post-prose li {
    font-size: 1.0625rem;
    line-height: 1.75;
    margin-bottom: 0.4em;
    color: #3d2860;
  }

  .post-prose ul li::marker { color: #a78bfa; }
  .post-prose ol li::marker { color: #7c3aed; font-weight: 600; }

  .post-prose blockquote {
    margin: 2em 0;
    padding: 20px 24px;
    background: #f5f0ff;
    border-left: 4px solid #8b5cf6;
    border-radius: 0 12px 12px 0;
    font-style: italic;
    color: #5b3e8a;
  }

  .post-prose blockquote p { margin: 0; font-size: 1.05rem; }

  .post-prose code {
    background: #ede9fe;
    color: #6d28d9;
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 0.875em;
    font-family: 'Courier New', monospace;
  }

  .post-prose pre {
    background: #1a0040;
    border-radius: 14px;
    padding: 24px;
    overflow-x: auto;
    margin: 1.75em 0;
  }

  .post-prose pre code {
    background: none;
    color: #e2d9f3;
    padding: 0;
    font-size: 0.9rem;
    line-height: 1.65;
  }

  .post-prose img {
    width: 100%;
    border-radius: 14px;
    margin: 1.5em 0;
  }

  /* ── Divider ── */
  .post-divider {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 40px;
    border: none;
    border-top: 1px solid #ede9fe;
  }

  /* ── Back to guides CTA ── */
  .post-cta {
    max-width: 720px;
    margin: 0 auto;
    padding: 40px 40px 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    animation: fadeUp 0.5s 0.3s ease both;
  }

  .cta-text { font-size: 0.9rem; color: #9d80c8; }
  .cta-text strong { color: #140030; font-weight: 600; }

  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #7c3aed;
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 40px;
    text-decoration: none;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .cta-btn:hover { background: #6d28d9; transform: translateY(-1px); }

  /* ── Skeleton ── */
  .skel {
    border-radius: 10px;
    background: linear-gradient(90deg, #ede8ff 25%, #e2dbff 50%, #ede8ff 75%);
    background-size: 600px 100%;
    animation: shim 1.3s infinite;
  }

  @keyframes shim {
    0%   { background-position: -600px 0; }
    100% { background-position: 600px 0; }
  }

  .post-loading {
    max-width: 720px;
    margin: 0 auto;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* ── Not found ── */
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    gap: 12px;
    text-align: center;
    padding: 40px;
  }

  .not-found-icon {
    width: 64px;
    height: 64px;
    background: #ede9fe;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }

  .not-found h2 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #140030;
    margin: 0;
  }

  .not-found p {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    color: #9d80c8;
    margin: 0;
  }
`

/* Custom PortableText components */
function ptComponents(urlForFn) {
  return {
    types: {
      image: ({ value }) => (
        <img
          src={urlForFn(value).width(720).url()}
          alt={value.alt || ''}
          style={{ width: '100%', borderRadius: 14, margin: '1.5em 0' }}
        />
      ),
    },
    block: {
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      blockquote: ({ children }) => <blockquote><p>{children}</p></blockquote>,
      normal: ({ children }) => <p>{children}</p>,
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value?.href} target="_blank" rel="noopener noreferrer">{children}</a>
      ),
    },
  }
}

function AuthorAvatar({ name, image, urlForFn }) {
  if (image) {
    return (
      <div className="author-avatar">
        <img
          src={urlForFn(image).width(76).height(76).url()}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    )
  }
  const initials = name
    ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
    : '?'
  return <div className="author-avatar">{initials}</div>
}

function LoadingSkeleton() {
  return (
    <div className="post-root">
      <div className="post-loading">
        <div className="skel" style={{ width: 90, height: 26 }} />
        <div className="skel" style={{ width: '75%', height: 36 }} />
        <div className="skel" style={{ width: '55%', height: 36 }} />
        <div className="skel" style={{ width: '100%', height: 360, borderRadius: 20 }} />
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[100, 90, 95, 80, 70].map((w, i) => (
            <div key={i} className="skel" style={{ width: `${w}%`, height: 18 }} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(QUERY, { slug }).then(data => {
      setPost(data)
      setLoading(false)
    })
  }, [slug])

  if (loading) return (
    <>
      <style>{css}</style>
      <LoadingSkeleton />
    </>
  )

  if (!post) return (
    <div className="post-root">
      <style>{css}</style>
      <div className="not-found">
        <div className="not-found-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 6v8M14 18v2" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round"/>
            <circle cx="14" cy="14" r="11" stroke="#a78bfa" strokeWidth="1.5"/>
          </svg>
        </div>
        <h2>Guide not found</h2>
        <p>This guide may have moved or been removed.</p>
        <Link to="/blogs" className="cta-btn" style={{ marginTop: 8 }}>
          ← Back to Blogs
        </Link>
      </div>
    </div>
  )

  const dateStr = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div className="post-root">
      <style>{css}</style>

      {/* Sticky nav */}
      <nav className="post-nav">
        <Link to="/blogs" className="back-btn">
          <span className="back-arrow">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          All Blogs
        </Link>
        {post.part && (
          <span className="nav-badge">Part {post.part}</span>
        )}
      </nav>

      {/* Hero header */}
      <div className="post-hero">
        <div className="post-eyebrow">
          {post.part && <span className="eyebrow-chip chip-part">Part {post.part}</span>}
          {post.level && <span className="eyebrow-chip chip-level">{post.level}</span>}
          {post.category && <span className="eyebrow-chip chip-level">{post.category}</span>}
        </div>

        <h1 className="post-title">{post.title}</h1>

        <div className="post-meta">
          <AuthorAvatar name={post.author} image={post.authorImage} urlForFn={urlFor} />
          <div className="meta-text">
            {post.author && <span className="meta-author">{post.author}</span>}
            <div className="meta-sub">
              <span>{dateStr}</span>
              {post.readTime > 0 && (
                <>
                  <span className="meta-dot" />
                  <span>{post.readTime} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cover image */}
      {post.mainImage && (
        <div className="post-cover">
          <div className="cover-wrap">
            <img
              src={urlFor(post.mainImage).width(1440).url()}
              alt={post.title}
            />
            <div className="cover-glow" />
          </div>
        </div>
      )}

      {/* Article body */}
      <div className="post-body-wrap">
        <div className="post-prose">
          <PortableText value={post.body} components={ptComponents(urlFor)} />
        </div>
      </div>

      {/* Footer CTA */}
      <hr className="post-divider" />
      <div className="post-cta">
        <p className="cta-text">
          <strong>Enjoying the guides?</strong><br />
          Explore more to simplify your AI journey.
        </p>
        <Link to="/blogs" className="cta-btn">
          View all Blogs
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}