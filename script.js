// public/script.js
async function generateCode() {
  const promptInput = document.getElementById('prompt-input');
  const generatedCodeContainer = document.getElementById('generated-code');

  const prompt = promptInput.value.trim();
  if (!prompt) {
    alert('Please enter a prompt.');
    return;
  }

  try {
    const response = await fetch('/generate-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch generated code from the server');
    }

    const data = await response.json();
    const generatedCode = data.generatedCode;
    generatedCodeContainer.textContent = generatedCode;
  } catch (error) {
    console.error('Error:', error);
    generatedCodeContainer.textContent = 'Error generating code.';
  }
}
