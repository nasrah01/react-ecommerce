export default {
  name: 'mosaic',
  title: 'Mosaic',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string'
    }
  ]
}