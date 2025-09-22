/**
 * Truncates a given text to a maximum length and appends "..." if it exceeds the limit.
 *
 * @param {string} txt - النص المراد تقطيعه.
 * @param {number} [max=50] - الطول الأقصى للنص قبل إضافة "...".
 * @returns {string} النص المقطوع أو النص الأصلي لو أقصر من الحد الأقصى.
 *
 * @example
 * textSlice("Hello World", 5); 
 * // "Hello..."
 *
 * @example
 * textSlice("Hi", 5); 
 * // "Hi"
 */

export function textSlice(txt: string, max: number = 50) {
    if (txt.length >= max) {
        return `${txt.slice(0, max)}...`;
    }
    return txt;
}