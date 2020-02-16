import uuid from 'uuid'

/**
 * Site pages
 */
interface Pages {
  id: string
  title: string
  path: string
}

export const pages: Pages[] = [
  { id: uuid(), title: 'Home', path: '/' },
  { id: uuid(), title: 'Tech', path: '/tech' },
  { id: uuid(), title: 'Blog', path: '/blog' },
  { id: uuid(), title: 'Contact', path: '/contact' },
]
