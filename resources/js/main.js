function copyToClipboard(sourceElementId, buttonElementId) {
  const sourceElement  = document.getElementById(sourceElementId);
  const buttonElement  = document.getElementById(buttonElementId);
  const originalColor  = buttonElement.style.color;
  const originalBorder = buttonElement.style.borderColor;

  navigator.clipboard.writeText(sourceElement.value).then(() => {
    buttonElement.textContent = '✓ copied';
    buttonElement.style.color       = '#ffffff';
    buttonElement.style.borderColor = '#ffffff';

    setTimeout(() => {
      buttonElement.textContent = '⧉ copy';
      buttonElement.style.color       = originalColor;
      buttonElement.style.borderColor = originalBorder;
    }, 1800);
  });
}