

const addCustomBlocks = (editor) => {
    const blockManager = editor.BlockManager;
  
    // Helper function to create uniform block styles
    const createBlock = (label, content, category, className = '', style = '') => {
      blockManager.add(label.toLowerCase().replace(/\s+/g, '-'), {
        label,
        content,
        category,
        attributes: { class: className },
        style,
      });
    };
  
    // Basic blocks
    createBlock('Image', { type: 'image' }, 'Basic', 'fa fa-image', 'width: 100%; height: 150px;');
    createBlock('Link', { type: 'link' }, 'Basic', 'fa fa-link', 'width: 100%; height: 50px;');
    createBlock('Video', { type: 'video' }, 'Basic', 'fa fa-video', 'width: 100%; height: 150px;');
    createBlock('Text', { type: 'text' }, 'Basic', 'fa fa-text', 'width: 100%; height: 50px;');
  
    // Section blocks
    createBlock('1 Section', '<section class="block-section"></section>', 'Sections', '', 'width: 100%; height: 150px;');
    createBlock('1/2 Section', '<section class="section"><div class="w-1/2"></div><div class="w-1/2"></div></section>', 'Sections', '', 'width: 100%; height: 150px;');
    createBlock('1/3 Section', '<section class="section"><div class="w-1/3"></div><div class="w-1/3"></div><div class="w-1/3"></div></section>', 'Sections', '', 'width: 100%; height: 150px;');
    createBlock('3/7 Section', '<section class="section"><div class="w-3/7"></div><div class="w-4/7"></div></section>', 'Sections', '', 'width: 100%; height: 150px;');
  
    // Component blocks
    createBlock('Button', '<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>', 'Components', 'fa fa-hand-pointer-o', 'width: 100%; height: 50px;');
    createBlock('Divider', '<hr class="divider">', 'Components', 'fa fa-minus', 'width: 100%; height: 20px;');
    createBlock('Hero', '<section class="hero">Hero Section</section>', 'Components', 'fa fa-arrow-up', 'width: 100%; height: 150px;');
    createBlock('Text Section', '<div class="text-section">Text Section</div>', 'Components', 'fa fa-file-text', 'width: 100%; height: 100px;');
    createBlock('Map', '<div class="map">Map</div>', 'Components', 'fa fa-map-marker', 'width: 100%; height: 150px;');
    createBlock('Quote', '<blockquote class="quote">Quote</blockquote>', 'Components', 'fa fa-quote-right', 'width: 100%; height: 100px;');
    createBlock('Grid', '<div class="grid grid-cols-3 gap-4"><div>Item 1</div><div>Item 2</div><div>Item 3</div></div>', 'Components', 'fa fa-th', 'width: 100%; height: 150px;');
    createBlock('List Items', '<ul class="list"><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>', 'Components', 'fa fa-list', 'width: 100%; height: 100px;');
  };
  
  export default addCustomBlocks;
  