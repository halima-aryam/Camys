import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {myTheme} from './theme'
import './studio.css'
import {media} from 'sanity-plugin-media'
import React from 'react'

function CustomLogo() {
  return React.createElement('span', { 
    style: { 
      fontFamily: '"Cinzel Decorative", serif', 
      color: '#f472b6', 
      fontSize: '24px', 
      fontWeight: 'bold',
      letterSpacing: '1px'
    } 
  }, "Camy's")
}

export default defineConfig({
  name: 'default',
  title: 'Camys Merch Gallery',

  projectId: 'lx69lds8',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
  studio: {
    components: {
      logo: CustomLogo
    }
  }
})
