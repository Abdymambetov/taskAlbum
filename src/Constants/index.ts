export const innerHeight = window.innerHeight;
export const innerWidth = window.innerWidth;

export const thumbnailSize = 150;

export const numberOfColumns = Math.floor((innerWidth - thumbnailSize) / thumbnailSize);
export const numberOfRows = Math.floor((innerHeight - thumbnailSize) / thumbnailSize);
export const numberOfItemsFitting = numberOfColumns * numberOfRows