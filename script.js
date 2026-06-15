
const fontFamilySelect = document.getElementById('fontFamily');
const fontSizeInput = document.getElementById('fontSize');
const lineHeightInput = document.getElementById('lineHeight');
const letterSpacingInput = document.getElementById('letterSpacing');

const textPreview = document.getElementById('textPreview');
const copyCssBtn = document.getElementById('copyCssBtn');


const sizeVal = document.getElementById('sizeVal');
const heightVal = document.getElementById('heightVal');
const spacingVal = document.getElementById('spacingVal');


function updateTypography() {
    const font = fontFamilySelect.value;
    const size = `${fontSizeInput.value}rem`;
    const headingSize = `${parseFloat(fontSizeInput.value) * 1.5}rem`; 
    const height = lineHeightInput.value;
    const spacing = `${letterSpacingInput.value}px`;

  
    sizeVal.textContent = size;
    heightVal.textContent = height;
    spacingVal.textContent = spacing;

    
    textPreview.style.fontFamily = font;
    textPreview.style.fontSize = size;
    textPreview.style.lineHeight = height;
    textPreview.style.letterSpacing = spacing;
}


fontFamilySelect.addEventListener('input', updateTypography);
fontSizeInput.addEventListener('input', updateTypography);
lineHeightInput.addEventListener('input', updateTypography);
letterSpacingInput.addEventListener('input', updateTypography);


copyCssBtn.addEventListener('click', () => {
    const cssString = `font-family: ${fontFamilySelect.value};\n` +
                      `font-size: ${fontSizeInput.value}rem;\n` +
                      `line-height: ${lineHeightInput.value};\n` +
                      `letter-spacing: ${letterSpacingInput.value}px;`;

    navigator.clipboard.writeText(cssString);
    
 
    const originalText = copyCssBtn.textContent;
    copyCssBtn.textContent = "Copied to Clipboard! ⚡";
    copyCssBtn.style.backgroundColor = "#22c55e";
    
    setTimeout(() => {
        copyCssBtn.textContent = originalText;
        copyCssBtn.style.backgroundColor = "#06b6d4";
    }, 2000);
});


updateTypography();