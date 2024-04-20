'use client'

export default function myImageLoader({ src, width, quality }) {
  const ext = '.' + src.split('.').pop();
  const min = width < 828 ? 828 : width;

  if (ext.includes('svg')) return src;

  const url = src.replace(ext, `-${min}${ext}`);

  return url;
}
