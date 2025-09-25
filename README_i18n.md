# SARRA Multilingual Interface

This implementation adds comprehensive multilingual support to the SARRA website with English, Kazakh, and Russian languages.

## Features

- **Default Language**: English (en)
- **Supported Languages**: 
  - English (EN)
  - Kazakh (ҚАЗ) 
  - Russian (РУС)
- **Language Switcher**: Fixed top-right corner on all pages
- **Persistent Selection**: Language choice saved in localStorage
- **Dynamic Updates**: All text updates instantly when language is changed

## Implementation

### Core Components

1. **i18n.js**: Main internationalization system
   - Translation database for all three languages
   - Language switching functionality
   - Automatic text updates
   - Language switcher component

2. **Updated HTML files**:
   - `index.html`: Main page with language switcher
   - `about.html`: About page with full translation support
   - `chat.html`: Chat interface with comprehensive multilingual support

### Translation Keys

All translatable text uses `data-i18n` attributes:

```html
<h1 data-i18n="title">SARRA</h1>
<p data-i18n="tagline">Feedback-Driven LLM Adaptation</p>
<input data-i18n-placeholder="ask_placeholder" placeholder="Ask a question...">
```

### Language Switcher

The language switcher appears in the top-right corner of every page with buttons for:
- EN (English)
- ҚАЗ (Kazakh) 
- РУС (Russian)

### Translated Content

#### Common Elements
- Site title and tagline
- Navigation elements
- Form placeholders
- Button text

#### Index Page
- Main headline and description
- Input placeholder
- Card descriptions

#### About Page
- Complete project description
- Navigation elements

#### Chat Interface
- Welcome messages
- Chat controls
- Rating system
- Validation messages
- History management
- All user interface text

### Technical Details

#### JavaScript API

```javascript
// Get current language
i18n.getCurrentLang() // returns 'en', 'kk', or 'ru'

// Get translation
i18n.t('key') // returns translated text

// Change language
i18n.setLang('kk') // changes to Kazakh

// Initialize system
i18n.init() // sets up language switcher and applies translations
```

#### Adding New Translations

To add a new translatable text:

1. Add the translation key to all languages in `i18n.js`:
```javascript
en: {
  'new_key': 'English text'
},
kk: {
  'new_key': 'Қазақша мәтін'
},
ru: {
  'new_key': 'Русский текст'
}
```

2. Add the data attribute to HTML:
```html
<element data-i18n="new_key">Default text</element>
```

#### Language Detection

The system uses this priority order:
1. Previously saved language in localStorage
2. Default to English ('en')

### Files Modified

- `index.html` - Added i18n attributes and scripts
- `about.html` - Added i18n attributes and scripts  
- `chat.html` - Comprehensive i18n integration
- `script.js` - Minor compatibility updates
- `i18n.js` - New internationalization system

### Browser Compatibility

- Modern browsers with ES6 support
- localStorage support required for language persistence
- No external dependencies

### Usage

1. Open any page of the SARRA website
2. Click the language switcher in the top-right corner
3. Select desired language (EN/ҚАЗ/РУС)
4. All text updates immediately
5. Language preference is remembered for future visits

The implementation ensures a seamless multilingual experience across all pages of the SARRA website while maintaining the original design and functionality.