# Drag-and-Drop Website Builder

A lightweight and interactive drag-and-drop website builder that allows users to dynamically add and position elements like **paragraphs, headings, buttons, and images** on a webpage. Built using **HTML, CSS, JavaScript, and Vite**, it demonstrates how to implement drag-and-drop using the **`DataTransfer` API**.

## Features

- **Drag and Drop Support**: Rearrange elements (paragraphs, headings, buttons, images) using native HTML5 drag-and-drop with the `DataTransfer` API.
- **Dynamic Layout**: Place and reposition elements freely on the canvas.
- **Intuitive UI**: User-friendly interface with visual feedback during drag and drop.
- **Customizable Elements** *(WIP)*: Designed for future enhancements such as style and content customization.
- **Fast Build Tooling**: Powered by Vite for lightning-fast development and build processes.

## Elements Supported

- **Paragraph**
- **Heading**
- **Button**
- **Image**

## Drag-and-Drop Mechanism

The drag-and-drop feature is implemented using the native HTML5 `dragstart`, `dragover`, and `drop` events. The `DataTransfer` object is used to pass information about the dragged element between events, enabling smooth placement of elements.

## Project Structure

\`\`\`plaintext
Drag-and-drop/
├── public/
│   └── index.html       # Core HTML layout
├── src/
│   ├── main.js          # JavaScript logic for drag-and-drop
│   └── style.css        # Styling for layout and drag feedback
├── vite.config.js       # Vite configuration
├── package.json         # Project metadata and dependencies
└── README.md            # This file
\`\`\`

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

\`\`\`bash
git clone https://github.com/aditya038/Drag-and-drop.git
cd Drag-and-drop
npm install
\`\`\`

### Running the App

\`\`\`bash
npm run dev
\`\`\`

Open your browser at [http://localhost:5173](http://localhost:5173) to use the builder.

### Build for Production

\`\`\`bash
npm run build
\`\`\`

The production-ready files will be available in the `dist/` directory.

## How to Use

1. Drag elements (paragraphs, buttons, images, headings) from the sidebar or source panel.
2. Drop them anywhere on the main canvas.
3. Reorder or reposition them by dragging again.
4. Watch the `DataTransfer` API seamlessly manage the element transfer process.

## Future Improvements

- Customization panel (color, text, alignment, etc.)
- Element deletion and undo functionality
- Export to HTML/CSS
- Mobile support and responsive canvas

## Contributing

Feel free to fork the repo and submit pull requests.

\`\`\`bash
git checkout -b feature/my-feature
git commit -m "Add new feature"
git push origin feature/my-feature
\`\`\`

---

**Made by [Aditya Chauhan](https://github.com/aditya038)** 🚀
