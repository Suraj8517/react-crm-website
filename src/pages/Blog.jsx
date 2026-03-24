import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../lib/sanity'
import { Link } from 'react-router-dom'

const QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, publishedAt, excerpt, mainImage,
  "author": author->name,
  "category": category->title,
  "part": partNumber,
  "level": difficultyLevel
}`

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  }).toUpperCase()
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&display=swap');

  .bg-root {
    background: #f5f3ff;
    min-height: 100vh;
    font-family: 'Sora', sans-serif;
  }

  .section-wrap {
    max-width: 1180px;
    margin: 0 auto;
    padding: 72px 40px 100px;
    position: relative;
  }

  /* Checkerboard */
  .deco {
    position: absolute;
    top: 48px;
    right: 40px;
    display: grid;
    grid-template-columns: repeat(5, 18px);
    gap: 6px;
    pointer-events: none;
  }

  .deco-sq {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    animation: popIn 0.3s ease both;
  }

  @keyframes popIn {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }

  /* Header */
  .hdr { max-width: 440px; margin-bottom: 52px; position: relative; z-index: 1; }

  .hdr-title {
    font-size: clamp(2.2rem, 3.5vw, 3rem);
    font-weight: 800;
    color: #1a0040;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 0 0 14px;
  }

  .hdr-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.975rem;
    line-height: 1.65;
    color: #6b558a;
    margin: 0;
  }

  /* Grid */
  .grids {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 22px;
  }

  /* Card */
  .card {
    background: #ffffff;
    border-radius: 22px;
    padding: 28px 28px 0;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(90, 30, 180, 0.07), 0 1px 2px rgba(90, 30, 180, 0.04);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    animation: slideUp 0.45s ease both;
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 36px rgba(90, 30, 180, 0.13);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    background: #7c3aed;
    color: #fff;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 5px 13px;
    border-radius: 40px;
    margin-bottom: 18px;
    align-self: flex-start;
  }

  .card-title {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.35;
    color: #140030;
    letter-spacing: -0.02em;
    margin: 0 0 12px;
  }

  .card-meta {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.07em;
    color: #a892cc;
    text-transform: uppercase;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .meta-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #c4aee8;
    flex-shrink: 0;
  }

  .meta-level { color: #7c3aed; }

  /* Image tray */
  .img-tray {
    margin: 0 -28px;
    height: 180px;
    position: relative;
    border-radius: 0 0 22px 22px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .img-tray-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 120%, #ddd6fe 0%, #ede9fe 50%, #fff 100%);
  }

  .img-tray img {
    position: relative;
    z-index: 1;
    width: 130px;
    height: 130px;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 8px 20px rgba(100, 30, 200, 0.22));
    transition: transform 0.3s ease;
  }

  .card:hover .img-tray img {
    transform: translateY(-7px) scale(1.05);
  }

  .img-placeholder {
    position: relative;
    z-index: 1;
    width: 90px;
    height: 90px;
    border-radius: 18px;
    background: linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%);
    margin: 0 auto 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Skeleton */
  .skel {
    border-radius: 10px;
    background: linear-gradient(90deg, #ede8ff 25%, #e2dbff 50%, #ede8ff 75%);
    background-size: 600px 100%;
    animation: shim 1.3s infinite;
  }

  @keyframes shim {
    0% { background-position: -600px 0; }
    100% { background-position: 600px 0; }
  }
`

/* Checkerboard: row, col, shade */
const SQUARES = [
  [0,1,'#c4b5fd'],[0,3,'#a78bfa'],
  [1,0,'#ddd6fe'],[1,2,'#8b5cf6'],[1,4,'#7c3aed'],
  [2,1,'#a78bfa'],[2,3,'#c4b5fd'],
  [3,0,'#7c3aed'],[3,2,'#ddd6fe'],[3,4,'#8b5cf6'],
  [4,1,'#c4b5fd'],[4,3,'#a78bfa'],
]

function DecoGrid() {
  return (
    <div className="deco" aria-hidden="true">
      {Array.from({ length: 25 }, (_, i) => {
        const row = Math.floor(i / 5), col = i % 5
        const sq = SQUARES.find(([r, c]) => r === row && c === col)
        return sq ? (
          <div
            key={i}
            className="deco-sq"
            style={{
              background: sq[2],
              animationDelay: `${SQUARES.indexOf(sq) * 0.04}s`,
            }}
          />
        ) : <div key={i} style={{ width: 18, height: 18 }} />
      })}
    </div>
  )
}

function PostCard({ post, index }) {
  return (
    <Link
      className="card"
      to={`/blogs/${post.slug.current}`}
      style={{ animationDelay: `${index * 0.09}s` }}
    >
      <span className="badge">
        {post.part ? `Part ${post.part}` : `No. ${index + 1}`}
      </span>
      <h2 className="card-title">{post.title}</h2>
      <div className="card-meta">
        <span>{formatDate(post.publishedAt)}</span>
        {post.level && (
          <>
            <span className="meta-dot" />
            <span className="meta-level">{post.level}</span>
          </>
        )}
      </div>
      <div className="img-tray">
        <div className="img-tray-bg" />
        {post.mainImage ? (
          <img
            src={urlFor(post.mainImage).width(260).height(260).url()}
            alt={post.title}
          />
        ) : (
          <div className="img-placeholder">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="4" y="12" width="28" height="5" rx="2.5" fill="white" fillOpacity="0.9"/>
              <rect x="4" y="20" width="28" height="5" rx="2.5" fill="white" fillOpacity="0.65"/>
              <rect x="8" y="4" width="20" height="6" rx="3" fill="white"/>
            </svg>
          </div>
        )}
      </div>
    </Link>
  )
}

function SkeletonCard({ index }) {
  return (
    <div
      className="card"
      style={{ cursor: 'default', animationDelay: `${index * 0.09}s` }}
    >
      <div className="skel" style={{ width: 72, height: 26, marginBottom: 18 }} />
      <div className="skel" style={{ width: '88%', height: 18, marginBottom: 10 }} />
      <div className="skel" style={{ width: '68%', height: 18, marginBottom: 18 }} />
      <div className="skel" style={{ width: 130, height: 12, marginBottom: 24 }} />
      <div className="skel" style={{ height: 172, borderRadius: '0 0 22px 22px', margin: '0 -28px', marginTop: 'auto' }} />
    </div>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(QUERY).then(data => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="bg-root">
      <style>{css}</style>
      <section className="section-wrap">
       <div className="hidden md:block">
  <DecoGrid />
</div>
        <header className="hdr">
          <h1 className="hdr-title">Blogs</h1>
          <p className="hdr-sub">
            To simplify your AI journey, we've created guides that turn
            complexity into clear, actionable value.
          </p>
        </header>
        <div className="grids">
          {loading
            ? Array.from({ length: 3 }, (_, i) => <SkeletonCard key={i} index={i} />)
            : posts.length === 0
            ? <p style={{ fontFamily: "'DM Sans',sans-serif", color: '#9d88c0' }}>No guides published yet.</p>
            : posts.map((post, i) => <PostCard key={post._id} post={post} index={i} />)
          }
        </div>
      </section>
    </div>
  )
}