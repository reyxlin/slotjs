// export const SYMBOLS_CLASSIC = [
//     '🍋', '🍊', '🍉', '🍈', '🍇', '🥝', '🍓', '🍒', '🌟', '🍀', '💎', '🎰'];

// export const SYMBOLS_CHRISTMAS = [
//     '🧣', '⛄', '🎄', '🎁', '🎀', '🍾', '🍷', '🔔', '🌟', '🦌', '🎅'];

// export const SYMBOLS_HALLOWEEN = [
//     '🌚', '🎃', '🦇', '😈', '🧠', '👹', '👽', '🤡', '👻', '🧟‍', '🧛‍', '💀'];

// export const SYMBOLS_ANIMALS = [
//     '🐞', '🐟', '🐭', '🐸', '🐓', '🐷', '🦀', '🐍', '🦊‍', '🦁', '🦕', '🦖'];

// export const SYMBOLS_SPORTS = [
//     '🎯', '🎱', '🏐', '⛳', '⚾', '🏈', '🏀', '⚽', '🥉', '🥈', '🥇', '🏆'];

// export const SYMBOLS_LOVE = [
//     '💌', '🎁', '📸', '💘', '💋', '🔞', '💑', '💍', '💎', '💖',
// ];

// export const SYMBOLS_FORTUNE = [
//     '🎴', '🎲', '🕶', '🥃', '💷', '💴', '💵', '💰', '🍀', '💎', '🎰', '🧞‍️', '🃏'];

// export const SYMBOLS_FOOD = [
//     '🥦', '🍋', '🍆', '🍙', '🍯', '🍑', '🍓', '🍭', '🍫', '🍩', '🍕', '🍗', '🥩', '🍣',
// ];

// export const ALL_SYMBOLS = [
//     SYMBOLS_CLASSIC,
//     SYMBOLS_CHRISTMAS,
//     SYMBOLS_HALLOWEEN,
//     SYMBOLS_ANIMALS,
//     SYMBOLS_SPORTS,
//     SYMBOLS_LOVE,
//     SYMBOLS_FORTUNE,
//     SYMBOLS_FOOD,
// ];

export const NUMBER_SYMBOLS = [
    '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣',
];

export const generateNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 50; i++) {
        const numStr = i.toString().padStart(2, '0');
        const symbol = numStr.split('').map((n) => NUMBER_SYMBOLS[parseInt(n)]).join('');
        numbers.push(symbol);
    }
    return numbers;
};

export const ALL_NUMBERS = generateNumbers();

export const SYMBOLS_RANDOM = [...NUMBER_SYMBOLS];
