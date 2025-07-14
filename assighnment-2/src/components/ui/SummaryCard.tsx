"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function SummaryCard({ summary }: { summary: string }) {
  const [isUrdu, setIsUrdu] = useState(false);

  const fullUrduTranslation = `حسد درحقیقت ہمیں اپنے بارے میں اہم باتیں سکھا سکتی ہے۔ جب ہم دوسروں سے حسد محسوس کرتے ہیں، تو یہ رکنے اور سوچنے کی علامت ہے۔ شاید ہم خود کا دوسروں سے زیادہ موازنہ کر رہے ہیں یا ایسا محسوس کر رہے ہیں کہ ہم کافی کچھ نہیں کر رہے۔ لیکن کوئی بھی سب کچھ نہیں کر سکتا – ہمیں اپنی زندگی میں واقعی اہم چیزوں کے بارے میں انتخاب کرنے ہوتے ہیں۔

حسد سے نمٹنے کا ایک اچھا طریقہ یہ ہے کہ "کیوں" کا سوال چند بار پوچھا جائے۔ میں وہ چیز کیوں چاہتا ہوں؟ کیا یہ اس لیے ہے کہ میں واقعی چاہتا ہوں، یا صرف اس لیے کہ دوسروں کے پاس ہے؟ اکثر ہم چیزوں کا پیچھا صرف کامیاب دکھنے کے لیے کرتے ہیں، نہ کہ اس لیے کہ وہ ہمیں خوشی دیں گی۔

سب سے صحت مند طریقہ یہ ہے کہ اپنی زندگی اور اقدار پر توجہ مرکوز کریں۔ سوشل میڈیا سے تھوڑا وقفہ لینا مددگار ہوتا ہے، کیونکہ آن لائن دوسروں سے موازنہ کرنا آسان ہوتا ہے۔ یاد رکھیں – آپ کو صرف اس لیے کچھ کرنے کی ضرورت نہیں کہ سب کر رہے ہیں۔ اہم یہ ہے کہ کیا چیز آپ کے لیے صحیح ہے۔ حسد ہمیں بہتر طور پر خود کو سمجھنے میں مدد دے سکتی ہے، اگر ہم اسے عقلمندی سے استعمال کریں۔`;

  return (
    <Card className="mt-8 bg-white border border-purple-200 shadow-sm">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-purple-700">
            Blog Summary
          </CardTitle>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-700 hover:bg-purple-100"
            onClick={() => setIsUrdu(!isUrdu)}
          >
            {isUrdu ? "Show English" : "Translate to Urdu"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div
          dir={isUrdu ? "rtl" : "ltr"}
          className={`text-gray-800 text-base leading-relaxed ${isUrdu ? "text-right" : "text-left"}`}
        >
          {(isUrdu ? fullUrduTranslation : summary)
            .split("\n\n")
            .map((para, idx) => (
              <p key={idx} className="mb-4 text-justify">
                {para}
              </p>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
