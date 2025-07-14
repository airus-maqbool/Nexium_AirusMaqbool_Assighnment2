// Simple dictionary-based translation
export const translateToUrdu = (text: string): string => {
  const dictionary: Record<string, string> = {
    "Jealousy": "حسد",
    "teaches": "سکھاتی ہے",
    "important": "اہم",
    "things": "چیزیں",
    "ourselves": "خود کو",
    "sign": "اشارہ",
    "stop": "رک جائیں",
    "think": "سوچیں",
    "comparing": "موازنہ",
    "enough": "کافی",
    "nobody": "کوئی نہیں",
    "everything": "سب کچھ",
    "choices": "اختیارات",
    "matters": "اہم",
    "ask": "پوچھیں",
    "truly": "سچ میں",
    "others": "دوسرے",
    "chase": "پیچھا کریں",
    "successful": "کامیاب",
    "happy": "خوش",
    "healthiest": "صحت مند",
    "approach": "طریقہ",
    "focus": "توجہ",
    "fits": "فٹ ہوتا ہے",
    "values": "اقدار",
    "break": "وقفہ",
    "social media": "سوشل میڈیا",
    "compare": "موازنہ کریں",
    "online": "آن لائن",
    "remember": "یاد رکھیں",
    "everyone": "سب",
    "right": "صحیح",
    "understand": "سمجھنا",
    "wisely": "عقلمندی سے"
  };

  return text.split(' ').map(word => 
    dictionary[word] || word
  ).join(' ');
};