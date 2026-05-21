export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price (TSH)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Bags', value: 'bags'},
          {title: 'Jewellery', value: 'jewellery'},
          {title: 'Keychains', value: 'keychains'},
          {title: 'Posters', value: 'posters'},
          {title: 'Apparel', value: 'apparel'},
          {title: 'Accessories', value: 'accessories'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Tag (e.g. New, Limited)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'badge',
      title: 'Badge (Optional)',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title,
        subtitle: subtitle ? `${subtitle} TSH` : '',
        media,
      }
    },
  },
}
