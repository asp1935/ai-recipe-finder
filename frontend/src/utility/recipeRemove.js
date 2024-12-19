export const recipeRemove=(string)=>{
    const wordsToRemove=['recipe','recipes'];
    const regex= new RegExp(`\\b(${wordsToRemove.join('|')})\\b`,'gi');
    return string.replace(regex,'').replace(/\s{2,}/g,' ').trim();
}