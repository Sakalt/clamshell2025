document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.getAttribute('data-key');
        handleKeyInput(keyValue);
    });
});

function handleKeyInput(keyValue) {
    // キー入力に対応するアクションを実行
    console.log(`Key pressed: ${keyValue}`);

    // 特定のキー操作に基づいたアクションを実装
    switch (keyValue) {
        case 'ENTER':
            console.log('Enter key action');
            break;
        case 'SPACE':
            console.log('Space key action');
            break;
        case 'BACKSPACE':
            console.log('Backspace key action');
            break;
        default:
            console.log(`Regular key action: ${keyValue}`);
    }
}
