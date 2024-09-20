"use client";
import Gallery from './Gallery'

export default function Home() {
  const imageUrls = [
    './pictures/alli1.jpeg',
    './pictures/alli2.jpeg',
    './pictures/josh.jpeg',
    './pictures/zeppelin.jpeg'
];
  return (
    <main>
      <h1>Photo Gallery</h1>
      <Gallery images ={imageUrls}/>
    </main>
  );
}
