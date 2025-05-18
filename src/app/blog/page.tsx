export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="prose max-w-3xl">
        <h2>Latest Posts</h2>
        <ul className="space-y-4">
          <li className="border-b pb-4">
            <h3 className="text-xl font-semibold">Getting Started with Next.js</h3>
            <p className="text-gray-600">May 18, 2025</p>
            <p className="mt-2">Learn how to build modern web applications with Next.js and TypeScript.</p>
          </li>
          <li className="border-b pb-4">
            <h3 className="text-xl font-semibold">Best Practices for Web Development</h3>
            <p className="text-gray-600">May 1, 2025</p>
            <p className="mt-2">Key principles for writing maintainable and scalable code.</p>
          </li>
        </ul>
      </div>
    </main>
  )
}
