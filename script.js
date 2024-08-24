document.addEventListener('DOMContentLoaded', function () {
    const keysContainer = document.getElementById('keys');
    const keyLabels = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ' ', 'Backspace', 'Enter'];

    // キーボードキーを作成
    keyLabels.forEach(label => {
        const key = document.createElement('div');
        key.className = 'key';
        key.textContent = label === ' ' ? 'Space' : label;
        key.addEventListener('click', () => {
            console.log(`${label} key pressed`);
            // キーボード入力に対応する動作を追加
        });
        keysContainer.appendChild(key);
    });

    // 実際のキーボード入力に対応
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (keyLabels.includes(key)) {
            if (key === ' ') {
                console.log('Space key pressed');
                // スペースキーの処理を追加
            } else if (key === 'Backspace') {
                console.log('Backspace key pressed');
                // バックスペースキーの処理を追加
            } else if (key === 'Enter') {
                console.log('Enter key pressed');
                // エンターキーの処理を追加
            } else {
                console.log(`${key} key pressed`);
                // その他のキー入力に対応する動作を追加
            }
        }
    });
});
