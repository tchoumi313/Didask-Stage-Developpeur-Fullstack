// State variables
var currentContent = '';
var isCodeBlock = false;
var isInlineCode = false;
var codeBlockLanguage = '';
// Main Markdown rendering function
function renderMarkdown(chunk) {
    var outputElement = document.getElementById('markdown-output');
    // Helper function to add elements to DOM
    function createElement(tag, content) {
        var element = document.createElement(tag);
        element.innerHTML = content;
        outputElement === null || outputElement === void 0 ? void 0 : outputElement.appendChild(element);
    }
    // Detect Markdown tag type
    if (chunk.startsWith('```')) {
        // Multi-line code block
        if (isCodeBlock) {
            // End of code block
            createElement('pre', currentContent);
            currentContent = '';
            isCodeBlock = false;
            codeBlockLanguage = '';
        }
        else {
            // Start of code block
            isCodeBlock = true;
            codeBlockLanguage = chunk.slice(3).trim(); // Get the language if specified
            return;
        }
        return;
    }
    if (isCodeBlock) {
        // Accumulate multi-line code content
        currentContent += chunk;
        return;
    }
    if (chunk.startsWith('`')) {
        // Inline code
        if (isInlineCode) {
            createElement('pre', currentContent);
            currentContent = '';
            isInlineCode = false;
        }
        else {
            isInlineCode = true;
        }
        return;
    }
    if (isInlineCode) {
        // Accumulate inline code content
        currentContent += chunk;
        return;
    }
    if (chunk.startsWith('# ')) {
        createElement('h1', chunk.slice(2));
        return;
    }
    if (chunk.startsWith('## ')) {
        createElement('h2', chunk.slice(3));
        return;
    }
    if (chunk.startsWith('### ')) {
        createElement('h3', chunk.slice(4));
        return;
    }
    // Handle text lines
    if (chunk.endsWith('  ')) {
        // Line end with two spaces for line break
        createElement('div', currentContent + chunk.trim());
        createElement('br', '');
        currentContent = '';
    }
    else {
        currentContent += chunk;
    }
    // At the end of the function, add:
    if (currentContent) {
        createElement('div', currentContent);
        currentContent = '';
    }
}
