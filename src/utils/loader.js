'use client'

export default function myImageLoader({ src, width, quality }) {
  const url = `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  console.log(src, width, quality);
  return url;
}
