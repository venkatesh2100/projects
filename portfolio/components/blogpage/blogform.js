import { useState } from 'react';
import RichTextEditor from './richtexteditor';
export default function BlogForm({ initialBlog = {}, onSubmit }) {
  const [title, setTitle] = useState(initialBlog.title || '');
  const [author, setAuthor] = useState(initialBlog.author || '');
  const [content, setContent] = useState(initialBlog.content || '');
  const [description, setDescription] = useState(initialBlog.description || '');
  const [imageUrl, setImageUrl] = useState(initialBlog.imageUrl || '');
  const [category, setCategory] = useState(initialBlog.category || '');
  const [published, setPublished] = useState(initialBlog.published || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      author,
      content,
      description,
      imageUrl,
      category,
      published,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Write a New Story</h1>

      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border-b-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          className="w-full p-2 border-b-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <input
          type="text"
          className="w-full p-2 border-b-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category (e.g. Tech, Lifestyle)"
        />
        <input
          type="text"
          className="w-full p-2 border-b-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short Description"
        />
        <input
          type="text"
          className="w-full p-2 border-b-2"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
        />

        <RichTextEditor value={content} onChange={setContent} />

        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          <span className="ml-2">Publish</span>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
      </div>
    </form>
  );
}
